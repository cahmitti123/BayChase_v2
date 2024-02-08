"use client";
import React, { useCallback, useState } from "react";
import { PACKAGES } from "@/constants/content";

import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

import { Badge } from "@/components/ui/badge";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export function CarouselSpacing() {
  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    } else {
      return text;
    }
  };
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      opts={{ align: "start", loop: true }}
      orientation="vertical"
      className="w-full md:w-2/5 mt-16 md:mt-3 xl:-mt-9"
    >
      <CarouselContent className="-mt-1 h-[250px]">
        {PACKAGES.map((pkg, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1">
            <div className="p-1">
              <Card className="backdrop-blur-sm bg-blue-200 cursor-pointer bg-opacity-10 hover:bg-blue-70 hover:backdrop-blur-sm hover:bg-opacity-10 transition-all delay-300">
                <CardContent className="flex flex-col ">
                  <div className="flex flex-row justify-between items-center py-3 w-full">
                    <Link
                      href={pkg.href}
                      className="text-2xl text-start text-blue-70 font-semibold mr-3 hover:text-black cursor-pointer"
                    >
                      {pkg.label}
                    </Link>
                    <Button
                      variant="default"
                      title="test"
                      className="bg-blue-70 py-1 rounded-full h-auto  hover:bg-slate-400"
                      type="button"
                    >
                      <Link href={"/packages"}>Read More</Link>
                    </Button>
                  </div>
                  <p className="w-2/3">{truncateText(pkg.description, 80)}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

const Features = () => {
  return (
    <Card className="container rounded-3xl bg-white">
      <section className="flex-col bg-feature-bg xs:py-2  bg-center bg-no-repeat xl:py-10 ">
        <div className="flex w-full flex-col items-center md:items-start">
          <h2 className="bold-32 lg:bold-64 text-blue-70">Our Packages</h2>

          <div className="w-full">
            <div className="flexEnd mt-5 md:mt-10 md:px-6 lg:-mt-60 z-50 relative text-center md:text-left">
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
            <CarouselSpacing />
          </div>
        </div>
      </section>
    </Card>
  );
};

export default Features;
