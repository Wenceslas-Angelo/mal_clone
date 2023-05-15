import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import Spinner from '../components/Spinner';
import Score from '../components/Score';
import useDispatchSelectorType from '../hooks/useDispatchSelectorType';
import { getAnimeInfo } from '../redux/anime/animeInfo';

function Anime() {
  const { useAppDispatch, useAppSelector } = useDispatchSelectorType();
  const dispatch = useAppDispatch();
  const { anime } = useAppSelector((state) => state.animeInfo);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const animeId = parseInt(id, 10);
      dispatch(getAnimeInfo(animeId));
    }
  }, [dispatch]);

  return anime ? (
    <div>
      {/* BANNER */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, 0.5)), url(${anime.images.jpg.image_url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="h-[40vh]"
      ></div>

      <div className=" flex flex-col bg-secondary2 py-2">
        {/* INFORMATION PRIMARY */}
        <div className="flex items-end mt-[-8rem] px-5 mb-2">
          <img
            src={anime.images.jpg.image_url}
            alt={`${anime.title} image`}
            className="rounded-xl"
          />
          <div className="px-5">
            <div className="flex justify-between items-center py-2 mb-5">
              <h1 className="text-white text-5xl">{anime.title}</h1>
              <Button variant="secondary">Trailler</Button>
            </div>
            <div className="flex justify-between items-center pb-2">
              <h2 className="text-3xl font-semibold text-white">Synopsis</h2>
              <p className="text-white text-2xl font-medium">
                {anime.genres.length > 1 ? 'Genres' : 'Genre'}:{' '}
                {anime.genres.map((genre, index) => (
                  <span key={genre.mal_id} className="text-white/70">
                    {index < anime.genres.length - 1
                      ? `${genre.name}, `
                      : genre.name}
                  </span>
                ))}
              </p>
            </div>
            <p className="text-white/80 text-md">{anime.synopsis}</p>
          </div>
        </div>
        {/* INFORMATION SECONDARY */}
        <div className="px-5 py-2 flex">
          <div className="bg-secondary3/30 w-56 rounded-lg flex flex-col justify-center items-center py-2 text-white">
            <Score score={anime.score} />
            <p className="text-5xl">{anime.score}</p>
            <p className="text-xl">
              Scored by <span className="text-white/70">{anime.scored_by}</span>
            </p>
          </div>
          <div className="text-xl flex flex-col justify-between text-white pl-5 font-medium flex-1">
            <div className="bg-secondary3/30 rounded-lg p-2 flex justify-between">
              <p>
                Type: <span className="text-white/70">{anime.type}</span>
              </p>
              <p>
                Aired:{' '}
                <span className="text-white/70">{anime.aired.string}</span>
              </p>
              <p>
                Source: <span className="text-white/70">{anime.source}</span>
              </p>
              <p>
                Status: <span className="text-white/70">{anime.status}</span>
              </p>
              <p>
                Season: <span className="text-white/70">{anime.season}</span>
              </p>
            </div>
            <div className="bg-secondary3/30 rounded-lg p-2 flex justify-between">
              <p className="text-white text-2xl font-medium">
                {anime.producers.length > 1 ? 'Producers' : 'Producer'}:{' '}
                {anime.producers.map((producer, index) => (
                  <span key={producer.mal_id} className="text-white/70">
                    {index < anime.producers.length - 1
                      ? `${producer.name}, `
                      : producer.name}
                  </span>
                ))}
              </p>
              <p className="text-white text-2xl font-medium">
                {anime.studios.length > 1 ? 'Studios' : 'Studio'}:{' '}
                {anime.studios.map((studio, index) => (
                  <span key={studio.mal_id} className="text-white/70">
                    {index < anime.studios.length - 1
                      ? `${studio.name}, `
                      : studio.name}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-3xl capitalize p-5 max-w-7xl m-auto">
        <ul className="flex justify-between items-center ">
          <li>Reviews</li>
          <li>News</li>
          <li>Recommendations</li>
          <li>Stats</li>
          <li>Pictures</li>
          <li>Character</li>
        </ul>
      </div>
    </div>
  ) : (
    <Spinner />
  );
}

export default Anime;
