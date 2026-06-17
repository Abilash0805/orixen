"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Environment, AdaptiveDpr } from "@react-three/drei";
import * as THREE from "three";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px), (pointer: coarse)");
    setIsMobile(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return isMobile;
}

/* ------------------------------------------------------------------ */
/* Shader particle universe                                            */
/* ------------------------------------------------------------------ */

const particleVertex = /* glsl */ `
  uniform float uTime;
  uniform float uScroll;
  attribute float aScale;
  attribute float aSpeed;
  varying float vAlpha;

  void main() {
    vec3 pos = position;
    float drift = uTime * aSpeed;
    pos.y += sin(drift + position.x * 0.6) * 0.45;
    pos.x += cos(drift * 0.7 + position.z * 0.5) * 0.35;
    pos.z += sin(drift * 0.4 + position.y) * 0.3;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = aScale * (38.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;

    vAlpha = smoothstep(26.0, 6.0, -mvPosition.z) * (0.5 + 0.5 * sin(drift * 2.0));
  }
`;

const particleFragment = /* glsl */ `
  varying float vAlpha;
  void main() {
    float d = distance(gl_PointCoord, vec2(0.5));
    if (d > 0.5) discard;
    float glow = 1.0 - smoothstep(0.0, 0.5, d);
    vec3 color = mix(vec3(0.18, 0.42, 1.0), vec3(0.75, 0.85, 1.0), glow);
    gl_FragColor = vec4(color, glow * vAlpha * 0.9);
  }
`;

function ParticleField({ count = 1600 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const { positions, scales, speeds } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const r = 6 + Math.random() * 18;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
      positions[i * 3 + 2] = r * Math.cos(phi);
      scales[i] = 0.6 + Math.random() * 2.2;
      speeds[i] = 0.15 + Math.random() * 0.5;
    }
    return { positions, scales, speeds };
  }, [count]);

  const uniforms = useMemo(
    () => ({ uTime: { value: 0 }, uScroll: { value: 0 } }),
    []
  );

  useFrame((state) => {
    uniforms.uTime.value = state.clock.elapsedTime;
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aScale" args={[scales, 1]} />
        <bufferAttribute attach="attributes-aSpeed" args={[speeds, 1]} />
      </bufferGeometry>
      <shaderMaterial
        vertexShader={particleVertex}
        fragmentShader={particleFragment}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* ------------------------------------------------------------------ */
/* Central holographic core                                            */
/* ------------------------------------------------------------------ */

/** 0 → 1 over the first viewport height of scrolling */
function getScrollProgress() {
  if (typeof window === "undefined") return 0;
  return Math.min(window.scrollY / window.innerHeight, 1);
}

function HoloCore() {
  const group = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Mesh>(null);
  const wire = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    const scroll = getScrollProgress();
    if (group.current) {
      // core spins up and recedes as the user scrolls away
      group.current.rotation.y += delta * (0.18 + scroll * 1.4);
      group.current.position.y = THREE.MathUtils.lerp(
        group.current.position.y,
        scroll * 2.2,
        0.06
      );
      // ease toward pointer for mouse-reactive tilt
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        state.pointer.y * 0.35,
        0.04
      );
      group.current.rotation.z = THREE.MathUtils.lerp(
        group.current.rotation.z,
        state.pointer.x * 0.2,
        0.04
      );
    }
    if (inner.current) {
      const s = 1 + Math.sin(t * 1.4) * 0.04;
      inner.current.scale.setScalar(s);
    }
    if (wire.current) {
      wire.current.rotation.x = -t * 0.22;
      wire.current.rotation.y = t * 0.12;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.8}>
      <group ref={group}>
        {/* metallic torus knot core */}
        <mesh ref={inner} castShadow>
          <torusKnotGeometry args={[1.15, 0.34, 220, 36]} />
          <meshPhysicalMaterial
            color="#aeb8cc"
            metalness={1}
            roughness={0.12}
            clearcoat={1}
            clearcoatRoughness={0.1}
            envMapIntensity={2.2}
          />
        </mesh>
        {/* holographic wireframe shell */}
        <mesh ref={wire} scale={1.85}>
          <icosahedronGeometry args={[1.3, 1]} />
          <meshBasicMaterial
            color="#3b82f6"
            wireframe
            transparent
            opacity={0.16}
          />
        </mesh>
        {/* orbit rings */}
        <Ring radius={2.6} speed={0.4} tilt={Math.PI / 3.2} />
        <Ring radius={3.1} speed={-0.28} tilt={-Math.PI / 4} />
      </group>
    </Float>
  );
}

function Ring({
  radius,
  speed,
  tilt,
}: {
  radius: number;
  speed: number;
  tilt: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * speed;
  });
  return (
    <mesh ref={ref} rotation={[tilt, 0, 0]}>
      <torusGeometry args={[radius, 0.012, 8, 128]} />
      <meshBasicMaterial color="#5b9dff" transparent opacity={0.45} />
    </mesh>
  );
}

/* ------------------------------------------------------------------ */
/* Camera rig + mouse-reactive light                                   */
/* ------------------------------------------------------------------ */

function Rig() {
  const light = useRef<THREE.PointLight>(null);
  const { camera } = useThree();

  useFrame((state) => {
    const scroll = getScrollProgress();
    // parallax dolly toward pointer + scroll-driven pull-back
    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      state.pointer.x * 1.4,
      0.035
    );
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      state.pointer.y * 0.9 - scroll * 1.6,
      0.035
    );
    camera.position.z = THREE.MathUtils.lerp(
      camera.position.z,
      8 + scroll * 6,
      0.05
    );
    camera.lookAt(0, scroll * 1.2, 0);

    if (light.current) {
      light.current.position.x = state.pointer.x * 8;
      light.current.position.y = state.pointer.y * 6 + 2;
    }
  });

  return (
    <pointLight
      ref={light}
      position={[4, 3, 4]}
      intensity={60}
      color="#3b82f6"
      distance={25}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Scene                                                               */
/* ------------------------------------------------------------------ */

export default function HeroScene() {
  const isMobile = useIsMobile();

  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 42 }}
      dpr={isMobile ? 1 : [1, 1.8]}
      gl={{
        antialias: !isMobile,
        alpha: true,
        powerPreference: isMobile ? "low-power" : "high-performance",
      }}
      style={{ background: "transparent" }}
    >
      <AdaptiveDpr pixelated />
      <ambientLight intensity={isMobile ? 0.45 : 0.25} />
      <directionalLight position={[-6, 4, 2]} intensity={1.2} color="#e8eeff" />
      <Rig />
      <HoloCore />
      <ParticleField count={isMobile ? 500 : 1600} />
      {!isMobile && <Environment preset="city" />}
      <fog attach="fog" args={["#030308", 12, 30]} />
    </Canvas>
  );
}
