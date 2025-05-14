import { Canvas } from "@react-three/fiber";
import { DirectionalLight } from "./DirectionalLight";

type Props = {
  children: React.ReactNode;
};

export const Scene = ({ children }: Props) => {
  return (
    <Canvas
      orthographic={true}
      shadows={true}
      camera={{
        up: [0.2, 0.2, 1],
        position: [1000, -1100, 1000],
      }}
    >
      <ambientLight />
      <DirectionalLight />
      {children}
    </Canvas>
  );
};