import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AICrystalCore() {
  const outerMeshRef = useRef<THREE.Mesh>(null);
  const innerMeshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (outerMeshRef.current) {
      outerMeshRef.current.rotation.x += delta * 0.2;
      outerMeshRef.current.rotation.y += delta * 0.3;
    }
    if (innerMeshRef.current) {
      innerMeshRef.current.rotation.y -= delta * 0.4;
      innerMeshRef.current.rotation.z += delta * 0.2;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.8) * 0.3 + Math.PI / 3;
      ringRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
      <group scale={1.2}>
        {/* Outer Wireframe Tech Icosahedron */}
        <mesh ref={outerMeshRef}>
          <icosahedronGeometry args={[1.6, 1]} />
          <meshStandardMaterial
            color="#292524"
            wireframe
            transparent
            opacity={0.35}
            roughness={0.2}
          />
        </mesh>

        {/* Inner Organic Glowing AI Sphere */}
        <mesh ref={innerMeshRef}>
          <sphereGeometry args={[1.0, 64, 64]} />
          <MeshDistortMaterial
            color="#6366f1"
            attach="material"
            distort={0.4}
            speed={2.5}
            roughness={0.1}
            metalness={0.8}
          />
        </mesh>

        {/* Orbiting Orbital Ring */}
        <mesh ref={ringRef}>
          <torusGeometry args={[2.2, 0.02, 16, 100]} />
          <meshBasicMaterial color="#a7f3d0" transparent opacity={0.6} />
        </mesh>

        {/* Floating Particles */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const radius = 2.4;
          return (
            <mesh
              key={i}
              position={[
                Math.cos(angle) * radius,
                Math.sin(i * 1.5) * 0.6,
                Math.sin(angle) * radius,
              ]}
            >
              <sphereGeometry args={[0.06, 16, 16]} />
              <meshStandardMaterial color="#818cf8" emissive="#4f46e5" emissiveIntensity={0.8} />
            </mesh>
          );
        })}
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
        minHeight: '260px',
        position: 'relative',
        cursor: 'grab',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{ width: '100%', height: '100%', background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={1.0} color="#a7f3d0" />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#818cf8" />

        <Suspense fallback={null}>
          <AICrystalCore />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.8}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
