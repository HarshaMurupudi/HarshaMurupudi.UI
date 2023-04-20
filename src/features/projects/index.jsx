import React from 'react';

import HorizontalCardCollection from '../../components/elements/HorizontalCardCollection';

import { projectsData } from '../../data/projects';

const Projects = ({ onDrawerContentClick }) => {
  return (
    <div>
      <HorizontalCardCollection
        onDrawerContentClick={onDrawerContentClick}
        contentCategory={'Projects'}
        collection={projectsData}
      />
    </div>
  );
};

export default Projects;
