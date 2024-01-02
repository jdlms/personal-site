import { useMemo } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextureLoader } from "three";

export function Loader() {
  const { materials, scene } = useLoader(
    GLTFLoader,
    "/models/Desk.gltf"
  );

  const texture = useLoader(
    TextureLoader,
    "/models/desk.png"
  );

  useMemo(() => {
    Object.values(materials).forEach((material) => {
      material.map = texture;
      material.color.set("#e3b294");
      material.needsUpdate = true;
    });
  }, [materials, texture]);

  return <primitive object={scene} />;
}
