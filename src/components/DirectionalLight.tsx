export function DirectionalLight() {
  return (
    <>
      {/* Main directional light */}
      <directionalLight
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
      />

      {/* Fill light from opposite direction */}
      <directionalLight
        position={[100, 100, 100]}
        intensity={0.8}
        color="#ffffff"
      />

      {/* Rim light from side */}
      <directionalLight
        position={[0, -200, 100]}
        intensity={0.7}
        color="#ffffff"
      />
    </>
  );
}
