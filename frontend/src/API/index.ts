import { TOP, SEASONS_UPCOMING, SEASONS_NOW } from '../config';

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
};

export default API;
