import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';

export default function Shark({
  initial,
  geometry,
  material,
  children,
  label,
  onDrawerToggle,
  ...props
}) {
  const ref = useRef();
  const [hovered, set] = useState(false);
  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = `pointer`;
      return () => (document.body.style.cursor = `auto`);
    }
  }, [hovered]);
  useFrame(() => {
    ref.current.position.z = THREE.MathUtils.lerp(
      ref.current.position.z,
      hovered ? -0.2 : 0,
      0.075 - Math.abs(initial) / 2000
    );
  });

  return (
    <group
      {...props}
      onPointerOver={(e) => set(true)}
      onPointerOut={() => set(false)}
      onClick={() => onDrawerToggle(label)}
    >
      <group ref={ref}>
        <mesh geometry={geometry} material={material} />
        {hovered && (
          <Html distanceFactor={10} zIndexRange={[2, 6]}>
            <div className='content'>{label}</div>
          </Html>
        )}
      </group>
    </group>
  );
}
