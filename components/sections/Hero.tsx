"use client";
import { HiStar } from "react-icons/hi2";
import { HiPlay, HiX } from "react-icons/hi";
import Button from "../common/Button";

import { motion } from "framer-motion";
import { fadeIn } from "@/animation/variants";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const Hero = () => {
  const [ref, inView] = useInView({ triggerOnce: false });
  const [refInfo, inViewInfo] = useInView({ triggerOnce: false });
  const [refMap, inViewMap] = useInView({ triggerOnce: false });

  return (
    <motion.div
      // variants={fadeIn("up", 0)}
      // initial="hidden"
      // animate={inView ? "show" : "hidden"}
      // exit="hidden"
      className="xl:container"
    >
      <section
        ref={ref}
        className="flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row"
      >
        {/* <div className="hero-map" /> */}
        {/* <span className="absolute right-0 top-0 opacity-40 bg-blue-70 w-full h-screen z-10" /> */}
        <video
          src="/hero_vid.mp4"
          autoPlay
          loop
          muted
          className="absolute right-0 top-0 h-screen w-full opacity-70 object-cover z-[-1]"
        />
        {/* <div className="h-screen -mb-36" /> */}

        <div
          ref={refInfo}
          className="relative z-20 flex flex-auto  flex-col xl:max-w-[32.5rem] backdrop-blur-md bg-slate-50 bg-opacity-60 p-5 rounded-2xl  drop-shadow-2xl"
        >
          <h1 className="bold-52 lg:bold-64  tracking-tighter text-blue-70 xl:max-w-[32.5rem]">
            Embark on Epic Surfing Journeys with US
          </h1>
          <h3 className="mt-4 bold-20 lg:bold-20  tracking-tighter text-blue-70 xl:max-w-[32.5rem]">
            Your Gateway to Morocco's Hidden Waves
          </h3>
          <p className="regular-16 mt-6 text-black xl:max-w-[32.5rem]">
            Unleash the thrill of untouched waves in Morocco with BayChaser. Our
            expert guides curate unforgettable surf adventures, revealing secret
            spots that redefine the surfing experience.
          </p>

          {/* <div className="my-11 flex flex-wrap gap-5">
            <div className="flex items-center gap-2">
              {Array(5)
                .fill(1)
                .map((_, index) => (
                  <HiStar key={index} size={24} className="text-yellow-400" />
                ))}
            </div>

            <p className="bold-16 lg:bold-20 text-gray-1">
              +1k
              <span className="regular-16 lg:regular-20 ml-2">
                Appreciated our services
              </span>
            </p>
          </div> */}

          <div className="flex flex-col pt-8 w-full gap-3 sm:flex-row">
            <Link href="/#booking">
              <Button type="button" title="Book Now!" variant="btn_dark" />
            </Link>
            <Link href="/packages">
              <Button
                type="button"
                title="What do we offer?"
                variant="btn_white_text"
                icon_start={<HiPlay size={32} className="text-blue-70" />}
              />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Hero;
