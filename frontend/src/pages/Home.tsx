import React, { useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import { getTopAnime } from '../redux/anime/topAnimeSlice';
import { getSeasonsUpcoming } from '../redux/anime/seasonsUpcomingSlice';
import { getSeasonsNow } from '../redux/anime/seasonsNowSlice';

import useDispatchSelectorType from '../hooks/useDispatchSelectorType';

import Banner from '../components/Banner';
import Spinner from '../components/Spinner';
import Slider from '../components/Slider';

function Home() {
  const { useAppDispatch, useAppSelector } = useDispatchSelectorType();
  const dispatch = useAppDispatch();
  const { topAnime } = useAppSelector((state) => state.topAnime);
  const { seasonsUpcoming } = useAppSelector((state) => state.seasonsUpcoming);
  const { seasonsNow } = useAppSelector((state) => state.seasonsNowReducer);

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
    interval: 2000,
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

  return (
    <div>
      {/* Banner */}
      {topAnime.data[0] ? (
        <Splide options={singleSliderOptions}>
          {topAnime.data.slice(0, 5).map((anime) => (
            <SplideSlide key={anime.mal_id}>
              <Banner anime={anime} />
            </SplideSlide>
          ))}
        </Splide>
      ) : (
        <Spinner />
      )}

      {/* Top Anime */}
      <Slider
        animeData={topAnime.data}
        header="Top Anime"
        options={manySliderOptions}
        showScore
      />

      {/* Seasons Now */}
      <Slider
        animeData={seasonsNow.data}
        header="Seasons Now"
        options={manySliderOptions}
        showScore
      />

      {/* Seasons Upcoming */}
      <Slider
        animeData={seasonsUpcoming.data}
        header="Seasons Upcoming"
        options={manySliderOptions}
      />
    </div>
  );
}

export default Home;
