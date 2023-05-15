import { TOP, SEASONS_UPCOMING, SEASONS_NOW, ANIME_INFO } from '../config';

const API = {
  getTopAnime: async (page: number) => {
    const data = await fetch(`${TOP}?page=${page}`);
    return await data.json();
  },
  getSeasonsUpcoming: async (page: number) => {
    const data = await fetch(`${SEASONS_UPCOMING}?page=${page}`);
    return await data.json();
  },
  getSeasonsNow: async (page: number) => {
    const data = await fetch(`${SEASONS_NOW}?page=${page}`);
    return await data.json();
  },
  getAnimeInfo: async (id: number) => {
    const data = await fetch(`${ANIME_INFO}/${id}/full`);
    const dataJson = await data.json();
    return dataJson.data;
  },
};

export default API;
