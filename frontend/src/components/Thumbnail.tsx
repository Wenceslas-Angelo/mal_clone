import React from 'react';
import { Link } from 'react-router-dom';
import Score from './Score';

type ThumbnailProps = {
  image: string;
  score: number;
  title: string;
  showScore?: boolean;
  malId: number;
};

function Thumbnail({
  image,
  score,
  title,
  showScore = false,
  malId,
}: ThumbnailProps) {
  return (
    <div className="w-60 text-center m-2 transition-all hover:opacity-80 hover:translate-y-4">
      <Link to={`anime/${malId}`} className="block">
        <img
          src={image}
          alt={`${title} image`}
          className="w-full h-80 rounded-lg object-cover"
        />
        <div>
          {showScore && (
            <div className="flex justify-center">
              <Score score={score} />
            </div>
          )}

          <h2 className="font-semibold text-lg">{title}</h2>
        </div>
      </Link>
    </div>
  );
}

export default Thumbnail;
