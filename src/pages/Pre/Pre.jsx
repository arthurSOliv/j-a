import React, { Suspense } from "react";
import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Experience } from "./components/Experience";
import { UI } from './components/UI';

const Pre = () => {
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

export default Pre;