import React from 'react';

import { format } from 'date-fns';

const ImageCard = ({
  imgSrc,
  contentCategory,
  onDrawerContentClick,
  tags,
  title,
  createdDate,
  id,
}) => {
  console.log(onDrawerContentClick);
  return (
    <div onClick={() => onDrawerContentClick(contentCategory, id)}>
      <div
        className='relative h-80 w-full max-w-full rounded-lg flex items-end justify-start text-left bg-cover bg-center'
        style={{
          backgroundImage: `url(${imgSrc})`,
        }}
      >
        <div class='absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900 rounded-lg'></div>
        <div class='absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center'>
          <div className='flex flex-col'>
            {tags.map((tag) => {
              return (
                <p className='text-xs text-gray px-5 py-2 uppercase hover:text-indigo-600 transition ease-in-out duration-500'>
                  #{tag}
                </p>
              );
            })}
          </div>
          <div class='text-gray font-regular flex flex-col justify-start'>
            <span class='-mt-3'>{format(createdDate, 'yyyy-MM-dd')}</span>
          </div>
        </div>
        <main class='p-5 z-10'>
          <p className='text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline'>
            {title}
          </p>
        </main>
      </div>
    </div>
  );
};

export default ImageCard;
