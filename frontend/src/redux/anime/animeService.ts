import { TOP } from '../../config';

const getTopAnime = async (page: number) => {
  const data = await fetch(`${TOP}?page=${page}`);
  return await data.json();
};

const animeService = { getTopAnime };

export default animeService;
