"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import campsiteData from "../Camp/CampSiteData";
import CampSite from "../Camp/CampSite";
import Image from "next/image";

import { motion } from "framer-motion";
import { fadeIn } from "@/animation/variants";
import { useInView } from "react-intersection-observer";

const Camp = () => {
  const [ref, inView] = useInView({ triggerOnce: false });
  const [refQuote, inViewQuote] = useInView({ triggerOnce: false });

  return (
    <motion.div
      variants={fadeIn("right", 0)}
      // initial="hidden"
      // animate={inView ? "show" : "hidden"}
    >
      <section ref={ref} className="w-full select-none">
        <Swiper
          slidesPerView={"auto"}
          className="my-swiper-1 h-full w-full object-cover"
          navigation={{
            enabled: true,
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          modules={[Navigation]}
          loop={true}
        >
          <div className="swiper-button-prev">
            <FaCircleChevronLeft className="bg-white rounded-full" />
          </div>
          {campsiteData.map((data, index) => (
            <SwiperSlide key={index}>
              <CampSite {...data} />
            </SwiperSlide>
          ))}
          <div className="swiper-button-next">
            <FaCircleChevronRight className="bg-white rounded-full" />
          </div>
        </Swiper>

        <motion.div
          variants={fadeIn("up", 0)}
          initial="hidden"
          animate={inViewQuote ? "show" : "hidden"}
          exit="hidden"
          className="z-50 relative"
        >
          <div
            ref={refQuote}
            className="flexEnd mt-10 px-6 lg:-mt-60  z-50 relative text-center md:text-left"
          >
            <div className="bg-blue-70 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:p-12 relative w-full overflow-hidden rounded-3xl drop-shadow-2xl">
              <h2 className="regular-24 md:regular-32 2xl:regular-64 text-white">
                <strong>Surfing Magic: </strong>BayChaser's Unseen Wonders!
              </h2>
              <p className="regular-14 xl:regular-16 mt-5 text-white">
                Dive into our gallery, where every image tells a story of
                extraordinary surf tours. Let the visuals inspire your next
                adventure with BayChaser. Discover the allure of Morocco's
                hidden waves through our lens, inviting you to join a surfing
                experience that transcends the ordinary.
              </p>
              <Image
                src="/quote.svg"
                alt="Quote"
                width={186}
                height={219}
                className="camp-quote"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Camp;
