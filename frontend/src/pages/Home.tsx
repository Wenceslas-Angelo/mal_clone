import React, { useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import { getTopAnime } from '../redux/anime/topAnimeSlice';
import { getSeasonsUpcoming } from '../redux/anime/seasonsUpcomingSlice';

import useDispatchSelectorType from '../hooks/useDispatchSelectorType';

import Banner from '../components/Banner';
import Spinner from '../components/Spinner';
import Grid from '../components/Grid';
import Thumbnail from '../components/Thumbnail';

function Home() {
  const { useAppDispatch, useAppSelector } = useDispatchSelectorType();
  const dispatch = useAppDispatch();
  const { topAnime } = useAppSelector((state) => state.topAnime);
  const { seasonsUpcoming } = useAppSelector((state) => state.seasonsUpcoming);

  useEffect(() => {
    dispatch(getTopAnime(1));
    dispatch(getSeasonsUpcoming(1));
  }, [dispatch]);

  const sliderOptions = {
    perMove: 1,
    type: 'loop',
    perPage: 5,
    width: `${100}%`,
    gap: '1rem',
    autoplay: true,
    interval: 2000,
    pauseOnHover: true,
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

  const indexBannerRandom = Math.floor(Math.random() * 24);

  return (
    <div>
      {/* Banner */}
      {topAnime.data[indexBannerRandom] ? (
        <Banner anime={topAnime.data[indexBannerRandom]} />
      ) : (
        <Spinner />
      )}

      {/* Top Anime */}
      <Grid header="Top Anime">
        <Splide options={sliderOptions}>
          {topAnime.data.map((anime) => (
            <SplideSlide key={anime.mal_id}>
              <Thumbnail
                image={anime.images.jpg.large_image_url}
                title={anime.title}
                score={anime.score}
                showScore
              />
            </SplideSlide>
          ))}
        </Splide>
      </Grid>

      {/* Season Upcoming */}
      <Grid header="Season Upcoming">
        <Splide options={sliderOptions}>
          {seasonsUpcoming.data.map((anime) => (
            <SplideSlide key={anime.mal_id}>
              <Thumbnail
                image={anime.images.jpg.large_image_url}
                title={anime.title}
                score={anime.score}
              />
            </SplideSlide>
          ))}
        </Splide>
      </Grid>
    </div>
  );
}

export default Home;
