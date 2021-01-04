import React from 'react';
import { CustomButton } from '../../components';
import { Link } from 'react-router-dom';

interface CardProps {
  tags: string[];
  title: string;
  more: string;
  author_image: string;
  author_title: string;
  author_name: string;
  showcase: string;
}

export default function Item({ tags, title, more, author_image, author_title, author_name, showcase }: CardProps) {
  return (
    <div className="flex flex-row flex-wrap items-center h-full lg:flex-nowrap" style={{ marginTop: '-10vh' }}>
      <div className="w-1/2 h-auto flex flex-col">
        <div id="tags">
          <ul className="flex flex-row gap-2">
            {tags.map((item, idx) => (
              <li key={idx}>{idx === tags.length - 1 ? item : item + ', '}</li>
            ))}
          </ul>
        </div>
        <div id="title" className="mt-3">
          <h4 className="font-light text-5xl">{title}</h4>
        </div>
        <div id="more" className="mt-10">
          <CustomButton>
            <Link to={more}>More Info</Link>
          </CustomButton>
        </div>
        <div id="author-info" className="flex flex-row gap-2 items-center mt-16">
          <div className="w-11 h-11 rounded-full overflow-hidden">
            <img src={author_image} alt="Kevin Nacario" />
          </div>
          <div>
            <span className="font-light leading-3">{author_title}</span>
            <p className="font-medium text-sm leading-3">{author_name}</p>
          </div>
        </div>
      </div>
      <div id="showcase" className="w-full h-auto">
        <div className="h-full w-full overflow-hidden">
          <img id="showcase-image" className="object-cover" src={showcase} alt="Lpado" />
        </div>
      </div>
    </div>
  );
}
