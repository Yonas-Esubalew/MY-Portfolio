import React, { useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";
// import Code from "../components/Code";
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Developer from '../components/Developer.jsx';
import CanvasLoader from '../components/Loading.jsx';
import Code from '../components/Code.jsx';
import AdvancedCodeEditor from "../components/Code.jsx";

const About = () => {
  const [animationName, setAnimationName] = useState('idle');
  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(" yonasatwork999@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section id="about" className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3 bg-opacity-50 rounded-lg border border-gray-600 hover:border-green-500 focus:ring-1 hover:ring-green-500 text-white transition-duration-200">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext ">Hi, I am Yonas</p>
              <p className="grid-subtext">
                With over three years of experience as a software developer, I
                specialize in building scalable, high-performance solutions that
                seamlessly integrate innovation, efficiency, and exceptional
                user experiences. Currently pursuing a Bachelor’s degree in
                Computer Science and Engineering at Adama Science and Technology
                University (2022 - Expected 2026), I am passionate about
                leveraging cutting-edge technologies to drive impactful digital
                transformations.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3 bg-opacity-50 rounded-lg border border-gray-600 hover:border-green-500 focus:ring-1 hover:ring-green-500 text-white transition-duration-200">
          <div className="grid-container">
            <img
              src="/assets/grid2.2.png"
              alt="grid-2"
              className="w-full sm:w-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in JavaScript/TypeScript, focusing on React,
                Next.js, and Node.js to build scalable, high-performance
                applications.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4 bg-opacity-50 rounded-lg border border-gray-600 hover:border-green-500 focus:ring-1 hover:ring-green-500 text-white transition-duration-200">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 9.005401,
                    lng: 38.763611,
                    text: "Addis Ababa, Ethiopia",
                    color: "red",
                    size: 500,
                    icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
                  },
                  {
                    lat: 9.05785,
                    lng: 7.49508,
                    text: "Abuja, Nigeria",
                    color: "red",
                    size: 300,
                    icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                  },
                  {
                    lat: 55.7558,
                    lng: 37.6176,
                    text: "Moscow, Russia",
                    color: "red",
                    size: 300,
                    icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                  },
                  {
                    lat: 39.933364,
                    lng: 32.859742,
                    text: "Ankara, Turkey",
                    color: "red",
                    size: 300,
                    icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                  },
                  {
                    lat: 52.52,
                    lng: 13.405,
                    text: "Berlin, Germany",
                    color: "red",
                    size: 300,
                    icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                  },
                  {
                    lat: 48.8566,
                    lng: 2.3522,
                    text: "Paris, France",
                    color: "red",
                    size: 300,
                    icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                  },
                  {
                    lat: -25.7461,
                    lng: 28.1881,
                    text: "Pretoria, South Africa",
                    color: "red",
                    size: 300,
                    icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                  },
                  {
                    lat: 30.033333,
                    lng: 31.233334,
                    text: "Cairo, Egypt",
                    color: "red",
                    size: 300,
                    icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                  },
                  {
                    lat: 38.907192,
                    lng: -77.036871,
                    text: "Washington D.C, USA",
                    color: "red",
                    size: 300,
                    icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                  },
                  {
                    lat: 33.4484,
                    lng: -112.074,
                    text: "Arizona-Phoenix, USA",
                    color: "red",
                    size: 300,
                    icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                  },
                  {
                    lat: 38.5816,
                    lng: -121.4944,
                    text: "California-Sacramento, USA",
                    color: "red",
                    size: 300,
                    icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                  },
                  {
                    lat: 30.4383,
                    lng: -84.2807,
                    text: "Florida-Tallahassee, USA",
                    color: "red",
                    size: 300,
                    icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                  },
                  {
                    lat: 33.749,
                    lng: -84.388,
                    text: "Georgia-Atlanta, USA",
                    color: "red",
                    size: 300,
                    icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                  },
                  {
                    lat: 30.2672,
                    lng: -97.7431,
                    text: "Texas-Austin, USA",
                    color: "red",
                    size: 300,
                    icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                  },
                  {
                    lat: 37.5407,
                    lng: -77.436,
                    text: "Virginia-Richmond, USA",
                    color: "red",
                    size: 300,
                    icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                  },
                  {
                    lat: 37.3382,
                    lng: -121.8863,
                    text: "California-San Jose, USA",
                    color: "red",
                    size: 300,
                    icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                  },
                  {
                    lat: 37.4419,
                    lng: -122.143,
                    text: "California- Palo Alto, USA",
                    color: "red",
                    size: 300,
                    icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                  },
                  {
                    lat: 37.3861,
                    lng: -122.0839,
                    text: "California- Mountain View, USA",
                    color: "red",
                    size: 300,
                    icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                  },
                  {
                    lat: 37.322,
                    lng: -122.0322,
                    text: "California- Cupertino, USA",
                    color: "red",
                    size: 300,
                    icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                  },
                  {
                    lat: 45.4215,
                    lng: -75.6972,
                    text: "Ottawa, Canada",
                    color: "red",
                    size: 1000,
                    icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                  },
                  {
                    lat: 24.466667,
                    lng: 54.366667,
                    text: "Abu Dhabi, UAE",
                    color: "red",
                    size: 300,
                    icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                  },
                  {
                    lat: 41.9028,
                    lng: 12.4964,
                    text: "Rome, Italy",
                    color: "red",
                    size: 300,
                    icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                  },
                  {
                    lat: 33.6844,
                    lng: 73.0479,
                    text: "Islamabad, Pakistan",
                    color: "red",
                    size: 300,
                    icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                  },
                  {
                    lat: 39.9042,
                    lng: 116.4074,
                    text: "Beijing, China",
                    color: "red",
                    size: 300,
                    icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                  },
                  {
                    lat: -35.2809,
                    lng: 149.13,
                    text: "Canberra, Australia",
                    color: "red",
                    size: 300,
                    icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I work Remotely across most timezones.
              </p>
              <p className="grid-subtext">
                I work remotely across various time zones, including EST, PST,
                CST, MST, IST, GMT, CET, and AEST, ensuring seamless
                collaboration with global teams. With a flexible and adaptive
                approach, I excel in cross-functional environments, delivering
                high-quality solutions while staying in sync with diverse teams
                worldwide.
              </p>
              <br></br>
              <a href="#contact">
              <Button
                name="Contact Me"
                isBeam
                id="contact"
                ContainerClass="w-full mt-10  bg-opacity-50 rounded-lg border-gray-600 hover:border-green-500 hover:ring-1 hover:ring-green-500 text-white transition-duration-200"
              />
              </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3 bg-opacity-50 rounded-lg border border-gray-600 hover:border-green-500 focus:ring-1 hover:ring-green-500 text-white transition-duration-200">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My Passion for Coding.</p>
              <p className="grid-subtext">
                {" "}
                I love solving complex problems and bringing ideas to life
                through code. Programming isn't just my profession—it's my
                passion. I thrive on exploring new technologies, refining my
                skills, and pushing creative boundaries to build efficient,
                impactful solutions that make a difference.
              </p>
              <br></br>
              <div className="flex">
              <AdvancedCodeEditor/>
              <div className="work-canvas border-none">
                          
                        </div>
              </div>
              {/* <Code/> */}
              {/* <a href="./assets/Yonas.pdf">
              <Button
                name="Resume"
                isBeam
                id="contact"
                ContainerClass="w-full mt-10  bg-opacity-50 rounded-lg border-gray-600 hover:border-green-500 hover:ring-1 hover:ring-green-500 text-white transition-duration-200"
              />
              </a> */}
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2 bg-opacity-50 rounded-lg border border-gray-600 hover:border-green-500 focus:ring-1 hover:ring-green-500 text-white transition-duration-200">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact Me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  yonasatwork999@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
