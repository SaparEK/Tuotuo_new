"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stars, Html } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

export type LatLng = { lat: number; lon: number };

function latLonToVector3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

function Globe({ target }: { target: LatLng }) {
  const groupRef = useRef<THREE.Group>(null);
  const markerRef = useRef<THREE.Mesh>(null);
  const { camera } = useThree();

  const earthTexture = useMemo(() => new THREE.TextureLoader().load("/textures/earth.jpg"), []);

  // Smoothly rotate camera to the target position
  useEffect(() => {
    const radius = 2.2;
    const lookAt = new THREE.Vector3(0, 0, 0);
    const targetPos = latLonToVector3(target.lat, target.lon, radius);

    const start = new THREE.Vector3().copy(camera.position);
    const end = targetPos.clone();
    const startTime = performance.now();
    const duration = 900; // ms

    let frameId = 0;
    const animate = () => {
      const t = Math.min((performance.now() - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      camera.position.lerpVectors(start, end, eased);
      camera.lookAt(lookAt);
      if (t < 1) frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [camera, target]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0008;
    }
  });

  const markerPosition = useMemo(() => latLonToVector3(target.lat, target.lon, 1.02), [target]);

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial map={earthTexture} specular={new THREE.Color(0x222222)} shininess={5} />
      </mesh>

      {/* Marker */}
      <mesh ref={markerRef} position={markerPosition}>
        <sphereGeometry args={[0.02, 16, 16]} />
        <meshBasicMaterial color="#ff4d4d" />
      </mesh>

      {/* Pulse */}
      <mesh position={markerPosition.clone().multiplyScalar(1.01)}>
        <ringGeometry args={[0.03, 0.06, 32]} />
        <meshBasicMaterial color="#ff4d4d" transparent opacity={0.6} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

export default function GeoCoverageGlobe({ target }: { target: LatLng }) {
  return (
    <div className="w-full h-[360px] rounded-2xl border border-gray-200 overflow-hidden bg-white">
      <Canvas camera={{ position: [0, 0, 2.2], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <Globe target={target} />
        <Stars radius={50} depth={20} count={1000} factor={4} saturation={0} fade />
        <OrbitControls enablePan={false} minDistance={1.8} maxDistance={3} enableZoom={false} />
        <Html position={[0, -1.2, 0]} center>
          <div className="text-xs text-gray-500">Крутите, чтобы осмотреть</div>
          </Html>
      </Canvas>
    </div>
  );
}


