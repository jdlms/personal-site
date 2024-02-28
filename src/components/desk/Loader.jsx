import { useMemo } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextureLoader } from "three";

export function Loader() {
  const { materials, scene } = useLoader(
    GLTFLoader,
    "/models/Desk.glb"
  );

  // const texture = useLoader(
  //   TextureLoader,
  //   "/models/desk.png"
  // );

  useMemo(() => {
    Object.values(materials).forEach((material) => {
      // material.map = texture;
      material.color.set("#efd8cb");
      material.needsUpdate = true;
      
    });
  }, [materials]);

  return <primitive object={scene} />;
}
