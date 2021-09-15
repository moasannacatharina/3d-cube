import { Canvas } from "@react-three/fiber";
import { OrbitControls, softShadows } from "@react-three/drei";
import Cube from "./components/Cube";

import "./App.css";

softShadows({
  frustum: 3.75,
  size: 0.005,
  near: 9.5,
  samples: 17,
  rings: 11,
});

function App() {
  return (
    <div className="App">
      <Canvas shadows camera={{ position: [-5, 2, 10], fov: 60 }}>
        <OrbitControls />
        <pointLight position={[5, 10, 15]} intensity={2} />
        <ambientLight />
        <directionalLight
          castShadow
          position={[2.5, 8, 5]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <Cube width={1} height={1} depth={1} animate={true} color="hotpink" />
        <Cube
          width={5}
          height={0.01}
          depth={5}
          position={[0, -2, 0]}
          color="coral"
          animate={false}
        />
      </Canvas>
    </div>
  );
}

export default App;
