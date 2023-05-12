import React from 'react';
import { MdStar, MdCalendarMonth } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { animeData } from '../types/anime';

import { truncateText, stars } from '../utils';

import Button from './Button';

type BannerProps = {
  anime: animeData;
};

function Banner({ anime }: BannerProps) {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${anime.images.jpg.image_url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="pt-20 pb-5"
    >
      <div className="flex items-end max-w-7xl mx-auto bg-[black]/50 rounded-xl">
        <img
          src={anime.images.jpg.image_url}
          alt={`${anime.title} image`}
          className="rounded-xl"
        />
        <div className="p-2">
          <h2 className="text-white text-3xl font-bold">{anime.title}</h2>
          <div className="pt-2 max-w-2xl flex justify-between font-semibold text-white text-xl">
            <p className="flex items-center">
              Score:{' '}
              {stars(anime.score).map((star, index) => (
                <span key={index} className={`${star} text-2xl`}>
                  {<MdStar />}
                </span>
              ))}
            </p>
            <p className="flex items-center">
              <MdCalendarMonth className="text-secondary1 mr-1" />
              Date: <span className="text-secondary1">{anime.year}</span>
            </p>
            <p>
              {anime.genres.length > 1 ? 'Genres' : 'Genre'}:{' '}
              {anime.genres.map((genre, index) => (
                <span key={genre.mal_id} className="text-secondary2">
                  {index < anime.genres.length - 1
                    ? `${genre.name}, `
                    : genre.name}
                </span>
              ))}
            </p>
          </div>

          <p className="text-white text-lg py-2 max-w-3xl">
            {truncateText(anime.synopsis, 500)}
          </p>
          <Button>
            <Link to="/">More information</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
