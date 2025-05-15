import * as THREE from "three";

type Props = {
  ref: React.RefObject<THREE.DirectionalLight | null>;
};


export function DirectionalLight({ ref }: Props) {
  return (
    <>
      {/* Main directional light */}
      <directionalLight
        ref={ref}
        position={[-100, -100, 200]}
        up={[0, 0, 1]}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-left={-400}
        shadow-camera-right={400}
        shadow-camera-top={400}
        shadow-camera-bottom={-400}
        shadow-camera-near={50}
        shadow-camera-far={400}
        intensity={1.0}
        color="#f5e1b3"
      />

      {/* Fill light from opposite direction */}
      <directionalLight
        position={[100, 100, 100]}
        intensity={0.8}
        color="#f5e1b3"
      />

      {/* Rim light from side */}
      <directionalLight
        position={[0, -200, 100]}
        intensity={0.7}
        color="#f5e1b3"
      />
    </>
  );
}
