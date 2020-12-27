import React from 'react';

type TParams = { id: string };

export default function SinglePortfolio({ match }: any) {
  console.log(match.params.id);
  return (
    <div>
      <div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolore?</h1>
      </div>
    </div>
  );
}
