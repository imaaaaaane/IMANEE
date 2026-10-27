import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function Map3D() {
  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <Canvas camera={{ position: [0, 5, 12], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        {/* Allows dragging/rotating the 3D scene */}
        <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
        
        {/* Ground Plane: A slightly darker pink than the background #FADADD */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial color="#E8C8CB" />
        </mesh>
        
        {/* Platform 1: About / Profile */}
        <mesh position={[-4, 0, -2]}>
          <cylinderGeometry args={[1.5, 1.5, 2, 32]} />
          <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.1} />
        </mesh>

        {/* Platform 2: Projects */}
        <mesh position={[4, 0.5, -3]}>
          <boxGeometry args={[2.5, 3, 2.5]} />
          <meshStandardMaterial color="#f0f0f0" roughness={0.3} metalness={0.2} />
        </mesh>

        {/* Platform 3: Contact */}
        <mesh position={[0, -0.5, 4]}>
          <cylinderGeometry args={[2, 2, 1, 32]} />
          <meshStandardMaterial color="#fafafa" roughness={0.2} metalness={0.1} />
        </mesh>
      </Canvas>
    </div>
  );
}
