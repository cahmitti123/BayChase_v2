"use client";
import { HiStar } from "react-icons/hi2";
import { HiPlay, HiX } from "react-icons/hi";
import Button from "../common/Button";

import { motion } from "framer-motion";
import { fadeIn } from "@/animation/variants";
import { useInView } from "react-intersection-observer";

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
        className="container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row"
      >
        <div className="hero-map" />

        <div
          ref={refInfo}
          className="relative z-20 flex flex-1 flex-col xl:w-1/2"
        >
          <h1 className="bold-52 lg:bold-64 xl:whitespace-nowrap tracking-tighter text-blue-70">
            Embark on Epic <br />
            Surfing Journeys <br />
            with US
          </h1>
          <h3 className="mt-4 bold-20 lg:bold-20 xl:whitespace-nowrap tracking-tighter text-blue-70">
            Your Gateway to Morocco's Hidden Waves
          </h3>
          <p className="regular-16 mt-6 text-gray-30 xl:max-w-[32.5rem]">
            Unleash the thrill of untouched waves in Morocco with BayChaser. Our
            expert guides curate unforgettable surf adventures, revealing secret
            spots that redefine the surfing experience. Choose freedom – let us
            handle logistics, coaching, and equipment. Your only task? Immerse
            yourself in the magic of the ocean. Join BayChaser for a surf
            odyssey unlike any other, where every wave tells a story and every
            moment is a triumph.
          </p>

          <div className="my-11 flex flex-wrap gap-5">
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
          </div>

          <div className="flex flex-col w-full gap-3 sm:flex-row">
            <Button type="button" title="Book Now!" variant="btn_dark" />

            <Button
              type="button"
              title="What do we offer?"
              variant="btn_white_text"
              icon_start={<HiPlay size={32} className="text-blue-70" />}
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Hero;
