import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, useTexture, Center, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

function AlvaraCoinModel() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Загружаем наши текстуры
  const [front, back, edge] = useTexture([
    '/media__front.jpg',
    '/media__back.jpg',
    '/media__edge.jpg'
  ]);

  // Убираем белые края с текстур (делаем "Зум" картинки)
  // Чтобы увеличить картинку, нужно сделать repeat МЕНЬШЕ 1.
  const zoom = 0.92; // Увеличиваем на 8%, чтобы срезать белые края и тень
  const offset = (1 - zoom) / 2;

  front.repeat.set(zoom, zoom);
  front.offset.set(offset, offset);
  back.repeat.set(zoom, zoom);
  back.offset.set(offset, offset);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.6;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
      <group ref={groupRef}>
        <Center>
          <mesh rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[2.5, 2.5, 0.15, 64]} />
            
            {/* Ребро монеты */}
            <meshStandardMaterial attach="material-0" map={edge} metalness={0.1} roughness={0.8} color="#cccccc" />
            {/* Лицевая сторона */}
            <meshStandardMaterial attach="material-1" map={front} metalness={0} roughness={1} />
            {/* Обратная сторона */}
            <meshStandardMaterial attach="material-2" map={back} metalness={0} roughness={1} />
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

