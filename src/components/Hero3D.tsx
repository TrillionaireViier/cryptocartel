import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, Environment, ContactShadows } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

const PremiumModel = () => {
  const groupRef = useRef<THREE.Group>(null);
  const knotRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
    }
    if (knotRef.current) {
      knotRef.current.rotation.x += 0.005;
      knotRef.current.rotation.y += 0.01;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z -= 0.002;
      ringRef.current.rotation.x -= 0.003;
    }
  });

  // Premium glass/crystal material
  const glassMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: '#ffffff',
    metalness: 0.1,
    roughness: 0.05,
    transmission: 0.95, // Glass effect
    thickness: 2,
    ior: 1.5,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
    envMapIntensity: 2.0,
  }), []);

  // Gold/Metallic accent material
  const goldMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: '#fbbf24',
    metalness: 1.0,
    roughness: 0.2,
    envMapIntensity: 1.5,
  }), []);

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <group ref={groupRef} scale={1.2} position={[0, 0, 0]}>
        
        {/* Core Torus Knot */}
        <mesh ref={knotRef} material={glassMaterial}>
          <torusKnotGeometry args={[1.5, 0.4, 256, 64]} />
        </mesh>
        
        {/* Outer Orbiting Ring */}
        <mesh ref={ringRef} material={goldMaterial}>
          <torusGeometry args={[2.8, 0.05, 16, 100]} />
        </mesh>
        
        {/* Inner glowing sphere */}
        <mesh>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.3} />
        </mesh>

      </group>
    </Float>
  );
};

export default function Hero3D() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, opacity: 0.9, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <fog attach="fog" args={['#0f172a', 5, 20]} />
        
        {/* Beautiful lighting for glossy reflections */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2.5} color="#ffffff" castShadow />
        <directionalLight position={[-10, 10, -5]} intensity={1.5} color="#3b82f6" />
        <directionalLight position={[0, -10, 5]} intensity={1} color="#60a5fa" />
        <spotLight position={[5, 10, 5]} intensity={3} angle={0.5} penumbra={1} color="#ffffff" />
        
        {/* Environment map provides the reflections for the clearcoat */}
        <Environment preset="city" />

        <PremiumModel />
        
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        <ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={10} blur={2} far={4} color="#000000" />
      </Canvas>
    </div>
  );
}
