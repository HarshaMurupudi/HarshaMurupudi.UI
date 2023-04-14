import React from 'react';

import ImageCard from '../ImageCard';
import Empty from '../../../features/empty';

const ImageCollection = ({
  contentCategory,
  onDrawerContentClick,
  collection,
}) => {
  return collection.length > 0 ? (
    <div class='grid grid-cols-2 md:grid-cols-3 gap-4'>
      {(collection || []).map(({ id, title, src, tags, createdDate }) => {
        return (
          <div>
            <ImageCard
              imgSrc={src}
              contentCategory={contentCategory}
              onDrawerContentClick={onDrawerContentClick}
              tags={tags}
              title={title}
              createdDate={createdDate}
              id={id}
            />
          </div>
        );
      })}
    </div>
  ) : (
    <Empty />
  );
};

export default ImageCollection;
