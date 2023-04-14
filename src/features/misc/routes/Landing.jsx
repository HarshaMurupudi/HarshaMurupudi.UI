import React from 'react';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { connect } from 'react-redux';

import { World } from '../../../components/models';

const LandingComponent = (props) => {
  console.log(props);
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas
        shadows
        camera={{
          position: [-170, 70, 180],
          fov: 6,
          near: 0.1,
          far: 1000,
        }}
      >
        <Environment preset='forest' />
        {/* <ambientLight intensity={0.5} /> */}
        <World onDrawerToggle={props.onDrawerToggle} />
        {/* <World /> */}
        <ContactShadows position={[0, -0.8, 0]} color='#ffffff' />
        <OrbitControls
          target={[0, 8, 0]}
          // minAzimuthAngle={-Math.PI / 4 + 0.1}
          // maxAzimuthAngle={Math.PI / 6 - 0.7}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2 - 0.27}
          maxDistance={300}
          minDistance={100}
        />
      </Canvas>
    </div>
  );
};

const Landing = connect(null, null)(LandingComponent);

export { Landing };
