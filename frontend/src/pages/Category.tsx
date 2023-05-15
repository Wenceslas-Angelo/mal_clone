import React from 'react';
import { useParams } from 'react-router-dom';
import useHomeFetch from '../hooks/useHomefetch';

import Banner from '../components/Banner';
import Grid from '../components/Grid';
import Spinner from '../components/Spinner';
import Thumbnail from '../components/Thumbnail';

function Category() {
  const { id } = useParams();
  const { topAnimeState, seasonsNowState, seasonsUpcomingState } =
    useHomeFetch();
  let animes;
  let header = 'Top Anime';
  switch (id) {
    case 'topAnime':
      animes = topAnimeState.topAnime.data;
      header = 'Top Anime';
      break;
    case 'seasonsUpcoming':
      animes = seasonsUpcomingState.seasonsUpcoming.data;
      header = 'Seasons Upcoming';
      break;
    case 'seasonsNow':
      animes = seasonsNowState.seasonsNow.data;
      header = 'Seasons Now';
      break;
  }
  return (
    <div>
      {animes && animes[0] ? <Banner anime={animes[0]} /> : <Spinner />}

      <Grid header={header}>
        {animes?.map((anime) => (
          <Thumbnail
            key={anime.mal_id}
            title={anime.title}
            malId={anime.mal_id}
            image={anime.images.jpg.image_url}
            score={anime.score}
            showScore
          />
        ))}
      </Grid>
    </div>
  );
}

export default Category;
