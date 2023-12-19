import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Loader } from "./Loader";

export function Container() {
  return (
    <div>
      <Canvas
        style={{
          marginTop: "10px",
          height: "300px",
          width: "4OOpx",
        }}
        camera={{ position: [0, 7, -10], fov: 90 }}
      >
        <ambientLight intensity={2.4} />
        <pointLight position={[70, 50, 60]} />
        <Suspense fallback={null}>
          <Loader />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={12.0}
          target={[1.5, 2.9, 0]}
        />
      </Canvas>
    </div>
  );
}
