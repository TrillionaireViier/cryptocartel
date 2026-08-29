import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Stars, Environment, ContactShadows } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

const Logo3D = () => {
  const groupRef = useRef<THREE.Group>(null);

  const mainShape = useMemo(() => {
    const shape = new THREE.Shape();
    
    // Outer boundary (Stylized 'A' main body)
    // Start at top tip
    shape.moveTo(0, 3);
    // Down the right side (thick)
    shape.bezierCurveTo(1.5, 0.5, 2.0, -1.0, 1.5, -1.0);
    // Swoop inwards to form the top of the gap
    shape.bezierCurveTo(0.8, -1.0, 0.5, -0.5, -0.5, -1.5);
    // Down the left leg
    shape.lineTo(-1.5, -2.5);
    // Bottom left rounded corner
    shape.bezierCurveTo(-2.5, -2.5, -2.8, -1.5, -2.0, -0.5);
    // Up the left outer edge to the top
    shape.lineTo(-0.5, 2.5);
    shape.quadraticCurveTo(0, 3.2, 0, 3);
    
    // Inner cutout (Hole)
    const holePath = new THREE.Path();
    holePath.moveTo(-0.2, 1.5);
    holePath.lineTo(-1.2, -0.5);
    holePath.quadraticCurveTo(-1.5, -1.0, -0.5, -0.8);
    holePath.lineTo(0.5, -0.5);
    holePath.quadraticCurveTo(1.0, -0.4, 0.8, 0.2);
    holePath.lineTo(-0.2, 1.5);
    shape.holes.push(holePath);

    return shape;
  }, []);

  // Generate the side dot shape
  const dotShape = useMemo(() => {
    const shape = new THREE.Shape();
    // Start top-left of the dot
    shape.moveTo(1.8, -1.5);
    // Curve top-right
    shape.quadraticCurveTo(2.8, -1.2, 3.0, -2.0);
    // Curve bottom-right
    shape.quadraticCurveTo(3.2, -3.0, 2.2, -2.8);
    // Curve bottom-left
    shape.quadraticCurveTo(1.2, -2.6, 1.5, -1.8);
    // Close
    shape.quadraticCurveTo(1.6, -1.5, 1.8, -1.5);
    return shape;
  }, []);

  const extrudeSettings = useMemo(() => ({
    steps: 2,
    depth: 0.5,
    bevelEnabled: true,
    bevelThickness: 0.15,
    bevelSize: 0.15,
    bevelOffset: 0,
    bevelSegments: 5
  }), []);

  const glossyBlackMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: '#0a0a0a',
    metalness: 0.9,
    roughness: 0.1,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
    envMapIntensity: 2.0,
  }), []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.3;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={groupRef} scale={0.8} position={[-0.5, 0, 0]}>
        {/* Main A Loop */}
        <mesh material={glossyBlackMaterial}>
          <extrudeGeometry args={[mainShape, extrudeSettings]} />
        </mesh>
        
        {/* Side Dot */}
        <mesh material={glossyBlackMaterial}>
          <extrudeGeometry args={[dotShape, extrudeSettings]} />
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

        <Logo3D />
        
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        <ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={10} blur={2} far={4} color="#000000" />
      </Canvas>
    </div>
  );
}
