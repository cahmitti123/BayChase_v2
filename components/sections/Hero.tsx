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

// const Hero = () => {
//   return (
//     <div className="relative overflow-hidden bg-slate-200">
//       <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
//         <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
//           <div className="sm:max-w-lg">
//             <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
//               title
//             </h1>
//             <p className="mt-4 text-xl text-gray-500">long ass description</p>
//           </div>
//           <div>
//             <div className="mt-10">
//               {/* Decorative image grid */}
//               <div
//                 aria-hidden="true"
//                 className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
//               >
//                 <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
//                   <div className="flex items-center space-x-6 lg:space-x-8">
//                     <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
//                       <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
//                         <img
//                           src="/images/DSC09721.jpeg"
//                           alt=""
//                           className="h-full w-full object-cover object-center"
//                         />
//                       </div>
//                       <div className="h-64 w-44 overflow-hidden rounded-lg">
//                         <img
//                           src="/images/IMG_3352.jpeg"
//                           alt=""
//                           className="h-full w-full object-cover object-center"
//                         />
//                       </div>
//                     </div>
//                     <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
//                       <div className="h-64 w-44 overflow-hidden rounded-lg">
//                         <img
//                           src="/images/IMG_3355.jpeg"
//                           alt=""
//                           className="h-full w-full object-cover object-center"
//                         />
//                       </div>
//                       <div className="h-64 w-44 overflow-hidden rounded-lg">
//                         <img
//                           src="/images/IMG_3356.jpeg"
//                           alt=""
//                           className="h-full w-full object-cover object-center"
//                         />
//                       </div>
//                       <div className="h-64 w-44 overflow-hidden rounded-lg">
//                         <img
//                           src="/images/IMG_3358.jpeg"
//                           alt=""
//                           className="h-full w-full object-cover object-center"
//                         />
//                       </div>
//                     </div>
//                     <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
//                       <div className="h-64 w-44 overflow-hidden rounded-lg">
//                         <img
//                           src="/images/IMG_3350.jpeg"
//                           alt=""
//                           className="h-full w-full object-cover object-center"
//                         />
//                       </div>
//                       <div className="h-64 w-44 overflow-hidden rounded-lg">
//                         <img
//                           src="/images/IMG_3594.jpeg"
//                           alt=""
//                           className="h-full w-full object-cover object-center"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Hero;
