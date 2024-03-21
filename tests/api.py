import requests
import urllib3
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

url = "https://92.88.14.43:3000"
# url = "http://localhost:3000"
register_url = url + "/auth/register"
login_url = url + "/auth/login"

# print(requests.get(url + '/account/balance', verify=False))

register_payload = {
    "email":"test@test.test",
    "password":"test",
    "age": 18,
    "gender": "male",
    "firstName": "test",
    "lastName": "Test",
    "cardId": "1df196db-9c95-490b-aed1-e27e55337f1f"
}

# login_payload = {
#     "email":"test1@test.test",
#     "password":"test"
# }

register_response = requests.post(register_url, json=register_payload, verify=False).json()
print(register_response)

# login_response = requests.post(login_url, json=login_payload, verify=False).json()
# print(login_response)

# access_token = login_response["access_token"]
# headers = {"Authorization": f"Bearer {access_token}"}

# print(requests.get(url + '/account/balance', headers=headers, verify=False).json())
