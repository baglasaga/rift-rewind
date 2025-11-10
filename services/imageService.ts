const imageService = {
    getSummonerProfile: async (puuid: string) => {
        console.log(puuid);
        // todo
    },

    getChampionImage: (name: string)=> {

        return `https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/${name}.png`
    }
}

export default imageService;