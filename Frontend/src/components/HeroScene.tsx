import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function Blob() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    if (!ref.current) return;
    ref.current.rotation.y = s.clock.elapsedTime * 0.25;
    ref.current.rotation.x = Math.sin(s.clock.elapsedTime * 0.4) * 0.2;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[1.6, 32]} />
        <MeshDistortMaterial color="#d4ff3a" distort={0.55} speed={2.2} roughness={0.15} metalness={0.4} />
      </mesh>
    </Float>
  );
}

export default function HeroBlob() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 45 }} gl={{ alpha: true, antialias: true }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 4, 5]} intensity={1.5} />
        <directionalLight position={[-4, -2, 2]} intensity={0.8} color="#ff6b3a" />
        <Blob />
      </Suspense>
    </Canvas>
  );
}
