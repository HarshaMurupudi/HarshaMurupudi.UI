import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useLoader } from '@react-three/fiber';

import Shark from './Shark';
import Sail from './Sail';
import Gauca from './Gauca';
import Cloud from './Cloud';

export function World(props) {
  const { nodes, materials } = useGLTF('/models/pirate-raft-world.glb');
  const colorMap = useLoader(TextureLoader, '/textures/sand2.png');
  const oceanTexture = useLoader(TextureLoader, '/textures/Ocean.png');
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 3.14]}>
        <mesh
          geometry={nodes.Cylinder.geometry}
          material={materials['Wood Bark']}
        />
        <mesh geometry={nodes.Cylinder_1.geometry} material={materials.Rope} />
        <mesh
          geometry={nodes.Cylinder_2.geometry}
          material={materials['Wood - Light']}
        />
        <mesh
          geometry={nodes.Cylinder_3.geometry}
          material={materials['Wood - Dark']}
        />
      </group>
      <group position={[0.25, 0, 1.01]} rotation={[0, 0, -0.01]}>
        <mesh
          geometry={nodes.Cylinder.geometry}
          material={materials['Wood Bark']}
        />
        <mesh geometry={nodes.Cylinder_1.geometry} material={materials.Rope} />
        <mesh
          geometry={nodes.Cylinder_2.geometry}
          material={materials['Wood - Light']}
        />
        <mesh
          geometry={nodes.Cylinder_3.geometry}
          material={materials['Wood - Dark']}
        />
      </group>
      <group position={[-0.29, 0, -1.03]} rotation={[0, 0, 0.02]}>
        <mesh
          geometry={nodes.Cylinder.geometry}
          material={materials['Wood Bark']}
        />
        <mesh geometry={nodes.Cylinder_1.geometry} material={materials.Rope} />
        <mesh
          geometry={nodes.Cylinder_2.geometry}
          material={materials['Wood - Light']}
        />
        <mesh
          geometry={nodes.Cylinder_3.geometry}
          material={materials['Wood - Dark']}
        />
      </group>
      <group position={[0, 0, -3.07]}>
        <mesh
          geometry={nodes.Cylinder.geometry}
          material={materials['Wood Bark']}
        />
        <mesh geometry={nodes.Cylinder_1.geometry} material={materials.Rope} />
        <mesh
          geometry={nodes.Cylinder_2.geometry}
          material={materials['Wood - Light']}
        />
        <mesh
          geometry={nodes.Cylinder_3.geometry}
          material={materials['Wood - Dark']}
        />
      </group>
      <Gauca initial={0} label={'Chat'} onDrawerToggle={props.onDrawerToggle} />
      <group position={[-4.92, 6.01, -0.02]}>
        <mesh
          geometry={nodes.Cylinder001.geometry}
          material={materials['Wood Bark']}
        />
        <mesh
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.Rope}
        />
        <mesh
          geometry={nodes.Cylinder001_2.geometry}
          material={materials['Wood - Light']}
        />
      </group>
      <mesh
        geometry={nodes.Mast_Ropes.geometry}
        material={materials.Rope}
        position={[-4.92, 6.01, -0.02]}
      />
      <Sail
        geometry={nodes.Sail.geometry}
        material={materials.Sail}
        position={[-5.21, 6.2, -0.02]}
        rotation={[0, 0, Math.PI / 2]}
        scale={[2.48, 2.48, 3.21]}
        initial={0}
        label={'Bio'}
        onDrawerToggle={props.onDrawerToggle}
      />
      <Shark
        geometry={nodes.Shark_Fin.geometry}
        material={materials['Shark Fin']}
        position={[15.88, -0.8, -11.06]}
        rotation={[Math.PI / 2, -0.5, -1.8]}
        scale={[2, 2, 1.83]}
        initial={0}
        label={'Art'}
        onDrawerToggle={props.onDrawerToggle}
      />
      <Shark
        geometry={nodes.Shark_Fin002.geometry}
        material={materials['Shark Fin']}
        position={[-11.39, -0.1, 2.2]}
        rotation={[1.34, 0.08, -2.14]}
        scale={[2, 2, 1.83]}
        initial={0}
        label={'IT'}
        onDrawerToggle={props.onDrawerToggle}
      />
      {/* <Shark
        geometry={nodes.Shark_Fin003.geometry}
        material={materials['Shark Fin']}
        position={[-6.97, -0.25, -7.23]}
        rotation={[1.91, -0.26, 0.03]}
        scale={[2, 2, 1.83]}
        initial={0}
        label={'Work'}
        onDrawerToggle={props.onDrawerToggle}
      />
      <Shark
        geometry={nodes.Shark_Fin004.geometry}
        material={materials['Shark Fin']}
        position={[10, -0.15, 2.82]}
        rotation={[Math.PI / 2, 0, -2.19]}
        scale={[2, 2, 1.83]}
        initial={0}
        label={'Comics'}
        onDrawerToggle={props.onDrawerToggle}
      /> */}
      <mesh
        geometry={nodes.Ocean_2.geometry}
        material={materials.Ocean}
        position={[0, -0.59, 0]}
      >
        <meshStandardMaterial map={oceanTexture} />
      </mesh>
      <mesh
        geometry={nodes.Island.geometry}
        material={materials.Sand}
        position={[0.74, 0, -1.24]}
      >
        <meshBasicMaterial map={colorMap} />
      </mesh>
      <mesh
        geometry={nodes.Tree_Trunk.geometry}
        material={materials['Tree Trunk']}
        position={[29.82, 0.62, -28.81]}
      />
      <mesh
        geometry={nodes.Tree_Trunk001.geometry}
        material={materials['Tree Trunk']}
        position={[37.2, 0.2, -22.27]}
        rotation={[0, 1.22, 0]}
      />
      <mesh
        geometry={nodes.Tree_Trunk002.geometry}
        material={materials['Tree Trunk']}
        position={[37.82, 0.56, -29.77]}
        rotation={[Math.PI, -1.22, Math.PI]}
      />
      <mesh
        geometry={nodes.Tree_Canopy.geometry}
        material={materials['Tree Canopy']}
        position={[30.82, 10.04, -28.81]}
      />
      <mesh
        geometry={nodes.Tree_Canopy001.geometry}
        material={materials['Tree Canopy']}
        position={[37.54, 9.62, -23.21]}
        rotation={[0, 1.22, 0]}
      />
      <mesh
        geometry={nodes.Tree_Canopy002.geometry}
        material={materials['Tree Canopy']}
        position={[37.48, 9.98, -28.84]}
        rotation={[Math.PI, -1.22, Math.PI]}
      />
      <mesh
        geometry={nodes.Rock.geometry}
        material={materials.Rock}
        position={[27.97, -0.17, -25.93]}
        rotation={[-1.09, 0.5, 0.05]}
      />
      <mesh
        geometry={nodes.Rock001.geometry}
        material={materials.Rock}
        position={[39.76, -0.2, -19.84]}
        rotation={[1.61, -1.36, 2.04]}
      />
      <mesh
        geometry={nodes.Rock002.geometry}
        material={materials.Rock}
        position={[42.84, -0.99, -22.45]}
        rotation={[-0.8, 0.92, 0.63]}
      />
      <mesh
        geometry={nodes.Rock003.geometry}
        material={materials.Rock}
        position={[40.94, -0.2, -28.7]}
        rotation={[-0.18, 0, -0.38]}
      />
      <mesh
        geometry={nodes.Rock004.geometry}
        material={materials.Rock}
        position={[36.52, 0.34, -27.75]}
        rotation={[-0.28, 0.23, 0.31]}
      />
      <mesh
        geometry={nodes.Rock005.geometry}
        material={materials.Rock}
        position={[33.83, -0.2, -34.16]}
        rotation={[0.36, 0.23, -0.03]}
      />

      <group position={[-25, 18, 2.82]}>
        <group position={[40, -6, -25]}>
          <Cloud />
        </group>
        <group scale={[1.8, 2, 1.83]} position={[40, -6, -35]}>
          <Cloud />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/models/pirate-raft-world.glb');
