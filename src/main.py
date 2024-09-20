import math
import random
import re
import time
from pprint import pprint

import tls_client


class CyberSolver:

    def __init__(self, master_url_id: str, request_url: str, user_agent: str):
        self.master_url_id = master_url_id
        self.request_url = request_url
        self.__session = tls_client.Session(client_identifier="firefox_120")
        self.__sleep_time = random.randint(3000, 10000)
        self._load_time = int(time.time()) - self.__sleep_time
        self._visitor_id = ""
        self._request_id = ""
        self._user_agent = user_agent
        self._browser_data = None

        self._generate_fingerprint()
        self._generate_visitor_id()

    @staticmethod
    def __encoded_data(data) -> str:
        default = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        enc = ""
        index = 0
        data = list(data)
        while index < len(data):
            try:
                o1 = data[index + 0] if index == 0 else data[index + 1]
                o2 = data[index + 1] if index == 0 else data[index + 2]
                o3 = data[index + 2] if index == 0 else data[index + 3]
                bits = int(o1) << 16 | int(o2) << 8 | int(o3)
                h1 = bits >> 18 & 63
                h2 = bits >> 12 & 63
                h3 = bits >> 6 & 63
                h4 = bits & 63
                enc += default[h1] + default[h2] + default[h3] + default[h4]
                index = index + 2 if index == 0 else index + 3
            except IndexError:
                break
        for i in range(len(data) % 3):
            enc += "="
        return enc

    @property
    def headers(self) -> dict[str, str]:
        return {
            "User-Agent": self._user_agent,
            "Accept": "application/json, text/javascript, */*; q=0.01",
            "Accept-Language": "en-US,en;q=0.5",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Origin": "https://www.cybersiara.com",
            "Connection": "keep-alive",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "cross-site",
            "Pragma": "no-cache",
            "Cache-Control": "no-cache",
        }

    @property
    def browser_identity(self) -> str:
        return self.__encoded_data(self.uid)

    @property
    def visitor_id(self) -> str:
        return str(self._visitor_id)

    def _user_waiting_duration(self, t) -> int:
        i = t - self._load_time
        n = math.floor(i / 1000 / 60 / 60)
        i -= 1000 * n * 60 * 60
        o = math.floor(i / 1000 / 60)
        i -= 1000 * o * 60
        r = math.floor(i / 1000)
        i -= 1000 * r
        return int(n + 0 + o + 0 + r)

    @staticmethod
    def _reload_plgun_duration(date22) -> int:
        msec = date22
        hh = math.floor(msec / 1000 / 60 / 60)
        msec -= hh * 1000 * 60 * 60
        mm = math.floor(msec / 1000 / 60)
        msec -= mm * 1000 * 60
        ss = math.floor(msec / 1000)
        msec -= ss * 1000
        return int(ss)

    def _generate_visitor_id(self) -> None:
        self._visitor_id = math.floor(
            random.random() * (math.ceil(100000) - math.floor(999999) + 1)
        ) + math.floor(999999)

    def _generate_fingerprint(self) -> None:
        screen = random.choice(
            [
                "1920x1080",
                "1920x1200",
                "2560x1440",
                "2560x1600",
                "3840x2160",
                "4096x2304",
                "5120x2880",
            ]
        )
        browser_data = {
            "mimeTypesLength": "0",
            "userAgent": re.sub(r"\D", "", self._user_agent),
            "pluginsLength": str(random.choice([0, 5])),
            "screenHeight": screen.split("x")[0],
            "screenWidth": screen.split("x")[1],
            "pixelDepth": "24",
        }
        self._browser_data = browser_data
        uid = browser_data["mimeTypesLength"]
        uid += browser_data["userAgent"]
        uid += browser_data["pluginsLength"]
        uid += browser_data["screenHeight"]
        uid += browser_data["screenWidth"]
        uid += browser_data["pixelDepth"]
        self.uid = uid

    def start_captcha(self) -> bool:
        data = {
            "MasterUrlId": self.master_url_id,
            "DeviceName": self._user_agent.replace(" ", "+"),
            "RequestUrl": self.request_url,
            "BrowserIdentity": self.browser_identity,
            "PluginNo": self._browser_data["pluginsLength"],
            "VisiterId": self._generate_visitor_id(),
            "LanguageId": 1,
            "RequestID": "0",
            "LangChange": "0",
            "ClickSecond": self._reload_plgun_duration(int(time.time())),
            "Iscookie": "1",
            "DeviceHeight": self._browser_data["screenHeight"],
            "DeviceWidth": self._browser_data["screenWidth"],
        }
        response = self.__session.post(
            "https://embed.mycybersiara.com/api/CyberSiara/GetCyberSiara",
            headers=self.headers,
            data=data,
        )

        if response.status_code == 200 and response.json()["Message"] == "success":
            self._request_id = response.json()["RequestId"]
            return True
        else:
            return False

    def verification_fingerprint(self) -> bool:
        time.sleep(random.random() * 2)
        data = {
            "RequestID": self._request_id,
            "FPID": self.browser_identity,
            "VisiterId": self.visitor_id,
        }
        response = self.__session.post(
            "https://embed.mycybersiara.com/api/v2/verification/fp",
            headers=self.headers,
            data=data,
        )

        if response.status_code == 200 and response.json()["FpStatus"] == "success":
            return True
        else:
            return False

    def solve_captcha(self) -> dict[str, str | bool]:
        time.sleep(self.__sleep_time / 1000)
        data = {
            "MasterUrl": self.master_url_id,
            "DeviceName": self._user_agent.replace(" ", "+"),
            "BrowserIdentity": self.browser_identity,
            "Protocol": "https:",
            "VisiterId": self.visitor_id,
            "second": str(self._user_waiting_duration(int(time.time()))),
            "RequestID": self._request_id,
        }
        response = self.__session.post(
            "https://embed.mycybersiara.com/api/v2/SubmitCaptcha/VerifiedSubmit",
            headers=self.headers,
            data=data,
        )
        response_json = response.json()

        if response.status_code == 200 and response_json["Message"] == "success":
            return {
                "success": True,
                "token": response_json["data"],
                "captcha": response_json["Captcha"],
            }
        else:
            return {"success": False}


def main() -> None:
    client = CyberSolver(
        master_url_id="OXR2LVNvCuXykkZbB8KZIfh162sNT8S2",
        request_url="https://www.cybersiara.com/book-a-demo",
        user_agent="Mozilla/5.0 (Windows NT 10.0; rv:109.0) Gecko/20100101 Firefox/120.0",
    )
    client.start_captcha()
    client.verification_fingerprint()
    result = client.solve_captcha()
    pprint(result)


if __name__ == "__main__":
    main()
