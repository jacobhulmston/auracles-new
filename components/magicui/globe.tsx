"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useCallback, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [0.95, 0.9, 1],
  markerColor: [102 / 255, 43 / 255, 234 / 255],
  glowColor: [0.95, 0.9, 1],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
    { location: [51.5074, -0.1278], size: 0.08 },
    { location: [48.8566, 2.3522], size: 0.07 },
    { location: [-33.8688, 151.2093], size: 0.06 },
    { location: [55.7558, 37.6173], size: 0.07 },
    { location: [35.6762, 139.6503], size: 0.08 },
    { location: [1.3521, 103.8198], size: 0.05 },
    { location: [-34.6037, -58.3816], size: 0.06 },
    { location: [37.7749, -122.4194], size: 0.08 },
    { location: [22.3193, 114.1694], size: 0.06 },
    { location: [25.2048, 55.2708], size: 0.07 },
    { location: [52.52, 13.405], size: 0.06 },
    { location: [45.4215, -75.6972], size: 0.05 },
    { location: [-6.2088, 106.8456], size: 0.07 },
    { location: [59.9139, 10.7522], size: 0.04 },
    { location: [4.7109, -74.0721], size: 0.05 },
    { location: [35.6892, 51.389], size: 0.05 },
    { location: [-1.2921, 36.8219], size: 0.04 },
    { location: [31.7683, 35.2137], size: 0.04 },
    { location: [43.6532, -79.3832], size: 0.06 },
    { location: [13.7563, 100.5018], size: 0.05 },
  ],
};

export default function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  const phiRef = useRef<number>(0);
  const widthRef = useRef<number>(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const onRender = useCallback((state: Record<string, number>) => {
    phiRef.current += 0.01;
    state.phi = phiRef.current;
    state.width = widthRef.current * 2;
    state.height = widthRef.current * 2;
  }, []);

  const onResize = useCallback(() => {
    if (canvasRef.current) {
      widthRef.current = canvasRef.current.offsetWidth;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: widthRef.current * 2,
      height: widthRef.current * 2,
      onRender,
    });

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    });

    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      // animation logic
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", onResize);
      globe.destroy();
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [config, onRender, onResize]);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className,
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
        )}
        ref={canvasRef}
      />
    </div>
  );
}
