import React from 'react';

import { Button } from 'flowbite-react';
import { format } from 'date-fns';

const HorizontalCard = ({
  contentCategory,
  onDrawerContentClick,
  id,
  title,
  tags,
  createdDate,
  description,
  slug,
  actions,
}) => {
  return (
    <div className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
      <div class='flex flex-col justify-between p-4 leading-normal'>
        <p class='mb-1 font-light text-gray-700 dark:text-gray-400'>
          {tags.map((tag) => {
            return <span className='mr-1'>#{tag}</span>;
          })}
        </p>
        <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {title}
        </h5>
        <p class='mb-1 font-normal text-gray-700 dark:text-gray-400'>
          {description}
        </p>

        <p class='mb-3 font-light text-gray-700 dark:text-gray-400'>
          {format(createdDate, 'yyyy-MM-dd')}
        </p>

        <div className='flex flex-wrap gap-2'>
          {Object.keys(actions).map((action) => {
            return (
              <div onClick={() => onDrawerContentClick(contentCategory, slug)}>
                <Button color='gray'>{action}</Button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
