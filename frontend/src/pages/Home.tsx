import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

// Hooks
import useHomeFetch from '../hooks/useHomefetch';

// Components
import Banner from '../components/Banner';
import Spinner from '../components/Spinner';
import Slider from '../components/Slider';

function Home() {
  const {
    topAnimeState,
    seasonsNowState,
    seasonsUpcomingState,
    singleSliderOptions,
    manySliderOptions,
  } = useHomeFetch();
  return (
    <div>
      {/* Banner */}
      {topAnimeState.topAnime.data[0] ? (
        <Splide options={singleSliderOptions}>
          {topAnimeState.topAnime.data.slice(0, 5).map((anime) => (
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
        animeData={topAnimeState.topAnime.data}
        header="Top Anime"
        options={manySliderOptions}
        showScore
        viewAllHref="/category/topAnime"
      />

      {/* Seasons Now */}
      <Slider
        animeData={seasonsNowState.seasonsNow.data}
        header="Seasons Now"
        options={manySliderOptions}
        showScore
        viewAllHref="/category/seasonsNow"
      />

      {/* Seasons Upcoming */}
      <Slider
        animeData={seasonsUpcomingState.seasonsUpcoming.data}
        header="Seasons Upcoming"
        options={manySliderOptions}
        viewAllHref="/category/seasonsUpcoming"
      />
    </div>
  );
}

export default Home;
