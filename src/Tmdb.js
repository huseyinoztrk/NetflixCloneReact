import { render } from "react-dom";

const API_KEY = 'e93ced86b96cfcb0a34ff03a13fe31f3';
const API_BASE = 'https://api.themoviedb.org/3';


const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: "originals",
                title: "Netflix Orjinal",
                items: await basicFetch(`/discover/tv?with_network=213&language=tr-TR&api_key=${API_KEY}`)
            },
            {
                slug: "trending",
                title: "Senin İçin",
                items: await basicFetch(`/trending/all/week?language=tr-TR&api_key=${API_KEY}`)
            },
            {
                slug: "toprated",
                title: "Trend",
                items: await basicFetch(`/movie/top_rated?language=tr-TR&api_key=${API_KEY}`)
            },
            {
                slug: "action",
                title: "Aksiyon",
                items: await basicFetch(`/discover/movie?with_genres=28&language=tr-TR&api_key=${API_KEY}`)
            },
            {
                slug: "comedy",
                title: "Komedi",
                items: await basicFetch(`/discover/movie?with_genres=35&language=tr-TR&api_key=${API_KEY}`)
            },
            {
                slug: "horror",
                title: "Korku",
                items: await basicFetch(`/discover/movie?with_genres=27&language=tr-TR&api_key=${API_KEY}`)
            },
            {
                slug: "romantic",
                title: "Romantik",
                items: await basicFetch(`/discover/movie?with_genres=10749&language=tr-TR&api_key=${API_KEY}`)
            },
            {
                slug: "documentary",
                title: "Belgesel",
                items: await basicFetch(`/discover/movie?with_genres=99&language=tr-TR&api_key=${API_KEY}`)
            },
        ];
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};

        if (movieId) {
            switch (type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=tr-TR&api_key=${API_KEY}`);
                    break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=tr-TR&api_key=${API_KEY}`);
                    break;
                default:
                    info = null;
                    break;
            }
        }

        return info;
    }
}
