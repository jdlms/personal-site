import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Loader } from "./Loader";

export function Container() {
  return (
    <div className="canvas-container">
      <Canvas
        style={{
          backgroundColor: "#1c1c2d",
          marginTop: "10px",
          height: "300px",
          width: "auto",
        }}
        camera={{ position: [0, 7, -10], fov: 90 }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[50, 0, 60]} />
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
