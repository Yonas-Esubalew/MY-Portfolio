import React from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import CanvasLoader from "../components/CanvasLoader";
import Button from "../components/Button.jsx";
import { HackerRoom } from "../components/HackerRoom";
import { calculateSizes } from "../constants";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Rings from "../components/Rings";
import HeroCamera from "../components/HeroCamera";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section id="home" className="min-h-screen w-full flex flex-col relative overflow-hidden">
      {/* Animated Text Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 text-center"
      >
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="sm:text-4xl text-2xl font-bold text-white font-generalsans"
        >
          Hi, I am Yonas Esubalew <span className="waving-hand">👋</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero_tag text-gray-300 text-lg sm:text-xl"
        >
          Transforming ideas into digital reality
        </motion.p>
      </motion.div>

      {/* 3D Canvas */}
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0, -Math.PI, 0]} />
            </HeroCamera>
            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      {/* Call to Action Button */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="absolute bottom-7 left-0 right-0 w-full z-10 flex justify-center"
      >
        <a href="#contact">
          <Button 
            name="Let's work together"
            isBeam 
            containerClass="sm:w-fit w-full sm:min-w-9 bg-opacity-50 rounded-lg border border-gray-500 hover:border-green-500 focus:ring-1 hover:ring-green-500 text-white transition-all duration-300 transform hover:scale-105"
          />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
