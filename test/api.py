import requests
import urllib3
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

url = "https://92.88.14.43:3000/users/find"
# url = "http://localhost:3000/users/find"
headers = {"X-API-KEY": "d05cbcd8c5080212e6f1f54a989492be300b82110f08c40eac8ccb54f0654669"}
# headers = {"X-API-KEY": "lolilol"}

response = requests.get(url=url, headers=headers, data={"cardId": "1df196db-9c95-490b-aed1-e27e55337f1f"}, verify=False)

response_json = response.json()
print(response_json)