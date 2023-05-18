import React, { useEffect } from 'react';
import { AnimeInfoProps } from '../types/anime';

import useDispatchSelectorType from '../hooks/useDispatchSelectorType';
import { getAnimePictures } from '../redux/anime/animePictures';

function AnimePictures({ id }: AnimeInfoProps) {
  const { useAppDispatch, useAppSelector } = useDispatchSelectorType();
  const dispatch = useAppDispatch();
  const { animePictures } = useAppSelector((state) => state.animePictures);

  useEffect(() => {
    if (id) {
      const animeId = parseInt(id, 10);
      dispatch(getAnimePictures(animeId));
    }
  }, [dispatch]);
  return (
    <div className="grid gap-2 grid-cols-[repeat(auto-fill,minmax(200px,_1fr))] py-5">
      {animePictures?.map((animePicture, index) => (
        <img
          key={`${id}-${index}`}
          src={animePicture.jpg.image_url}
          alt={`${id} image`}
          className="h-80 rounded-lg object-cover"
        />
      ))}
    </div>
  );
}

export default AnimePictures;
