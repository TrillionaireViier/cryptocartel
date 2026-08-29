import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Stars, Cylinder, Box } from '@react-three/drei';

const Coin = ({ position, rotation, scale, color = "#fbbf24" }: any) => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2} position={position}>
      <Cylinder args={[1, 1, 0.2, 32]} rotation={rotation} scale={scale}>
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </Cylinder>
    </Float>
  );
};

const Candlestick = ({ position, scale, isBullish }: any) => {
  const color = isBullish ? "#10b981" : "#ef4444";
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5} position={position}>
      <group scale={scale}>
        {/* Body */}
        <Box args={[0.4, 1.5, 0.4]}>
          <meshStandardMaterial color={color} metalness={0.3} roughness={0.2} transparent opacity={0.9} />
        </Box>
        {/* Wick */}
        <Box args={[0.05, 3, 0.05]}>
          <meshStandardMaterial color={color} metalness={0.3} roughness={0.2} />
        </Box>
      </group>
    </Float>
  );
};

export default function Hero3D() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, opacity: 0.9, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#3b82f6" />
        
        {/* Central huge coin (moved up slightly so it isn't completely hidden by text) */}
        <Coin position={[0, 3, -4]} rotation={[Math.PI / 2, 0.5, 0]} scale={2} color="#f59e0b" />
        
        {/* Floating coins - Tighter X coordinates, varied Y coordinates for portrait aspect ratio */}
        <Coin position={[-1.5, 2.5, -1]} rotation={[1, 1, 0]} scale={0.5} color="#fbbf24" />
        <Coin position={[1.5, -3.5, -2]} rotation={[2, 0, 1]} scale={0.7} color="#fcd34d" />
        <Coin position={[-1.2, -2.5, 1]} rotation={[0.5, 2, 1]} scale={0.4} color="#f59e0b" />
        
        {/* Floating candlesticks - Tighter X coordinates */}
        <Candlestick position={[1.8, 1.5, 0]} scale={0.8} isBullish={true} />
        <Candlestick position={[-1.8, -1, 1]} scale={0.7} isBullish={false} />
        <Candlestick position={[1.2, -1.5, -2]} scale={1.1} isBullish={true} />
        <Candlestick position={[-2, 1, -3]} scale={1.3} isBullish={false} />

        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
