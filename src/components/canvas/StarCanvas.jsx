import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import * as random from "maath/random/dist/maath-random.esm";
import { PointMaterial, Points, Preload } from "@react-three/drei";

const StarCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1] ">
      <Canvas camera={{ position: [0, 1, -1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

const Stars = () => {
  const ref = useRef();

  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.1 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 9;
    ref.current.rotation.y = delta / 10;
  });

  return (
    <group rotation={[0, 0, Math.PI / 5]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export default StarCanvas;
