import { OrbitControls, useGLTF } from "@react-three/drei";

export default function Experience() {
  const { nodes } = useGLTF("./model/portal.glb");

  return (
    <>
      <color args={["#030202"]} attach="background" />

      <OrbitControls makeDefault />

      <mesh geometry={nodes.baked.geometry} />
    </>
  );
}
