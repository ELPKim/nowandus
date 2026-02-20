import os
import json
import requests

API_KEY = os.environ.get('EXCHANGE_RATE_API_KEY')
DATA_FILE = 'exchange-data.json'

def main():
    if not API_KEY:
        print("Error: EXCHANGE_RATE_API_KEY not found.")
        return

    # 한국(KRW)을 기준점으로 주요 통화 환율을 가져옵니다.
    url = f"https://v6.exchangerate-api.com/v6/{API_KEY}/latest/KRW"
    
    try:
        response = requests.get(url)
        if response.status_code == 200:
            data = response.json()
            # 필요한 정보만 추출하여 저장
            result = {
                "base_code": data.get("base_code"),
                "conversion_rates": data.get("conversion_rates"),
                "time_last_update_utc": data.get("time_last_update_utc")
            }
            with open(DATA_FILE, 'w', encoding='utf-8') as f:
                json.dump(result, f, ensure_ascii=False, indent=4)
            print("Exchange rate data updated successfully.")
        else:
            print(f"Error: {response.status_code}")
    except Exception as e:
        print(f"Exception: {e}")

if __name__ == "__main__":
    main()
