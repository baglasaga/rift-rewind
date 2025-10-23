import requests 
import json

RIOT_API_KEY = "RGAPI-bb5364d9-d40e-48d4-ae38-4e0234182581" # TODO: change every 24hr 

def fetch_data(batch_count=5):
    base_url = "https://americas.api.riotgames.com"
    puuid_url = f"{base_url}/riot/account/v1/accounts/by-riot-id/bag%20of%20lasagna/NA1"

    headers = {
        "X-Riot-Token": RIOT_API_KEY
    }

    # get the puuid for future requests
    response = requests.get(puuid_url, headers=headers)
    puuid = response.json()['puuid']
    print(f"puuid: {puuid}")

    # batch_count = 5
    year_start = 1735718400 # jan 1 2025 in epoch time 
    # find matches (optional, using 420 for ranked queue)
    match_id_url = f"{base_url}/lol/match/v5/matches/by-puuid/{puuid}/ids?count={batch_count}&startTime={year_start}"

    match_ids_response = requests.get(match_id_url, headers=headers)
    match_ids = match_ids_response.json()
    # print(f"match ids: {match_ids}")

    matches = []
    for match_id in match_ids: 
        match_url = f"{base_url}/lol/match/v5/matches/{match_id}"
        match_response = requests.get(match_url, headers=headers)
        match_data = match_response.json()
        matches.append(match_data)

    return matches

if __name__ == "__main__":
    print("Fetching match data...")
    matches = fetch_data(10)
    
    # create json file with all the match data
    with open('match_data.json', 'w') as f:
        json.dump(matches, f, indent=4)