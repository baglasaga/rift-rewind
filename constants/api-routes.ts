const RIOT_API = "https://americas.api.riotgames.com";
const NA_SERVER_API = "https://na1.api.riotgames.com";

export const ROUTES = {
    ENTRY_POINT: 'https://nztmkg2wvarjlnwhvoy43t4esm0hhppg.lambda-url.us-east-2.on.aws/',
    PROCESSING: 'https://2easltf5j63rpxcaq3v6yqjss40ijfdx.lambda-url.us-east-2.on.aws/',
    ACCOUNT: `${RIOT_API}/riot/account/v1/accounts/by-riot-id`,
    SUMMONER: `${NA_SERVER_API}/lol/summoner/v4/summoners/by-puuid`
}