import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Stars, TorusKnot, Sphere, MeshTransmissionMaterial } from '@react-three/drei';

export default function Hero3D() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, opacity: 0.9, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#3b82f6" />
        <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={2} color="#10b981" />
        
        {/* Core stunning glass geometry */}
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
          <TorusKnot args={[1.5, 0.4, 256, 64]} position={[0, 0, -1]}>
            <MeshTransmissionMaterial 
              backside 
              samples={4} 
              thickness={2} 
              chromaticAberration={0.05} 
              anisotropy={0.1} 
              distortion={0.5} 
              distortionScale={0.5} 
              temporalDistortion={0.1} 
              color="#3b82f6" 
            />
          </TorusKnot>
        </Float>

        {/* Glowing orbiting spheres */}
        <Float speed={1.5} rotationIntensity={2} floatIntensity={3} position={[-4, 2, -2]}>
          <Sphere args={[0.3, 32, 32]}>
            <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={2} toneMapped={false} />
          </Sphere>
        </Float>
        
        <Float speed={2.5} rotationIntensity={2} floatIntensity={3} position={[4, -2, -1]}>
          <Sphere args={[0.4, 32, 32]}>
            <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={2} toneMapped={false} />
          </Sphere>
        </Float>

        <Stars radius={100} depth={50} count={4000} factor={4} saturation={1} fade speed={1.5} />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  );
}
