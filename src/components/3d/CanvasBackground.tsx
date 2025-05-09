/**import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, PerspectiveCamera } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingGeometries = () => {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse, viewport } = useThree();

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Subtle rotation
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.1) * 0.2;
      groupRef.current.rotation.z = Math.cos(clock.getElapsedTime() * 0.1) * 0.1;
      
      // Follow mouse with subtle movement
      groupRef.current.position.x = THREE.MathUtils.lerp(
        groupRef.current.position.x,
        mouse.x * viewport.width * 0.05,
        0.02
      );
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        mouse.y * viewport.height * 0.05,
        0.02
      );
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh position={[-3, -1, -5]} rotation={[0, 0, Math.PI / 5]}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#3b82f6" wireframe />
        </mesh>
      </Float>
      
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.4}>
        <mesh position={[3, 2, -10]}>
          <dodecahedronGeometry args={[1.5, 0]} />
          <meshStandardMaterial color="#8b5cf6" wireframe />
        </mesh>
      </Float>
      
      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.3}>
        <mesh position={[-2, 3, -8]} rotation={[Math.PI / 3, 0, 0]}>
          <tetrahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#f97316" wireframe />
        </mesh>
      </Float>
      
      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.2}>
        <mesh position={[4, -2, -6]}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#60a5fa" wireframe />
        </mesh>
      </Float>
    </group>
  );
};

const ResponsiveCamera = () => {
  const { viewport } = useThree();
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  
  // Adjust camera based on screen size
  useFrame(({ camera }) => {
    if (cameraRef.current) {
      // For smaller screens, move camera back to fit more in view
      const z = viewport.width < 10 ? 25 : 20;
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, z, 0.05);
    }
  });
  
  return <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 20]} fov={60} />;
};

const CanvasBackground: React.FC = () => {
  return (
    <div className="canvas-container">
      <Canvas>
        <ResponsiveCamera />
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={0.4} />
        <Stars radius={100} depth={50} count={1000} factor={4} fade />
        <FloatingGeometries />
        <fog attach="fog" args={['#000', 15, 30]} />
      </Canvas>
    </div>
  );
};

export default CanvasBackground;*/


import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, PerspectiveCamera } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingGeometries = () => {
  const groupRef = useRef<THREE.Group>(null);
  const { pointer, viewport } = useThree();

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Enhanced smooth rotation
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.15) * 0.3;
      groupRef.current.rotation.z = Math.cos(clock.getElapsedTime() * 0.1) * 0.2;
      
      // Smoother pointer following with enhanced range
      groupRef.current.position.x = THREE.MathUtils.lerp(
        groupRef.current.position.x,
        pointer.x * viewport.width * 0.08,
        0.015
      );
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        pointer.y * viewport.height * 0.08,
        0.015
      );
    }
  });

  const geometries = [
    // Large central icosahedron
    <Float key="main" speed={1.4} rotationIntensity={0.3} floatIntensity={0.4}>
      <mesh position={[0, 0, -8]} scale={2}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#3b82f6"
          wireframe
          wireframeLinewidth={2}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>,

    // Orbital dodecahedrons
    <Float key="orbit1" speed={1.8} rotationIntensity={0.4} floatIntensity={0.5}>
      <mesh position={[-4, 2, -12]} scale={1.2}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#8b5cf6"
          wireframe
          wireframeLinewidth={1.5}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>,

    // Accent tetrahedrons
    <Float key="accent1" speed={2.2} rotationIntensity={0.5} floatIntensity={0.6}>
      <mesh position={[4, -3, -10]} scale={1.5}>
        <tetrahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#f97316"
          wireframe
          wireframeLinewidth={1.5}
          transparent
          opacity={0.5}
        />
      </mesh>
    </Float>,

    // Background octahedrons
    <Float key="bg1" speed={1.2} rotationIntensity={0.2} floatIntensity={0.3}>
      <mesh position={[-6, -2, -15]} scale={1.8}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#60a5fa"
          wireframe
          wireframeLinewidth={1}
          transparent
          opacity={0.4}
        />
      </mesh>
    </Float>,

    // Small detail cubes
    <Float key="detail1" speed={2.5} rotationIntensity={0.6} floatIntensity={0.7}>
      <mesh position={[5, 4, -12]} scale={0.8}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#c084fc"
          wireframe
          wireframeLinewidth={1}
          transparent
          opacity={0.5}
        />
      </mesh>
    </Float>,

    // Additional geometric accents
    <Float key="accent2" speed={1.6} rotationIntensity={0.3} floatIntensity={0.4}>
      <mesh position={[-3, 4, -10]} scale={1.3}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#22c55e"
          wireframe
          wireframeLinewidth={1.5}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>,
  ];

  return <group ref={groupRef}>{geometries}</group>;
};

const ResponsiveCamera = () => {
  const { viewport } = useThree();
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  
  useFrame(({ camera }) => {
    if (cameraRef.current) {
      // Enhanced responsive camera positioning
      const z = viewport.width < 10 ? 28 : 8;
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, z, 0.03);
    }
  });
  
  return <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 22]} fov={65} />;
};

const CanvasBackground: React.FC = () => {
  return (
    <div className="canvas-container">
      <Canvas>
        <ResponsiveCamera />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={0.6} />
        <pointLight position={[-10, -10, -10]} intensity={0.4} color="#60a5fa" />
        <pointLight position={[10, 10, 10]} intensity={0.3} color="#8b5cf6" />
        <Stars
          radius={100}
          depth={50}
          count={2000}
          factor={4}
          saturation={0.6}
          fade
          speed={1.5}
        />
        <FloatingGeometries />
        <fog attach="fog" args={['#000', 35, 35]} />
      </Canvas>
    </div>
  );
};

export default CanvasBackground;