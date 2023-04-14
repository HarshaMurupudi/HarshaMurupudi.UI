import React from 'react';

import ImageCollection from '../../components/elements/ImageCollection';

import { comicsData } from '../../data/comics';

const Comics = ({ onDrawerContentClick }) => {
  return (
    <div>
      <ImageCollection
        onDrawerContentClick={onDrawerContentClick}
        contentCategory={'Comics'}
        collection={comicsData}
      />
    </div>
  );
};

export default Comics;
