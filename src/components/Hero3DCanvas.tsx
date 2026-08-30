import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';

function AlvaraCoinMesh() {
  const coinRef = useRef<THREE.Group>(null);
  const texture = useTexture('/alvara-coin.jpg');

  // Enhance texture rendering
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.colorSpace = THREE.SRGBColorSpace;

  useFrame((_, delta) => {
    if (coinRef.current) {
      coinRef.current.rotation.y += delta * 0.7;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.6} floatIntensity={1.0}>
      <group ref={coinRef} rotation={[Math.PI / 2 - 0.15, 0.3, 0]}>
        {/* Main Coin Body */}
        <mesh>
          <cylinderGeometry args={[2.0, 2.0, 0.22, 64]} />
          {/* Side material: Metallic Gold */}
          <meshStandardMaterial
            attach="material-0"
            color="#e5c158"
            metalness={0.95}
            roughness={0.15}
          />
          {/* Top/Front Face */}
          <meshStandardMaterial
            attach="material-1"
            map={texture}
            metalness={0.8}
            roughness={0.2}
          />
          {/* Bottom/Back Face */}
          <meshStandardMaterial
            attach="material-2"
            map={texture}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function Hero3DCanvas() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        minHeight: '300px',
        position: 'relative',
        cursor: 'grab',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        style={{ width: '100%', height: '100%', background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[10, 10, 5]} intensity={2.0} color="#fff8e7" />
        <directionalLight position={[-10, -5, -5]} intensity={1.0} color="#e5c158" />
        <pointLight position={[0, 4, 4]} intensity={2.5} color="#ffd700" />
        <pointLight position={[0, -4, -4]} intensity={1.5} color="#ffffff" />

        <Suspense fallback={null}>
          <AlvaraCoinMesh />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1.0}
          maxPolarAngle={Math.PI / 1.4}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
