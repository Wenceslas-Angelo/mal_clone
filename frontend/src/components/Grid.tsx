import React from 'react';

type GridProps = {
  header: string;
  children: React.ReactNode;
};

function Grid({ header, children }: GridProps) {
  return (
    <div className="max-w-7xl mx-auto my-5">
      <h2 className="text-2xl font-bold mb-2">{header}</h2>
      <div className="flex justify-center items-center">{children}</div>
    </div>
  );
}

export default Grid;
