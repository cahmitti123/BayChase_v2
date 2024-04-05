"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/animation/variants";
import { useInView } from "react-intersection-observer";
import { ApplyForm } from "./Form";

const BookForm = () => {
  const [ref, inView] = useInView({ triggerOnce: false });
  const [refDownload, inViewDownload] = useInView({ triggerOnce: false });

  return (
    <motion.div
      variants={fadeIn("up", 0)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      exit="hidden"
    >
      <section
        id="book"
        ref={ref}
        className="flexCenter w-full flex-col pb-28 xl:pb-2 mt-2 md:mt-5 relative"
      >
        <motion.div
          variants={fadeIn("down", 0)}
          initial="hidden"
          animate={inViewDownload ? "show" : "hidden"}
          exit="hidden"
          className="w-full"
        >
          <div ref={refDownload} className="get-app">
            <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
              <h2 className="bold-40 l:bold-64 xl:max-w-[400px]">
                Seize Your Wave : Reserve Your Surfing Adventure Now!
              </h2>
              <p className="regular-16 text-gray-10">
              Get ready for an incredible surfing adventure with BayChaser! Explore the excitement of Morocco's hidden waves by reserving your spot today. Our booking form is your ticket to surf fun. Just fill it out and get ready for an experience full of thrills, good times, and unforgettable memories. Don't miss out – your surf journey is waiting for you !
              </p>
            </div>
            <div className="flex-1 items-center justify-center  lg:justify-end  visible xl:invisible">
              <ApplyForm />
            </div>
          </div>
        </motion.div>
        <div className="xl:flex flex-1 items-center md:justify-end absolute md:right-10 z-50 hidden">
          <ApplyForm />
        </div>
      </section>
    </motion.div>
  );
};

export default BookForm;
