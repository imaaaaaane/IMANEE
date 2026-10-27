import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, Text3D, Center, Grid } from '@react-three/drei';
import * as THREE from 'three';

// --- Glass Bracket & Grid Component ---
function GlassBracketScene() {
  return (
    <group>
      {/* Massive 3D Glass Code Bracket */}
      <Center>
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <Text3D 
            font={'https://unpkg.com/three@0.77.0/examples/fonts/helvetiker_bold.typeface.json'} 
            size={1.8} 
            height={0.3} 
            curveSegments={24} 
            bevelEnabled 
            bevelThickness={0.05} 
            bevelSize={0.02}
          >
            <meshPhysicalMaterial 
              color="#ffffff" 
              transmission={1} 
              opacity={0.4} 
              transparent={true} 
              roughness={0.1} 
              thickness={1.5} 
              envMapIntensity={2} 
              ior={1.5} 
            />
            {`</>`}
          </Text3D>
        </Float>
      </Center>

      {/* Developer Grid Environment */}
      <Grid 
        position={[0, -2.5, 0]} 
        args={[20, 20]} 
        cellColor="#721010" 
        sectionColor="#0A2342" 
        sectionThickness={1.5} 
        cellThickness={0.5} 
        fadeDistance={15} 
      />

      {/* Background Glow */}
      <pointLight color="#721010" intensity={2} position={[0, 0, -5]} />
    </group>
  );
}

// --- Mouse Parallax Wrapper ---
function ParallaxScene() {
  const sceneRef = useRef();
  
  useFrame((state) => {
    if (sceneRef.current) {
      sceneRef.current.rotation.y = THREE.MathUtils.lerp(sceneRef.current.rotation.y, (state.mouse.x * Math.PI) / 15, 0.05);
      sceneRef.current.rotation.x = THREE.MathUtils.lerp(sceneRef.current.rotation.x, -(state.mouse.y * Math.PI) / 15, 0.05);
    }
  });

  return (
    <group ref={sceneRef}>
      <GlassBracketScene />
    </group>
  );
}

// --- Main Component ---
export default function InteractiveBackground() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 9], fov: 40 }} className="absolute inset-0 w-full h-full z-0">
        
        {/* Lighting and Environment */}
        <Environment preset="city" />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />

        {/* Scene with Mouse Parallax */}
        <ParallaxScene />
      </Canvas>
    </div>
  );
}
