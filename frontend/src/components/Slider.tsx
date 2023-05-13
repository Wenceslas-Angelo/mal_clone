import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { animeData } from '../types/anime';

import Grid from './Grid';
import Spinner from './Spinner';
import Thumbnail from './Thumbnail';

type SliderProps = {
  animeData: animeData[];
  header: string;
  options: object;
  showScore?: boolean;
};

function Slider({
  animeData,
  header,
  options,
  showScore = false,
}: SliderProps) {
  return (
    <Grid header={header}>
      {animeData[0] ? (
        <Splide options={options}>
          {animeData.map((anime) => (
            <SplideSlide key={anime.mal_id}>
              <Thumbnail
                image={anime.images.jpg.large_image_url}
                title={anime.title}
                score={anime.score}
                showScore={showScore}
              />
            </SplideSlide>
          ))}
        </Splide>
      ) : (
        <Spinner />
      )}
    </Grid>
  );
}

export default Slider;
