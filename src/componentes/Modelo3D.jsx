import React from "react";
import { useGLTF } from "@react-three/drei";

export const Modelo3D = ({ruta}) => {
  //ruta = "/guitar/scene.gltf";
  console.log("Ruta: ", ruta);
  const modelo = useGLTF(ruta, true);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={modelo.scene}
        scale={0.5}
        position={[0, -3.25, -1.5]}
        rotation={ruta === "/modelos/camiseta_7/scene.gltf" ? [0, Math.PI*2, 0] : [0, 0, 0]} 
      />
    </mesh>
  );
};