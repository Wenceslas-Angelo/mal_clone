import React, { useState } from 'react';
import AnimePictures from './AnimePictures';
import { AnimeInfoProps } from '../types/anime';
import AnimeCharacters from './AnimeCharacters';

function AnimeMoreInfo({ id }: AnimeInfoProps) {
  const [tabActive, setTabActive] = useState('pictures');

  const tabClassName = (tabName: string) =>
    tabActive === tabName
      ? 'border-b-2 border-secondary1 cursor-pointer'
      : 'cursor-pointer';

  let animeInformationShow;

  switch (tabActive) {
    case 'pictures':
      animeInformationShow = <AnimePictures id={id} />;
      break;
    case 'characters':
      animeInformationShow = <AnimeCharacters id={id} />;
      break;
  }
  return (
    <div>
      <div className="text-3xl capitalize p-5 max-w-7xl m-auto">
        <ul className="flex justify-between items-center ">
          <li className={tabActive === 'reviews' ? 'border-b-2' : ''}>
            Reviews
          </li>
          <li
            className={tabClassName('news')}
            onClick={() => setTabActive('news')}
          >
            News
          </li>
          <li
            className={tabClassName('recommendations')}
            onClick={() => setTabActive('recommendations')}
          >
            Recommendations
          </li>
          <li
            className={tabClassName('stats')}
            onClick={() => setTabActive('stats')}
          >
            Stats
          </li>
          <li
            className={tabClassName('pictures')}
            onClick={() => setTabActive('pictures')}
          >
            Pictures
          </li>
          <li
            className={tabClassName('characters')}
            onClick={() => setTabActive('characters')}
          >
            Characters
          </li>
        </ul>

        {animeInformationShow}
      </div>
    </div>
  );
}

export default AnimeMoreInfo;
