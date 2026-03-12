"use client";
import dynamic from 'next/dynamic';

// Canvasはブラウザ側でのみ動くため、SSRを無効にしてインポート
const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: false });

export default function Home() {
  return (
    <main className="relative h-screen w-full bg-black overflow-hidden">
      <Scene />
      {/* ここにUI（パラメータ調整など）を重ねる */}
      <div className="absolute top-10 left-10 text-white pointer-events-none">
        <h1 className="text-2xl font-bold">M3 Max Fluid Simulation</h1>
        <p className="opacity-50">WebGPU / TSL / R3F</p>
      </div>
    </main>
  );
}