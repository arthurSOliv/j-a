import React, { Suspense } from "react";
import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { atom, useAtom } from "jotai";

import { Experience } from "./components/Experience";
import { UI } from './components/UI';

export const pageAtom = atom(0);
export const pages = [
  {
    front: "cover",
    back: "Foto(1)",
  },
];
for (let i = 2; i < 1207 - 1; i += 2) {
  pages.push({
    front: `Foto(${i % 1207})`,
    back: `Foto(${(i + 1) % 1207})`,
  });
}

pages.push({
  front: "Foto(1207)",
  back: "back",
});

const Casamento = () => {    
    return (
        <>
            <UI />
            <Loader />
            <Canvas shadows camera={{ position: [-0.5, 1, 4], fov: 45 }}>
                <group position-y={0}>
                <Suspense fallback={null}>
                    <Experience type="pre" />
                </Suspense>
                </group>
            </Canvas>
        </>
    )
}

export default Casamento;