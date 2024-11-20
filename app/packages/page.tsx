"use client";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { PACKAGES } from "@/constants/content";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const packages = () => {
  return (
    <div className="mx-3 md:container flex flex-col items-center gap-2 mb-20 ">
      <Separator className="my-4" />
      <h1 className="bold-52 lg:bold-64 mb-5  tracking-tighter text-blue-70 xl:max-w-[32.5rem]">
        Our Packages
      </h1>
      <p className=" text-center text-blue-70">
        Here are the packages and the surf sessions we offer, please keep in
        mind :
      </p>
      <p className="text-sm text-left text-blue-70">
        - Each package is one week long. <br />
        - A 10% discount is applied for groups of more than 4 people. <br />
        - A surf session lasts 2 hours.
        <br />
        - Group lessons are limited to a maximum of 8 people. <br />- All prices
        are p.p (per person)
      </p>
      <Separator className="my-4" />
      <Card className="md:p-4 drop-shadow-2xl bg-gradient-to-br from-slate-100 to-slate-200 bg-gradient-opacity-50 backdrop-blur-md">
        <div className="grid grid-cols-1 xl:grid-cols-3 w-full h-full gap-4">
          {PACKAGES.map((pkg, index) => (
            <Card
              key={index}
              className={`flex flex-col justify-between p-3 w-full h-full bg-feature-bg bg-opacity-5 bg-cover bg-no-repeat drop-shadow-md  ${
                pkg.type === "Guiding" ? "col-span-1 xl:col-span-3 " : ""
              }`}
            >
              <div>
                <div className="flex flex-col items-center md:flex-row md:justify-between md:w-full h-auto ">
                  <h3 className="text-blue-70 text-xl font-bold">
                    {pkg.label}
                  </h3>
                  <div className="flex flex-col items-center md:flex-row">
                    <Badge
                      variant={"outline"}
                      className="px-3 w-fit mt-2 md:mt-0"
                    >
                      {pkg.price} € / <span className="ml-1 ">{pkg.unit}</span>
                    </Badge>
                  </div>
                </div>
                <Separator className="my-4" />
                <Card className="h-[400px] mb-2 p-3 relative">
                  <div
                    className="h-full w-full absolute top-0 left-0 bg-cover bg-center blur-xs drop-shadow-md rounded-md"
                    style={{ backgroundImage: `url('${pkg.img}')` }}
                  ></div>
                  {/* Other content goes here */}
                </Card>
                <div className="p-1  text-blue-70">
                  <p className="text-center md:text-left">
                    <strong className="">Description :</strong>{" "}
                    {pkg.description}
                  </p>
                </div>
              </div>
              <div>
                <strong className="p-1  text-blue-70">
                  Additional Features :{" "}
                </strong>

                <Accordion type="single" collapsible className="w-full">
                  {pkg.features.map((feature, i) => (
                    <AccordionItem value={`item-${i}`}>
                      <AccordionTrigger className="p-1 font-bold text-sm text-blue-70">
                        <div className="flex flex-row items-center justify-between w-full">
                          <h3>{feature.feature}</h3>
                          <Badge
                            variant={"default"}
                            className="px-3 w-fit mt-2 md:mt-0 min-w-fit text-white bg-blue-70 rounded-full"
                          >
                            {feature.price}
                          </Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-1 text-blue-70 text-xs">
                        {feature.description}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default packages;
