import React, { useRef, useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { Html } from '@react-three/drei';

export default function Gauca({ initial, label, onDrawerToggle, ...props }) {
  const { nodes, materials } = useGLTF('/models/Gauca.glb');
  const [hovered, set] = useState(false);
  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = `pointer`;
      return () => (document.body.style.cursor = `auto`);
    }
  }, [hovered]);

  return (
    <group
      {...props}
      dispose={null}
      scale={2}
      position={[-5.29, 0.5, -5.03]}
      // rotation={[0.0, -0.2, 0.0]}
      onPointerOver={(e) => set(true)}
      onPointerOut={() => set(false)}
    >
      <group onClick={() => onDrawerToggle(label)}>
        <group position={[2.85, 1.51, 2.86]} rotation={[-0.04, 0.04, -0.25]}>
          <mesh
            geometry={nodes.Circle001.geometry}
            material={materials['eyes and mouth.001']}
            position={[0, 0.16, 0.07]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.2}
            // onClick={() => onDrawerToggle(label)}
          />
          {hovered && (
            <Html distanceFactor={10} zIndexRange={[2, 6]}>
              <div className='content'>{'Hi'}</div>
            </Html>
          )}
        </group>
        <mesh
          geometry={nodes.Cylinder002.geometry}
          material={materials['arms.001']}
          position={[3.19, 1.53, 2.58]}
          scale={0.06}
          // onClick={() => onDrawerToggle(label)}
        />
        <group
          position={[2.89, 2.07, 2.88]}
          // onClick={() => onDrawerToggle(label)}
        >
          <mesh
            geometry={nodes.Sphere007_1.geometry}
            material={materials['dark.001']}
          />
          <mesh
            geometry={nodes.Sphere007_2.geometry}
            material={materials['light.001']}
          />
        </group>
        <mesh
          geometry={nodes.Sphere007.geometry}
          material={materials['pit.001']}
          position={[2.89, 2.07, 2.88]}
          // onClick={() => onDrawerToggle(label)}
        />
        <mesh
          geometry={nodes.Sphere004.geometry}
          material={materials['eyes and mouth.001']}
          position={[3.37, 1.75, 2.86]}
        />
        <mesh
          geometry={nodes.Sphere005.geometry}
          material={materials['eyes and mouth.001']}
          position={[2.4, 1.75, 2.86]}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/models/Gauca.glb');
