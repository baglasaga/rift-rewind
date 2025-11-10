import axios from "axios";
import {ROUTES} from "@/constants/api-routes";

const imageService = {
    getSummonerProfile: async (puuid: string) => {
        try {
            const response = await axios.get(`${ROUTES.SUMMONER}/${encodeURIComponent(puuid)}`, {
                headers: {
                    'X-Riot-Token': process.env.RIOT_TOKEN
                }
            });
            return response.data;
        } catch {
            throw new Error('Error getting summoner information');
        }
    },

    getProfileImage: (id: number) => {
        return `https://ddragon.leagueoflegends.com/cdn/15.22.1/img/profileicon/${id}.png`
    },

    getChampionImage: (name: string)=> {
        return `https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/${name}.png`
    }
}

export default imageService;