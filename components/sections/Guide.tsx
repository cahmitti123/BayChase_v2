"use client";
import Image from "next/image";

import { motion } from "framer-motion";
import { fadeIn } from "@/animation/variants";
import { useInView } from "react-intersection-observer";

const Guide = () => {
  const [ref, inView] = useInView({ triggerOnce: false });
  const [refImage, inViewImage] = useInView({ triggerOnce: false });

  return (
    <motion.div
      variants={fadeIn("left", 0)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      exit="hidden"
    >
      <section ref={ref} className="flexCenter flex-col mt-10">
        <div className=" padding-container container w-full pb-24">
          <p className="uppercase regular-18 mb-3 text-blue-70">About Us</p>

          <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
            <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Who Are We?</h2>
            <p className="regular-16 text-gray-30 xl:max-w-[520px]">
              <strong>
                Behind BayChaser: Crafting Surfing Adventures with Passion and
                Expertise.
              </strong>{" "}
              <br />
              <br />
              Discover the heart and soul of BayChaser. Our team, fueled by a
              love for surfing and a passion for exploration, is dedicated to
              curating unparalleled experiences. Learn about our journey,
              commitment to sustainability, and the shared excitement that
              drives us to unveil the beauty of Morocco's hidden waves. Join us
              in this surf-filled adventure!
            </p>
          </div>
        </div>

        <motion.div
          variants={fadeIn("up", 0)}
          initial="hidden"
          animate={inViewImage ? "show" : "hidden"}
          exit="hidden"
        >
          <div
            ref={refImage}
            className="flexCenter md:container relative w-full"
          >
            <Image
              src="/sunset.webp"
              alt="Guide"
              width={1280}
              height={720}
              className="w-full lg:w-[80rem] h-[25rem] object-cover object-center md:rounded-2xl"
            />

            <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-lg md:left-[5%] lg:top-20">
              <Image
                src="/meter.svg"
                alt="Meter"
                width={16}
                height={100}
                className="h-full w-auto"
              />
              <div className="flexBetween flex-col">
                <div className="flex w-full flex-col">
                  <div className="flexBetween w-full">
                    <p className="regular-16 text-gray-20">Arrivée</p>
                    {/* <p className="bold-16 text-blue-70">52 min</p> */}
                  </div>
                  <p className="bold-20">Heaven</p>
                </div>

                <div className="flex w-full flex-col">
                  <p className="regular-16 text-gray-20">Depart</p>
                  <h4 className="bold-20 whitespace-nowrap">Meeting Point</h4>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Guide;
