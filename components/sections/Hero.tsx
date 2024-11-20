"use client";
import { HiStar } from "react-icons/hi2";
import { HiPlay, HiX } from "react-icons/hi";
import Button from "../common/Button";

import { motion } from "framer-motion";
import { fadeIn } from "@/animation/variants";
import { useInView } from "react-intersection-observer";
import { GiWaveSurfer } from "react-icons/gi";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

const Hero = () => {
  const [ref, inView] = useInView({ triggerOnce: false });
  const [refInfo, inViewInfo] = useInView({ triggerOnce: false });
  const [maxHeight, setMaxHeight] = useState("100vh");

  useEffect(() => {
    const updateMaxHeight = () => {
      const screenHeight = window.innerHeight;
      const halfScreenHeight = screenHeight / 2;
      if (window.innerWidth > 2000) {
        setMaxHeight(`${halfScreenHeight}px`);
      }
    };

    updateMaxHeight();
    window.addEventListener("resize", updateMaxHeight);

    return () => {
      window.removeEventListener("resize", updateMaxHeight);
    };
  }, []);

  return (
    <motion.div className="xl:container">
      <section
        ref={ref}
        className="flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row"
      >
        {/* <video
          src="/hero_vid.mp4"
          autoPlay
          loop
          muted
          className="absolute right-0 top-0 w-full opacity-70 object-cover z-[-1]"
      style={{ maxHeight }}
        /> */}
        <Image
          src="/hero_img.jpg"
          width={1000}
          height={1000}
          alt="hero"
          className="absolute left-0 top-0 w-full opacity-70 object-cover z-[-1]"
          style={{ maxHeight }}
        />

        <div
          ref={refInfo}
          className="relative z-20 flex flex-auto flex-col xl:max-w-[34rem] backdrop-blur-md bg-slate-50 bg-opacity-60 p-5 rounded-2xl  drop-shadow-2xl"
        >
          <h1 className="bold-52 uppercase lg:bold-64 tracking-tighter text-blue-70 xl:max-w-[32.5rem]">
            Join us for Epic Surfing Journeys
          </h1>
          <h3 className="bold-20 mt-4 lg:bold-20  tracking-tighter text-blue-70 xl:max-w-[32.5rem]">
            Your Gateway to Morocco's Hidden Waves
          </h3>
          <p className="regular-16 text-black xl:max-w-[32.5rem]">
            With years of surf expertise, Bay Chaser is dedicated to providing
            exceptional customer service. We offer a range of services including
            guided surf tours, personalized coaching sessions, and accommodation
            options tailored to your needs.
          </p>

          <div className="flex flex-col pt-8 w-full gap-3 sm:flex-row">
            <Link href="/#booking">
              <Button type="button" title="Book Now !" variant="btn_dark" />
            </Link>
            <Link href="/packages">
              <Button
                type="button"
                title="What do we offer ?"
                variant="btn_white_text"
                icon_start={
                  <GiWaveSurfer
                    size={32}
                    className="text-blue-70 rounded-full"
                  />
                }
              />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Hero;
