import React from 'react';
import Score from './Score';

type ThumbnailProps = {
  image: string;
  score: number;
  title: string;
  showScore?: boolean;
};

function Thumbnail({ image, score, title, showScore = false }: ThumbnailProps) {
  return (
    <div className="w-60 text-center m-2">
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
    </div>
  );
}

export default Thumbnail;
