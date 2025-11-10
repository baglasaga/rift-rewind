import axios from 'axios';
import {ROUTES} from "@/constants/api-routes";

const dataService = {
    getUser: async (gameName: string, tagLine: string) => {
        try {
            const response = await axios.get(ROUTES.ENTRY_POINT, {
                params: {gameName, tagLine}
            });
            return response.data;
        } catch (error) {
            throw error;
        }
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

    }
}

export default dataService;