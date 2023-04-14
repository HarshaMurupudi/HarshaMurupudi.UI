import React, { useEffect } from 'react';
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
    'Article Details': Article,
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
    backdrop: true,
    bodyScrolling: false,
    edge: false,
    edgeOffset: '',
    backdropClasses:
      'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30',
    onHide: () => {
      console.log('drawer is hidden');
      setDrawerContentCategory('Comics');
      setDrawerContentType('Collection');
    },
    onShow: () => {
      console.log('drawer is shown');
    },
    onToggle: () => {
      console.log('drawer has been toggledd');
    },
  };

  useEffect(() => {
    // $targetEl = document.getElementById('drawer-js-example');

    // const drawer = {};

    // set the drawer menu element
    const $targetEl = document.getElementById('drawer-js-example') || null;
    drawer = new Drawer($targetEl, options);

    // drawer.hide();
  }, []);

  const onDrawerToggle = (title) => {
    console.log('toggle hit!');

    if (drawer.toggle) {
      console.log('toggle exists');
      console.log(drawer.toggle);
      // drawer.toggle();
      drawer.show();
    } else {
      const $targetEl = document.getElementById('drawer-js-example') || null;
      drawer = new Drawer($targetEl, options);

      drawer.toggle();
    }

    setDrawerContentCategory(title);
    setDrawerContentType('Collection');
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    // Checking isValidElement is the safe way and avoids a
    // typescript error too.

    console.log(children, child);
    if (React.isValidElement(child)) {
      console.log('valid');

      console.log(React.cloneElement(child, { onDrawerToggle }));
      return React.cloneElement(child, { onDrawerToggle });
    }
    return child;
  });

  console.log(childrenWithProps);

  return (
    <div>
      <SideDrawer>
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
