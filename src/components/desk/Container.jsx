import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Loader } from "./Loader";

export function Container() {
  return (
    <div className="container flex justify-center items-center h-44 md:h-88">
      <Canvas
        style={{ height: "100%", width: "100%" }}
        camera={{ position: [0, 5, -10], fov: 70 }}
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
          autoRotateSpeed={4.5}
          target={[1.5, 2.9, 1]}
        />
      </Canvas>
    </div>
  );
}
