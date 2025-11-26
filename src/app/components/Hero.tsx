'use client';
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "../utils/cn";
import { TextGenerateEffect } from "./ui/TextGenarateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import ParallaxBackground from "./ParallaxBackground";
import { Astronaut } from "../components/ui/Astronaut";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

import Loader from "../components/ui/Loader";


const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <div className="relative h-screen w-full overflow-hidden">

      {/* 🟣 PARALLAX ON TOP (BEHIND EVERYTHING) */}
      <div className="absolute h-full w-full inset-0 z-0">
        <ParallaxBackground />
        <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut
                scale={isMobile && 0.23}
                position={isMobile && [0, -1.5, 0]}
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
      </div>

      {/* 🟡 HERO CONTENT */}
      <div className="relative z-10 pb-20 pt-36">

        {/* Spotlights */}
        <div>
          <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
          <Spotlight className="top-10 -left-full h-[80vh] w-[50vw]" fill="purple" />
          <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
        </div>

        {/* Grid overlay */}
        {/* <div className="absolute top-0 left-0 flex h-[50rem] w-full items-center justify-center">
          <div
            className={cn(
              "absolute inset-0",
              "[background-size:40px_40px]",
              "[background-image:linear-gradient(to_right,rgba(228,228,231,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.08)_1px,transparent_1px)]"
            )}
          />
        </div> */}

        {/* Hero text */}
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[80vw] md:max-w-2xl lg:max-w-[60vh] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-xl text-center text-blue-100">
           
            </h2>

            <TextGenerateEffect
              className="text-center text-[40px] lg:text-6xl drop-shadow-lg"
              words="Transforming concept into seamless Experiences"
            />

            <p className="text-center py-1 text-blue-100 md:tracking-wider text-sm md:text-lg lg:text-2xl">
              Hi, I'm Vishnu
            </p>

            <a href="#about">
              <MagicButton title="Show my work" icon={<FaLocationArrow />} position="right" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}


export default Hero;
