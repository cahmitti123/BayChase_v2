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
            </h2>
            <p className="regular-12 xl:regular-16 mt-5 text-white">
              I'm Abdou, commonly known as the <strong>"Classic Boy"</strong>.
              With several years of personal surfing experience and over 8 years
              of teaching, I've evolved into a certified surf instructor,
              holding a level 1 certification from the Royal Moroccan Surf &
              Bodyboard Federation. I offer highly personalized surf coaching in
              the beautiful coastal town of Imsouane and its surroundings.
              <br />
              Whether you're a beginner or an advanced surfer, I provide private
              coaching and group lessons for both adults and kids, complete with
              video analysis. <br />
              My top priority is to establish a secure and enjoyable learning
              environment.
              <br />
              Join me on the southern coast of Morocco, and let's share the most
              unique and unforgettable journey together.
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
          <Image
            src="/images/DSC09721.jpeg"
            alt="abdo"
            fill={true}
            className="h-full w-full absolute top-0 left-0 bg-cover bg-center blur-xs drop-shadow-md md:rounded-5xl overflow-hidden object-cover transform -scale-x-100"
          />
        </Card>
      </div>
    </section>
  );
};

export default page;
