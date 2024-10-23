import { useMemo } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Loader() {
  const { materials, scene } = useLoader(
    GLTFLoader,
    "/models/Desk.glb"
  );
  useMemo(() => {
    Object.values(materials).forEach((material) => {
      material.color.set("#efd8cb");
      material.needsUpdate = true;
      
    });
  }, [materials]);

  return <primitive object={scene} />;
}
