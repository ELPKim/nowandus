import json
import requests
from datetime import datetime

DATA_FILE = 'holiday-data.json'
COUNTRIES = {
    "South Korea": "KR", "USA": "US", "Japan": "JP", "China": "CN", "UK": "GB", 
    "France": "FR", "Germany": "DE", "Canada": "CA", "Australia": "AU", "Italy": "IT",
    "Spain": "ES", "Switzerland": "CH", "Singapore": "SG", "Taiwan": "TW", "Thailand": "TH",
    "Vietnam": "VN", "Malaysia": "MY", "Indonesia": "ID", "Philippines": "PH", "UAE": "AE",
    "Turkey": "TR", "Russia": "RU", "Brazil": "BR", "Mexico": "MX", "Argentina": "AR",
    "New Zealand": "NZ", "South Africa": "ZA"
}

def main():
    current_year = datetime.now().year
    all_holidays = {}

    for country_name, code in COUNTRIES.items():
        print(f"Fetching holidays for {country_name} ({code})...")
        url = f"https://date.nager.at/api/v3/PublicHolidays/{current_year}/{code}"
        try:
            response = requests.get(url)
            if response.status_code == 200:
                holidays = response.json()
                all_holidays[country_name] = [
                    {
                        "date": h.get("date"),
                        "localName": h.get("localName"),
                        "name": h.get("name")
                    } for h in holidays
                ]
            else:
                print(f"Error for {country_name}: {response.status_code}")
                all_holidays[country_name] = []
        except Exception as e:
            print(f"Exception for {country_name}: {e}")
            all_holidays[country_name] = []

    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        json.dump(all_holidays, f, ensure_ascii=False, indent=4)
    
    print("Holiday data update complete.")

if __name__ == "__main__":
    main()
