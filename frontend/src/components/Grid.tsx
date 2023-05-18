import React from 'react';
import { Link } from 'react-router-dom';

type GridProps = {
  header: string;
  children: React.ReactNode;
  viewAllHref?: string;
};

function Grid({ header, children, viewAllHref = '' }: GridProps) {
  return (
    <div className="max-w-7xl mx-auto my-3 p-2 xl:p-0">
      <div className="flex justify-between items-center flex-wrap">
        <h2 className="text-2xl font-bold mb-2">{header}</h2>
        {viewAllHref && (
          <Link
            to={viewAllHref}
            className="text-secondary2 text-xl font-semibold"
          >
            View All
          </Link>
        )}
      </div>
      <div
        className={
          viewAllHref
            ? 'flex justify-between flex-wrap gap-y-2'
            : 'grid gap-2 grid-cols-[repeat(auto-fill,minmax(200px,_1fr))]'
        }
      >
        {children}
      </div>
    </div>
  );
}

export default Grid;
