"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HiStar } from "react-icons/hi2";
import { Separator } from "../ui/separator";

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

const REVIEWS = [
  {
    fullName: "Sarah",
    rating: 4,
    comment:
      "Absolutely fantastic experience! The instructors were knowledgeable and friendly, making the whole surfing adventure unforgettable.",
  },
  {
    fullName: "Mike",
    rating: 4,
    comment:
      "The beginner package kickstarted my surfing journey. Patient instructors, great equipment, and stunning photography options made it a memorable experience!",
  },
  {
    fullName: "Jack",
    rating: 4,
    comment:
      "Refined my skills and took my surfing to the next level. Instructors provided invaluable feedback, and the small group setting was perfect for personalized attention.",
  },
  {
    fullName: "Emily",
    rating: 4,
    comment:
      "The private lesson accelerated my progress, and having a dedicated photographer capture the moments made it truly special.",
  },
];

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full "
    >
      <CarouselContent>
        {REVIEWS.map((review, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col aspect-auto items-center justify-center gap-4 p-6 h-full">
                  <div className="flex flex-row  justify-left items-center">
                    <AvatarDemo />
                    <span className="text-lg pl-4 font-semibold">
                      {review.fullName}
                    </span>
                  </div>
                  <p>{review.comment}</p>
                  <div className="flex items-center gap-2">
                    {Array(5)
                      .fill(1)
                      .map((_, index) => (
                        <HiStar
                          key={index}
                          size={24}
                          className="text-yellow-400"
                        />
                      ))}
                  </div>
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

export function CarouselPlugin() {
  const plugin = React.useRef(Autoplay({ delay: 2000 }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        align: "start",
      }}
    >
      <CarouselContent>
        {REVIEWS.map((review, index) => (
          <CarouselItem key={index} className=" md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col aspect-auto items-center justify-center gap-4 p-6">
                  <div className="flex flex-row  justify-left items-center">
                    <AvatarDemo />
                    <span className="text-lg pl-4 font-semibold">
                      {review.fullName}
                    </span>
                  </div>
                  <p>{review.comment}</p>
                  <div className="flex items-center gap-2">
                    {Array(5)
                      .fill(1)
                      .map((_, index) => (
                        <HiStar
                          key={index}
                          size={24}
                          className="text-yellow-400"
                        />
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="mx-5 md:mx-0" />
      <CarouselNext className="mx-5 md:mx-0" />
    </Carousel>
  );
}

const Reviews = () => {
  return (
    <section className="container flex flex-col items-center justify-center mt-7">
      <Separator className="my-4" />
      <h3 className="mb-3 text-6xl text-blue-70 font-bold tracking-tight ">
        Reviews
      </h3>
      <p className="text-center mb-5">
        Share your experience with us and let others know about your surfing
        adventure!
      </p>
      <Separator className="my-4" />
      <CarouselPlugin />
    </section>
  );
};

export default Reviews;
