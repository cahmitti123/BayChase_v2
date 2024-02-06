"use client";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { PACKAGES } from "@/constants/content";
import { Separator } from "@/components/ui/separator";

const packages = () => {
  return (
    <div className="mx-3 md:container flex flex-col items-center gap-2 mb-20 ">
      <Separator className="my-4" />
      <h1 className="bold-52 lg:bold-64 mb-5  tracking-tighter text-blue-70 xl:max-w-[32.5rem]">
        Our Packages
      </h1>
      <p className="font-semibold text-blue-70">
        Here we will put some long ass text to describe this page matter of
        filling some space as we have a lot of empty space bla bla bla.
      </p>
      <Separator className="my-4" />
      <Card className="md:p-4 drop-shadow-2xl bg-gradient-to-br from-slate-100 to-slate-200 bg-gradient-opacity-50 backdrop-blur-md">
        <div className="grid grid-cols-1 xl:grid-cols-3 w-full h-full gap-4">
          {PACKAGES.map((pkg, index) => (
            <Card
              key={index}
              className={`flex flex-col p-3 w-full h-full bg-feature-bg bg-cover bg-no-repeat drop-shadow-md  ${
                pkg.type === "Guiding" ? "col-span-1 xl:col-span-3 " : ""
              }`}
            >
              <div className="flex flex-col items-center md:flex-row md:justify-between md:w-full h-auto ">
                <h3 className="text-blue-70 text-xl font-bold">{pkg.label}</h3>
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
              <Card className="h-[200px] mb-2 p-3 relative">
                <div
                  className="h-full w-full absolute top-0 left-0 bg-cover bg-center blur-xs drop-shadow-md rounded-md"
                  style={{ backgroundImage: `url('${pkg.img}')` }}
                ></div>
                {/* Other content goes here */}
              </Card>
              <div className="p-1  text-blue-70">
                <p className="text-center md:text-left">
                  <strong className="">Description :</strong> {pkg.description}
                </p>
              </div>
              {/* <strong className="p-1  text-blue-70">Included : </strong>
            <ul>
              {pkg.features.map((feature, i) => (
                <li key={i}> - {feature}</li>
              ))}
            </ul> */}
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default packages;
