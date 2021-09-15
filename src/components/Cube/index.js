import { useSpring, a } from "@react-spring/three";
import { useFrame } from "@react-three/fiber";
import { useState, useRef } from "react";

const Cube = ({ width, height, depth, position, animate, color }) => {
  const [clicked, toggle] = useState(true);
  const [hover, setHover] = useState(false);
  const myMesh = useRef();

  const props = useSpring({
    scale: clicked ? [1.5, 1.5, 1.5] : [1, 1, 1],
    color: hover ? "blue" : color,
  });

  useFrame(({ clock }) => {
    if (animate) {
      myMesh.current.rotation.x = clock.getElapsedTime();
      myMesh.current.rotation.y = clock.getElapsedTime();
      myMesh.current.position.y = Math.sin(clock.getElapsedTime());
    }
  });

  return (
    <a.mesh
      ref={myMesh}
      scale={props.scale}
      onClick={() => toggle(!clicked)}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      position={position}
      receiveShadow
      castShadow
    >
      <boxBufferGeometry args={[width, height, depth]} />
      <a.meshStandardMaterial color={props.color} />
    </a.mesh>
  );
};

export default Cube;
