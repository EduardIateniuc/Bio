import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";

interface DynamicWaveElementProps {
  position: [number, number, number];
  scale?: [number, number, number];
  speed?: number;
  distort?: number;
  color?: string;
}

export const DynamicWaveElement = ({
  position,
  scale = [2.5, 2.5, 2.5],
  speed = 2,
  distort = 1.1,
  color = "#C8C8C8",
}: DynamicWaveElementProps) => {
  const meshRef = useRef<any>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.3;
      meshRef.current.rotation.x = Math.sin(t * 0.2) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        color={color}
        speed={speed}
        distort={distort}
        roughness={0.2}
        emissive={color}
        emissiveIntensity={0.5}
      />
    </mesh>
  );
};
