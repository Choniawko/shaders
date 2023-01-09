import { useRef, useMemo } from "react";

import * as THREE from "three";

const fragmentShader = `
uniform vec2 u_resolution;
        uniform float u_time;

        void main() {
            vec2 st = gl_FragCoord.xy/u_resolution;
            gl_FragColor=vec4(st.x,st.y,0.0,1.0);
        }
`;

function App() {
  const ref = useRef();

  const data = useMemo(
    () => ({
      uniforms: {
        u_time: { type: "f", value: 1.0 },
        u_resolution: {
          type: "v2",
          value: new THREE.Vector2(window.innerWidth + 600, window.innerHeight + 500),
        },
        u_mouse: { type: "v2", value: new THREE.Vector2() },
      },
      fragmentShader,
    }),
    [],
  );
  return (
    <mesh ref={ref}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial attach='material' {...data} />
    </mesh>
  );
}

export default App;
