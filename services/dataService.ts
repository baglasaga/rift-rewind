import axios from 'axios';
import {ROUTES} from "@/constants/api-routes";

const dataService = {
    getUser: async (gameName: string, tagLine: string): Promise<any> => {
        const maxRetries = 5;
        let attempt = 0;

        while (attempt < maxRetries) {
            try {
                const response = await axios.get(ROUTES.ENTRY_POINT, {
                    params: { gameName, tagLine },
                });
                return response.data;
            } catch (error: any) {
                if (axios.isAxiosError(error) && error.response?.status === 429) {
                    attempt++;
                    console.warn(`Rate limited. Retrying in 5 seconds... (Attempt ${attempt}/${maxRetries})`);
                    await new Promise(resolve => setTimeout(resolve, 5000));
                } else {
                    throw error;
                }
            }
        }

        throw new Error('Max retry attempts reached. Please try again later.');
    },


    getUserData: async (batchId: string, puuid: string): Promise<any> => {

        return new Promise((resolve, reject) => {
            let timeout: any = null;
            const startTime = Date.now();

            const fetchData = async () => {
                try {
                    const response = await axios.get(ROUTES.PROCESSING, {
                        params: { batch_id: batchId, puuid }
                    });

                    const data = response.data;

                    if (data.status === 'COMPLETE') {
                        if (timeout) clearTimeout(timeout);
                        resolve(data.results);
                        return;
                    }
                } catch (error) {
                    console.error('Error: ', error);
                }
                if (Date.now() - startTime > 60000) {
                    reject(new Error('Polling timed out'));
                    return;
                }

                timeout = setTimeout(fetchData, 2000);
            }

            fetchData();
        })
    },

    getEncryptedPuuid: async (gameName: string, tagLine: string) => {
        try {
            const response = await axios.get(`${ROUTES.ACCOUNT}/${encodeURIComponent(gameName)}/${encodeURIComponent(tagLine)}`, {
                headers: {
                    'X-Riot-Token': process.env.RIOT_TOKEN
                }
            });
            return response.data.puuid;
        } catch {
            throw new Error('Error getting account.');
        }
    }
}

export default dataService;