import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Loader } from "./Loader";
import { Spinner } from "./Spinner";

export function Container() {
  useEffect(() => {
    const el = document.getElementById("desk-canvas-placeholder");
    if (el) el.remove();
  }, []);
  return (
    <div className="flex justify-center mt-8 mb-12 md:mt-0">
      <Canvas
        style={{ height: "80%", width: "80%" }}
        camera={{ position: [0, 7, -10], fov: 75 }}
        className="w-44 h-44 md:h-64 md:w-64 cursor-pointer rounded-full shadow-inner"
      >
         <color attach="background" args={["#27272a"]} />
         <ambientLight intensity={2} />        <pointLight
          position={[0, 18, -10]}
          intensity={500}
          color="#fff"
          distance={0}
        />
        <Suspense fallback={<Spinner />}>
          <Loader />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={4.5}
          target={[2, 2.9, 1]}
        />
      </Canvas>
    </div>
  );
}
