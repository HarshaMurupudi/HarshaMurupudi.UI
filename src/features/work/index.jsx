import React from 'react';

import HorizontalCardCollection from '../../components/elements/HorizontalCardCollection';

import { workData } from '../../data/work';

const Work = ({ onDrawerContentClick }) => {
  return (
    <div>
      <HorizontalCardCollection
        onDrawerContentClick={onDrawerContentClick}
        contentCategory={'Article'}
        collection={workData}
      />
    </div>
  );
};

export default Work;
