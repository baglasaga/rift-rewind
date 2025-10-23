import requests 
import json

# doing this to test data processing with small batches before scaling up in aws
# maybe eventually keep track of stand out matches, and then we can look those up later with the match timeline endpoint? idk idea

RIOT_API_KEY = "RGAPI-bb5364d9-d40e-48d4-ae38-4e0234182581" # TODO: change every 24hr 

# returns list of matches as well as puuid
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
    # find matches (optional, use queue=420 for ranked queue)
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

    return matches, puuid

# parses match data for basic info (can be expanded to get more data later)
def parse_match_data(file_path, puuid):
    print(f"Looking for puuid {puuid}")
    with open(file_path, 'r') as f:
        match_data = json.load(f)

    parsed_matches = []
    for match in match_data:
        print(f"Parsing match {match['metadata']['matchId']}")
        for participant in match['info']['participants']:
            if participant['puuid'] == puuid:
                parsed_info = {
                    'matchId': match['metadata']['matchId'],
                    'champion': participant['championName'],
                    'kills': participant['kills'],
                    'deaths': participant['deaths'],
                    'assists': participant['assists'],
                    'win': participant['win']
                }
                parsed_matches.append(parsed_info)
                break

    return parsed_matches

if __name__ == "__main__":
    print("Fetching match data...")
    matches, puuid = fetch_data(10)
    
    # create json file with all the match data
    with open('match_data.json', 'w') as f:
        json.dump(matches, f, indent=4)

    print("Parsing match data...")
    parsed_matches = parse_match_data('match_data.json', puuid)
    print(f"Parsed Matches: {parsed_matches}") # we can work from here!