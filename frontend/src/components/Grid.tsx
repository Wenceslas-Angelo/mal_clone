import React from 'react';
import { Link } from 'react-router-dom';

type GridProps = {
  header: string;
  children: React.ReactNode;
};

function Grid({ header, children }: GridProps) {
  return (
    <div className="max-w-7xl mx-auto my-5">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-2">{header}</h2>
        <Link to="/" className="text-secondary2 text-xl font-semibold">
          View All
        </Link>
      </div>
      <div className="flex justify-center items-center">{children}</div>
    </div>
  );
}

export default Grid;
