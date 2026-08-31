import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, useTexture, useGLTF, Center, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';

/* 
// ЗАПАСНОЙ ВАРИАНТ (Старая 3D модель из GLB файла)
function Alvara3DModel() {
  const groupRef = useRef<THREE.Group>(null);

  const { scene } = useGLTF('/hero_new.glb', true, true, (loader) => {
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
*/

function AlvaraCoinModel() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Загружаем картинки с вырезанным прозрачным фоном (PNG) (v2 для сброса кэша)
  const [front, back, edge] = useTexture([
    '/front_v2.png',
    '/back_v2.png',
    '/media__edge.jpg'
  ]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.6;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
      <group ref={groupRef} position={[-0.8, 0, 0]}>
        <Center>
          <mesh rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[2.5, 2.5, 0.12, 64]} />
            
            {/* Ребро монеты (темный металл) */}
            <meshStandardMaterial attach="material-0" map={edge} metalness={0.5} roughness={0.6} color="#222222" />
            {/* Лицевая сторона (с прозрачностью по краям) */}
            <meshStandardMaterial attach="material-1" map={front} metalness={0} roughness={1} transparent={true} />
            {/* Обратная сторона (с прозрачностью по краям) */}
            <meshStandardMaterial attach="material-2" map={back} metalness={0} roughness={1} transparent={true} />
          </mesh>
        </Center>
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
          <AlvaraCoinModel />
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

