import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Drawer } from 'flowbite';

import SideDrawer from '../../../components/elements/drawer';
import About from '../../../features/about';
import Collection from '../../../features/collection';
import Comics from '../../../features/comics';
import Projects from '../../../features/projects';
import Work from '../../../features/work';
import ImageDetails from '../../../features/ImageDetails';
import Article from '../../../features/article';
import Chat from '../../../features/chat';

import {
  setDrawerContentType,
  setDrawerContentCategory,
  setDrawerContentId,
} from '../../elements/drawer/store/actions';

const AppLayout = ({
  drawerContentCategory,
  drawerContentType,
  children,
  setDrawerContentType,
  setDrawerContentCategory,
  setDrawerContentId,
}) => {
  const indexRef = useRef(null);
  const collectionComponentLookup = {
    Bio: About,
    Collection,
    Comics,
    Projects,
    Work,
    ImageDetails,
    Chat,
  };

  const detailsComponentKey = `${drawerContentCategory} ${drawerContentType}`;
  const detailsComponentLookup = {
    'Comics Details': ImageDetails,
    'Collection Details': ImageDetails,
    'Projects Details': Article,
    'Work Details': Article,
  };

  const DrawerContentComponent =
    drawerContentType === 'Collection'
      ? collectionComponentLookup[drawerContentCategory]
      : detailsComponentLookup[detailsComponentKey];

  const onDrawerContentClick = (category, id) => {
    setDrawerContentCategory(category);
    setDrawerContentType('Details');
    setDrawerContentId(id);
  };

  let drawer = {};

  const options = {
    placement: 'right',
    backdrop: false,
    bodyScrolling: false,
    edge: false,
    edgeOffset: '',
    // backdropClasses:
    //   'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30',
    onHide: () => {
      setDrawerContentCategory('Comics');
      setDrawerContentType('Collection');
      // this.backdrop = false;
    },
    onShow: () => {},
    onToggle: () => {},
  };

  useEffect(() => {
    drawer = new Drawer(indexRef.current, options);
  }, []);

  const onDrawerToggle = (title) => {
    if (drawer.toggle) {
      drawer.show();
    } else {
      drawer = new Drawer(indexRef.current, options);

      drawer.toggle();
    }

    setDrawerContentCategory(title);
    setDrawerContentType('Collection');
  };

  const handleDrawerClose = () => {
    if (drawer.toggle) {
      drawer.hide();
    } else {
      drawer = new Drawer(indexRef.current, options);
      drawer.hide();
    }
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { onDrawerToggle });
    }
    return child;
  });

  return (
    <div>
      <SideDrawer handleDrawerClose={handleDrawerClose} indexRef={indexRef}>
        <DrawerContentComponent onDrawerContentClick={onDrawerContentClick} />
      </SideDrawer>
      {childrenWithProps}
    </div>
  );
};

const mapStateToProps = (state) => ({
  drawerContentCategory: state.getIn(['app', 'drawerContentCategory']),
  drawerContentType: state.getIn(['app', 'drawerContentType']),
});

export default connect(mapStateToProps, {
  setDrawerContentType,
  setDrawerContentCategory,
  setDrawerContentId,
})(AppLayout);
