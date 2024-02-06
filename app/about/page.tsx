"use client";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const page = () => {
  return (
    <section className="lg:container w-full items-center mt-10 mb-24 ">
      <div className="flex flex-col">
        {/* <h1 className="bold-52 lg:bold-64 -mb-64 ml-9   text-blue-70 xl:max-w-[32.5rem]">
          About me
        </h1> */}

        <div className="flex justify-end lg:-mx-16 xl:-mx-30 lg:-mb-96 z-10 relative text-center md:text-left">
          <div className="bg-blue-70 backdrop-blur-md md:bg-opacity-60 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:p-12 relative w-full overflow-hidden md:rounded-3xl drop-shadow-2xl">
            <h2 className="regular-24 md:regular-32 2xl:regular-64 text-white">
              <strong>Who Am I : </strong>
              <br />
              Here We Should Say Something
            </h2>
            <p className="regular-14 xl:regular-16 mt-5 text-white">
              Dive into our gallery, where every image tells a story of
              extraordinary surf tours. Let the visuals inspire your next
              adventure with BayChaser. Discover the allure of Morocco's hidden
              waves through our lens, inviting you to join a surfing experience
              that transcends the ordinary.
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
        <Card className="h-[700px] p-3 relative md:rounded-5xl">
          <div
            className="h-full w-full absolute top-0 left-0 bg-cover bg-center blur-xs drop-shadow-md md:rounded-5xl "
            style={{
              backgroundImage: "url('/images/DSC09721.jpeg')",
              transform: "scaleX(-1)",
            }}
          />
        </Card>
      </div>
    </section>
  );
};

export default page;
