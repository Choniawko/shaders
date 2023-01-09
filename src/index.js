import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Canvas } from "@react-three/fiber";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Canvas
    shadows
    camera={{
      fov: 45,
      near: 0.1,
      far: 200,
      position: [0.0, 0.0, 1.5],
    }}
  >
    <App />
  </Canvas>,
);
