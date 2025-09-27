"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Html, Line, OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useMemo, useState } from "react";
import * as THREE from "three";

// Small offsets to draw directly on the globe without z-fighting
type CityKey =
  | "almaty" | "shanghai" | "moscow" | "tashkent" | "bishkek" | "beijing" | "shenzhen" | "guangzhou" | "chengdu" | "hongkong" | "berlin" | "warsaw" | "vienna" | "budapest" | "prague" | "istanbul";

const CITY_COORDS: Record<CityKey, { lat: number; lon: number }> = {
  almaty: { lat: 43.238949, lon: 76.889709 },
  shanghai: { lat: 31.230391, lon: 121.473701 },
  moscow: { lat: 55.755825, lon: 37.617298 },
  tashkent: { lat: 41.299496, lon: 69.240074 },
  bishkek: { lat: 42.874622, lon: 74.569763 },
  beijing: { lat: 39.904202, lon: 116.407394 },
  shenzhen: { lat: 22.543099, lon: 114.057861 },
  guangzhou: { lat: 23.12911, lon: 113.264381 },
  chengdu: { lat: 30.572815, lon: 104.066803 },
  hongkong: { lat: 22.3193, lon: 114.1694 },
  berlin: { lat: 52.520008, lon: 13.404954 },
  warsaw: { lat: 52.229675, lon: 21.01223 },
  vienna: { lat: 48.208176, lon: 16.373819 },
  budapest: { lat: 47.497913, lon: 19.040236 },
  prague: { lat: 50.075539, lon: 14.4378 },
  istanbul: { lat: 41.00824, lon: 28.978359 },
};

function degToRad(deg: number): number {
  return (deg * Math.PI) / 180;
}

function latLonToVec3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = degToRad(90 - lat);
  const theta = degToRad(lon + 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

function greatCirclePoints(a: { lat: number; lon: number }, b: { lat: number; lon: number }, radius: number, segments = 128) {
  const va = latLonToVec3(a.lat, a.lon, 1).normalize();
  const vb = latLonToVec3(b.lat, b.lon, 1).normalize();
  const dot = THREE.MathUtils.clamp(va.dot(vb), -1, 1);
  const angle = Math.acos(dot);
  const sinAngle = Math.sin(angle) || 1e-6;
  const pts: THREE.Vector3[] = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const w1 = Math.sin((1 - t) * angle) / sinAngle;
    const w2 = Math.sin(t * angle) / sinAngle;
    const v = new THREE.Vector3(
      va.x * w1 + vb.x * w2,
      va.y * w1 + vb.y * w2,
      va.z * w1 + vb.z * w2
    ).normalize();
    // очень близко к поверхности, чтобы «лежало» на сфере
    const r = radius;
    pts.push(v.multiplyScalar(r));
  }
  return pts;
}

function CityMarkers({ radius }: { radius: number }) {
  const entries = Object.entries(CITY_COORDS) as [CityKey, { lat: number; lon: number }][];
  return (
    <group>
      {entries.map(([key, c]) => {
        const base = latLonToVec3(c.lat, c.lon, radius).normalize();
        const markerPos = base.clone().multiplyScalar(radius);
        const labelPos = base.clone().multiplyScalar(radius);
        return (
          <group key={key}>
            <mesh position={markerPos.toArray()}>
              <sphereGeometry args={[Math.max(radius * 0.01, 0.004), 16, 16]} />
              <meshStandardMaterial color="#111111" emissive="#ff7a00" emissiveIntensity={0.4} />
            </mesh>
            <Html
              position={labelPos.toArray()}
              center
              distanceFactor={5}
              occlude
              transform
              style={{
                background: "rgba(255,255,255,0.9)",
                color: "#0a0a0a",
                padding: "1px 4px",
                borderRadius: 6,
                fontSize: 10,
                lineHeight: 1.2,
                whiteSpace: "nowrap",
                border: "1px solid rgba(0,0,0,0.08)",
              }}
            >
              {key}
            </Html>
          </group>
        );
      })}
    </group>
  );
}

function Arc({ from, to, color, radius }: { from: CityKey; to: CityKey; color: string; radius: number }) {
  const [dash, setDash] = useState(0);
  const points = useMemo(() => {
    const a = CITY_COORDS[from];
    const b = CITY_COORDS[to];
    return greatCirclePoints(a, b, radius, 128);
  }, [from, to, radius]);

  useFrame((_, d) => {
    setDash((prev) => prev - d * 0.6);
  });

  return (
    <Line points={points} color={color} lineWidth={1.5} dashed dashScale={1} dashSize={0.22} dashOffset={dash} />
  );
}

function FlightArcs({ radius }: { radius: number }) {
  const routes: [CityKey, CityKey, string][] = [
    ["almaty", "shanghai", "#22d3ee"],
    ["shanghai", "moscow", "#34d399"],
    ["moscow", "almaty", "#f59e0b"],
    ["tashkent", "bishkek", "#ef4444"],
    ["almaty", "tashkent", "#8b5cf6"],
    ["bishkek", "moscow", "#06b6d4"],
    ["shanghai", "beijing", "#22c55e"],
    ["shenzhen", "guangzhou", "#eab308"],
    ["beijing", "chengdu", "#f97316"],
    ["hongkong", "shenzhen", "#3b82f6"],
    ["berlin", "warsaw", "#a855f7"],
    ["vienna", "budapest", "#10b981"],
    ["prague", "berlin", "#f43f5e"],
    ["istanbul", "vienna", "#0ea5e9"],
  ];
  return (
    <group>
      {routes.map(([f, t, c], idx) => (
        <Arc key={`${f}-${t}-${idx}`} from={f} to={t} color={c} radius={radius} />
      ))}
    </group>
  );
}

function SceneOnCanvas() {
  const gltf = useGLTF("/models/planet_earth.glb");
  const { scene } = gltf;
  const { radius, center } = useMemo(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const sphere = new THREE.Sphere();
    box.getBoundingSphere(sphere);
    return { radius: sphere.radius || 1.0, center: sphere.center.clone() };
  }, [scene]);

  return (
    <group rotation={[0, Math.PI / 6, 0]} position={[0, 0, 0]}>
      <group position={[-center.x, -center.y, -center.z]}>
        <primitive object={scene} />
      </group>
      <CityMarkers radius={radius} />
      <FlightArcs radius={radius} />
    </group>
  );
}

export default function Earth() {
  return (
    <div className="w-full aspect-[4/3] rounded-xl border border-[#142436]/10 overflow-hidden bg-white">
      <Canvas camera={{ position: [2.5, 1.5, 2.5], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <Suspense fallback={null}>
          <SceneOnCanvas />
          <Environment preset="sunset" />
        </Suspense>
        <OrbitControls enableDamping enablePan={false} minDistance={1.5} maxDistance={5} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}

  // useGLTF.preload("/models/planet_earth.glb");


