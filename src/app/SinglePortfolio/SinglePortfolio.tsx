import React from 'react';
import { CustomButton } from '../../components';

interface SinglePortfolioProps {
  match: { params: { id: string } };
}

export default function SinglePortfolio({ match }: SinglePortfolioProps) {
  console.log(match.params.id);
  return (
    <div className="flex flex-col">
      <div className="flex flex-row flex-wrap items-center px:10 gap-10 lg:px-56 lg:flex-nowrap min-h-screen bg-gray-100">
        <div className="w-1/2">
          <h1 className="text-5xl font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolore?</h1>
          <div className="mt-10">
            <CustomButton>Visit site</CustomButton>
          </div>
        </div>
        <div>Image here</div>
      </div>
      <div className="flex flex-row gap-12 bg-gray-200 py-24 h-1/2  px:10 w-full lg:px-56">
        <div>
          <h2>Tags</h2>
          <ul className="flex flex-row flex-nowrap gap-2">
            <li>UI,</li>
            <li>UX,</li>
            <li>Mobile,</li>
            <li>Desktop</li>
          </ul>
        </div>
        <div>
          <h2>Date Finished</h2>
          <div>
            <p>Sept. 1, 2020 - Oct. 1, 2020</p>
          </div>
        </div>
        <div>
          <h2>Overview</h2>
          <div>
            <p>Project built for Technology Testing Purposes</p>
          </div>
        </div>
      </div>
      <div className="px-10 py-24 lg:px-56">
        <div> mockup</div>
        <div className="mt-10">
          <h2>Concept</h2>
          <p className="mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempora veniam illo vitae, quod aspernatur. Mollitia veritatis quia, fugiat
            debitis alias voluptate magni quasi consequatur explicabo distinctio natus voluptatem expedita error velit soluta maiores sed officia quos
            quae labore culpa delectus. Tempora ipsum atque veniam at rem nobis ut esse.
          </p>
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-10 lg:gap-20 lg:flex-nowrap">
        <div className="w-1/2">
          <video width="100%" height="100%" controls>
            <source src="https://www.youtube.com/watch?v=jnLSYfObARA&list=PLGmxyVGSCDKvmLInHxJ9VdiwEb82Lxd2E" />
          </video>
        </div>
        <div className="w-1/2 pr-40">
          <h2>Code explanation</h2>
          <p className="mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempora veniam illo vitae, quod aspernatur. Mollitia veritatis quia, fugiat
            debitis alias voluptate magni quasi consequatur explicabo distinctio natus voluptatem expedita error velit soluta maiores sed officia quos
            quae labore culpa delectus. Tempora ipsum atque veniam at rem nobis ut esse.
          </p>
          <div className="mt-10">
            <CustomButton>Source Code</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}
