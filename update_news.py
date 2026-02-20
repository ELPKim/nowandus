import os
import json
import requests

# API 설정
API_KEY = os.environ.get('WORLD_NEWS_API_KEY')
NEWS_DATA_FILE = 'news-data.json'

# 뉴스 수집 대상 국가 코드 (WorldNewsAPI 기준)
COUNTRIES = {
    "South Korea": "kr", "USA": "us", "Japan": "jp", "China": "cn", "UK": "gb", 
    "France": "fr", "Germany": "de", "Canada": "ca", "Australia": "au", "Italy": "it",
    "Spain": "es", "Switzerland": "ch", "Singapore": "sg", "Taiwan": "tw", "Thailand": "th",
    "Vietnam": "vn", "Malaysia": "my", "Indonesia": "id", "Philippines": "ph", "UAE": "ae",
    "Turkey": "tr", "Russia": "ru", "Brazil": "br", "Mexico": "mx", "Argentina": "ar",
    "New Zealand": "nz", "South Africa": "za",
    "Others": "" # 빈 문자열은 특정 국가 제한 없이 검색
}

def fetch_country_news(country_code, lang):
    if not API_KEY:
        return []
    
    url = f"https://api.worldnewsapi.com/search-news?api-key={API_KEY}&language={lang}&number=5"
    if country_code:
        url += f"&source-countries={country_code}"
    else:
        # Others의 경우 전 세계 최신 뉴스를 가져오기 위해 정렬 기준 추가
        url += "&sort=publish-time&sort-direction=desc"

    try:
        response = requests.get(url)
        if response.status_code == 200:
            return response.json().get('news', [])
        else:
            print(f"Error fetching news for {country_code or 'Others'}: {response.status_code}")
            return []
    except Exception as e:
        print(f"Exception for {country_code or 'Others'}: {e}")
        return []

def main():
    if not API_KEY:
        print("Error: WORLD_NEWS_API_KEY not found in environment.")
        return

    all_news = {}
    
    for country_name, code in COUNTRIES.items():
        print(f"Fetching news for {country_name}...")
        # 한국은 한국어 뉴스, 나머지는 영어 뉴스를 기본으로 가져옵니다
        lang = 'ko' if code == 'kr' else 'en'
        news_items = fetch_country_news(code, lang)
        
        # 데이터 경량화를 위해 필요한 필드만 저장
        filtered_news = []
        for n in news_items:
            if not n.get('title'):
                continue
            filtered_news.append({
                'title': n.get('title'),
                'text': n.get('text')[:200] if n.get('text') else "",
                'url': n.get('url'),
                'publish_date': n.get('publish_date')
            })
        
        all_news[country_name] = filtered_news

    # 결과 저장
    with open(NEWS_DATA_FILE, 'w', encoding='utf-8') as f:
        json.dump(all_news, f, ensure_ascii=False, indent=4)
    
    print("News update complete.")

if __name__ == "__main__":
    main()
