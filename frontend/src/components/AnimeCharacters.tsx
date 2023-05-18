import React, { useEffect } from 'react';
import { AnimeInfoProps } from '../types/anime';

import useDispatchSelectorType from '../hooks/useDispatchSelectorType';
import { getAnimeCharacters } from '../redux/anime/animeCharacters';

function AnimePictures({ id }: AnimeInfoProps) {
  const { useAppDispatch, useAppSelector } = useDispatchSelectorType();
  const dispatch = useAppDispatch();
  const { animeCharacters } = useAppSelector((state) => state.animeCharacters);

  useEffect(() => {
    if (id) {
      const animeId = parseInt(id, 10);
      dispatch(getAnimeCharacters(animeId));
    }
  }, [dispatch]);
  return (
    <div className="grid gap-2 grid-cols-[repeat(auto-fill,minmax(200px,_1fr))] py-5">
      {animeCharacters?.map((animeCharacter) => (
        <div key={`${animeCharacter.character.mal_id}`}>
          <img
            src={animeCharacter.character.images.jpg.image_url}
            alt={`${id} image`}
            className="rounded-t-lg object-cover"
          />
          <h3 className="text-center text-lg py-2 text-white bg-black rounded-b-lg">
            {animeCharacter.character.name}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default AnimePictures;
