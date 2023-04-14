import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { collectionData } from '../../data/collection';

function ImageDetails({ drawerContentId }) {
  const [imageDetails, setImageDetails] = useState('');

  useEffect(() => {
    const selectedImage = collectionData.find(
      (item) => item.id === drawerContentId
    );

    setImageDetails(selectedImage);
  }, [drawerContentId]);
  return (
    <figure class='max-w-xl mx-auto'>
      <img
        className='h-auto max-w-full rounded-lg'
        src={imageDetails.src}
        alt='description'
      />
      <figcaption class='mt-2 text-sm text-center text-gray-500 dark:text-gray-400'>
        Social - {imageDetails.social}
      </figcaption>
    </figure>
  );
}

const mapStateToProps = (state) => ({
  drawerContentId: state.getIn(['app', 'drawerContentId']),
});

export default connect(mapStateToProps, null)(ImageDetails);
