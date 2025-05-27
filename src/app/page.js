"use client";
import Link from "next/link";
import { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { DynamicWaveElement } from "./DynamicWaveElement";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const isMobileView = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth <= 768;
    }
    return false;
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={0.7} />
          <Suspense fallback={null}>
            <Environment preset="night" />

            {isMobileView() ? (
              <>
                <DynamicWaveElement position={[8, 8, -6]} color="	#FFFFFF" />
                <DynamicWaveElement position={[-6, -5, -6]} color="#101010" />
              </>
            ) : (
              <>
                <DynamicWaveElement position={[10, -8, -6]} color="#282828" />
                <DynamicWaveElement position={[-11, 6, -6]} color="#282828" />
              </>
            )}

    
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1
            className={`text-7xl font-black text-center tracking-tight opacity-0 ${
              isLoaded ? "animate-fadeIn" : ""
            }`}
            style={{
              textShadow:
                "0 0 40px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3)",
              fontFamily: "'Montserrat', sans-serif",
              letterSpacing: "-0.05em",
              animation: isLoaded ? "fadeIn 1.5s ease forwards" : "",
            }}
          >
            Eduard's Lab
          </h1>
          <Link href="/main">
            <button
              className={`mt-8 px-8 py-3 border border-white text-white text-lg font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 opacity-0 ${
                isLoaded ? "animate-fadeIn" : ""
              }`}
              style={{
                animation: isLoaded ? "fadeIn 1.5s ease forwards 0.8s" : "",
              }}
            >
              Enter
            </button>
          </Link>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
