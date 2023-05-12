import React from 'react';
import { MdStar } from 'react-icons/md';
import { stars } from '../utils';

type StarProps = {
  score: number;
  showScoreText?: boolean;
};

function Score({ score, showScoreText = false }: StarProps) {
  return (
    <p className="flex items-center">
      {showScoreText && 'Score: '}
      {stars(score).map((star, index) => (
        <span key={index} className={`${star} text-2xl`}>
          {<MdStar />}
        </span>
      ))}
    </p>
  );
}

export default Score;
