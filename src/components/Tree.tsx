import { tileSize } from "../constants";

type Props = {
  tileIndex: number;
  height: number;
};

export function Tree({ tileIndex, height }: Props) {
  return (
    <group position-x={tileIndex * tileSize}>
      {/* Main foliage */}
      <mesh position-z={height / 2 + 15} castShadow receiveShadow>
        <boxGeometry args={[30, 30, height]} />
        <meshLambertMaterial color={0x67c41e} flatShading />
      </mesh>

      {/* Trunk */}
      <mesh position-z={10} castShadow receiveShadow>
        <boxGeometry args={[15, 15, 20]} />
        <meshLambertMaterial color={0x644533} flatShading />
      </mesh>

      {/* Bump on top */}
      <mesh position-z={height + 15} castShadow receiveShadow>
        <boxGeometry args={[20, 20, 10]} />
        <meshLambertMaterial color={0x67c41e} flatShading />
      </mesh>
    </group>
  );
}