import axios from "axios";

axios.defaults.baseURL = `https://api.unsplash.com`;

export default async function searchPhotos(topic, page = 1) {
    const headers = {
        'Authorization': 'Client-ID Iirp2Fnon89SweIsIdH8pVPCj9AwYLIHrN5_2ghldt0'
    };

    const params = {
        query: topic,
        page,
        per_page: 20,
    };

    try {
        const response = await axios.get('/search/photos', { headers, params });
        console.log(response.data.results)
        return response.data.results;
    } catch (error) {
        console.error("Error searching photos:", error);
        return [];
    }
}
