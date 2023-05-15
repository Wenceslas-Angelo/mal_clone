import { useEffect } from 'react';
import { getTopAnime } from '../redux/anime/topAnimeSlice';
import { getSeasonsUpcoming } from '../redux/anime/seasonsUpcomingSlice';
import { getSeasonsNow } from '../redux/anime/seasonsNowSlice';

import useDispatchSelectorType from './useDispatchSelectorType';

function useHomeFetch() {
  const { useAppDispatch, useAppSelector } = useDispatchSelectorType();
  const dispatch = useAppDispatch();
  const topAnimeState = useAppSelector((state) => state.topAnime);
  const seasonsUpcomingState = useAppSelector((state) => state.seasonsUpcoming);
  const seasonsNowState = useAppSelector((state) => state.seasonsNow);

  useEffect(() => {
    dispatch(getTopAnime(1));
    dispatch(getSeasonsNow(1));
    dispatch(getSeasonsUpcoming(1));
  }, [dispatch]);

  const singleSliderOptions = {
    perMove: 1,
    type: 'loop',
    autoplay: true,
    interval: 5000,
    pauseOnHover: true,
    width: `${100}%`,
  };

  const manySliderOptions = {
    ...singleSliderOptions,
    perPage: 5,
    gap: '1rem',
    breakpoints: {
      1154: {
        perPage: 4,
      },
      991: {
        perPage: 3,
      },
      768: {
        perPage: 2,
      },
      375: {
        perPage: 1,
      },
    },
  };
  return {
    dispatch,
    topAnimeState,
    seasonsUpcomingState,
    seasonsNowState,
    manySliderOptions,
    singleSliderOptions,
  };
}

export default useHomeFetch;
