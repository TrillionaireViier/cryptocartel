import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function createCoinTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d')!;

  const cx = 512;
  const cy = 512;
  const radius = 490;

  // 1. Dark brushed metallic coin background
  const bgGradient = ctx.createRadialGradient(cx, cy, 30, cx, cy, radius);
  bgGradient.addColorStop(0, '#322f2e');
  bgGradient.addColorStop(0.7, '#1e1c1b');
  bgGradient.addColorStop(1, '#121110');
  ctx.fillStyle = bgGradient;
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.fill();

  // Brushed concentric texture rings
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
  ctx.lineWidth = 2;
  for (let r = 40; r < radius - 80; r += 8) {
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.stroke();
  }

  // 2. Outer Gold Border Ring
  ctx.lineWidth = 36;
  const goldGradient = ctx.createLinearGradient(0, 0, 1024, 1024);
  goldGradient.addColorStop(0, '#fef08a');
  goldGradient.addColorStop(0.3, '#e5c158');
  goldGradient.addColorStop(0.6, '#d4af37');
  goldGradient.addColorStop(1, '#9a3412');
  ctx.strokeStyle = goldGradient;
  ctx.beginPath();
  ctx.arc(cx, cy, radius - 30, 0, Math.PI * 2);
  ctx.stroke();

  // Thin Inner Gold Accent Ring
  ctx.lineWidth = 5;
  ctx.strokeStyle = '#e5c158';
  ctx.beginPath();
  ctx.arc(cx, cy, radius - 95, 0, Math.PI * 2);
  ctx.stroke();

  // 3. Circular Gold Embossed Text "ALVARA CAPITAL COIN •"
  ctx.fillStyle = goldGradient;
  ctx.font = '900 32px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const textStr = 'ALVARA CAPITAL COIN  •  ALVARA CAPITAL COIN  •  ALVARA CAPITAL COIN  •  ';
  const textRadius = radius - 62;
  const totalChars = textStr.length;

  for (let i = 0; i < totalChars; i++) {
    const char = textStr[i];
    const angle = (i / totalChars) * Math.PI * 2 - Math.PI / 2;
    ctx.save();
    ctx.translate(cx + Math.cos(angle) * textRadius, cy + Math.sin(angle) * textRadius);
    ctx.rotate(angle + Math.PI / 2);
    ctx.fillText(char, 0, 0);
    ctx.restore();
  }

  // 4. Center Gold "A" Logo Emblem
  ctx.save();
  ctx.translate(cx, cy);

  const emblemGradient = ctx.createLinearGradient(-100, -120, 100, 120);
  emblemGradient.addColorStop(0, '#fff59d');
  emblemGradient.addColorStop(0.35, '#e5c158');
  emblemGradient.addColorStop(0.7, '#d4af37');
  emblemGradient.addColorStop(1, '#854d0e');

  ctx.fillStyle = emblemGradient;
  ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  ctx.shadowBlur = 12;
  ctx.shadowOffsetX = 3;
  ctx.shadowOffsetY = 6;

  // Main Stylized "A" Loop
  ctx.beginPath();
  ctx.moveTo(-60, 70);
  ctx.bezierCurveTo(-100, 0, -70, -100, 15, -115);
  ctx.bezierCurveTo(80, -125, 95, -60, 70, -15);
  ctx.bezierCurveTo(50, 20, -10, 35, -45, 55);
  ctx.bezierCurveTo(-55, 60, -58, 67, -60, 70);
  ctx.closePath();
  ctx.fill();

  // Cutout inside "A"
  ctx.globalCompositeOperation = 'destination-out';
  ctx.beginPath();
  ctx.moveTo(-25, 15);
  ctx.bezierCurveTo(-5, 0, 20, -25, 35, -50);
  ctx.bezierCurveTo(40, -65, 25, -75, 0, -70);
  ctx.bezierCurveTo(-35, -65, -45, -15, -25, 15);
  ctx.closePath();
  ctx.fill();

  ctx.globalCompositeOperation = 'source-over';

  // Separate Floating Pill Element of Logo
  ctx.beginPath();
  ctx.roundRect(40, 10, 40, 58, 18);
  ctx.fill();

  ctx.restore();

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function AlvaraCoinMesh() {
  const coinRef = useRef<THREE.Group>(null);
  const coinTexture = useMemo(() => createCoinTexture(), []);

  useFrame((_, delta) => {
    if (coinRef.current) {
      coinRef.current.rotation.y += delta * 0.8;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.5} floatIntensity={0.8}>
      <group ref={coinRef} rotation={[0.4, 0.4, 0]}>
        <mesh>
          <cylinderGeometry args={[2.0, 2.0, 0.2, 64]} />
          {/* Side Material: Shiny Metallic Gold */}
          <meshStandardMaterial
            attach="material-0"
            color="#e5c158"
            metalness={0.96}
            roughness={0.12}
          />
          {/* Front Face: Pure Gold Alvara Coin Texture */}
          <meshStandardMaterial
            attach="material-1"
            map={coinTexture}
            metalness={0.85}
            roughness={0.2}
          />
          {/* Back Face: Pure Gold Alvara Coin Texture */}
          <meshStandardMaterial
            attach="material-2"
            map={coinTexture}
            metalness={0.85}
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
        minHeight: '280px',
        position: 'relative',
        cursor: 'grab',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        style={{ width: '100%', height: '100%', background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.3} />
        <directionalLight position={[10, 10, 8]} intensity={2.2} color="#fff8e7" />
        <directionalLight position={[-10, -5, -5]} intensity={1.2} color="#e5c158" />
        <pointLight position={[0, 4, 4]} intensity={2.8} color="#ffd700" />
        <pointLight position={[0, -4, -4]} intensity={1.5} color="#ffffff" />

        <Suspense fallback={null}>
          <AlvaraCoinMesh />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1.2}
          maxPolarAngle={Math.PI / 1.4}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
