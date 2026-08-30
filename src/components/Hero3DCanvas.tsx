import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, useGLTF, Center, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';

function Alvara3DModel() {
  const groupRef = useRef<THREE.Group>(null);

  const { scene } = useGLTF('/lilya_varshava.glb', true, true, (loader) => {
    loader.setMeshoptDecoder(MeshoptDecoder);
  });

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.6;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
      <group ref={groupRef}>
        <Center>
          <primitive object={scene} scale={2.2} castShadow receiveShadow />
        </Center>
      </group>
    </Float>
  );
}

useGLTF.preload('/lilya_varshava.glb', true, true, (loader) => {
  loader.setMeshoptDecoder(MeshoptDecoder);
});

export default function Hero3DCanvas() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        minHeight: '320px',
        position: 'relative',
        cursor: 'grab',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        style={{ width: '100%', height: '100%', background: 'transparent' }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={2.5} color="#ffffff" castShadow />
        <directionalLight position={[-10, 5, -5]} intensity={1.5} color="#3b82f6" />
        <directionalLight position={[0, -10, 5]} intensity={1.0} color="#e5c158" />
        <spotLight position={[0, 10, 8]} intensity={2.0} angle={0.6} penumbra={1} color="#ffffff" />

        <Environment preset="city" />

        <Suspense fallback={null}>
          <Alvara3DModel />
        </Suspense>

        <ContactShadows position={[0, -2.0, 0]} opacity={0.4} scale={6} blur={2} far={4} color="#000000" />

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.8}
          maxPolarAngle={Math.PI / 1.4}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}

