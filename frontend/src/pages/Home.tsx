import React, { useEffect } from 'react';

import useDispatchSelectorType from '../hooks/useDispatchSelectorType';

import { resetState } from '../redux/anime/animeSlice';
import { getTopAnime } from '../redux/anime/animeAction';

import Banner from '../components/Banner';

function Home() {
  const { useAppDispatch, useAppSelector } = useDispatchSelectorType();
  const dispatch = useAppDispatch();
  const { topAnime } = useAppSelector((state) => state.anime);

  useEffect(() => {
    dispatch(getTopAnime(1));
    dispatch(resetState());
  }, [dispatch]);

  return <div>{topAnime.data[1] && <Banner anime={topAnime.data[1]} />}</div>;
}

export default Home;
