/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 cloud.glb
Author: tugrulsubekci (https://sketchfab.com/tugrulsubekci)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cloud-0c40298650c448cca4c8a86ec444fc72
Title: Cloud
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Cloud(props) {
  const { nodes, materials } = useGLTF('/models/cloud.glb');
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          geometry={nodes.cloud2_Material_0.geometry}
          material={materials.Material}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/models/cloud.glb');