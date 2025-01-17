"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/constants";
import { LuUser2, LuMenu } from "react-icons/lu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "./ui/separator";

import { PACKAGES, FEATURES } from "@/constants/content";

import { GiSurferVan, GiWaveSurfer, GiSurfBoard } from "react-icons/gi";
import { Card } from "./ui/card";
import Button from "./common/Button";
import Image from "next/image";

export function Navbar_v2() {
  return (
    <div className="flex flex-row justify-between container items-stretch pt-2">
      <Link href="/">
        <Image
          src="/logo_v2.svg"
          alt="BayChaser"
          width={120}
          height={120}
          sizes="100vw"
          className=" h-auto -my-6"
        />
      </Link>
      <div className="hidden lg:flex">
        <Menu />
      </div>
      <div className="inline-block cursor-pointer lg:hidden">
        <MobileMenu />
      </div>
      <div className="lg:flexCenter hidden">
        <Link href="/#booking">
          <Button
            type="button"
            title="Book Now !"
            // icon_start={<LuUser2 size={20} />}
            variant="btn_dark"
          />
        </Link>
      </div>
    </div>
  );
}

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <LuMenu size={32} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <div className="py-4">
            <Link href="/#booking">
              <Button
                type="button"
                title="Book Now !"
                variant="btn_dark_mobile"
              />
            </Link>
          </div>
          <Separator className="my-4" />
          <SheetDescription className="pt-4">
            <ul className="h-full space-y-2">
              {NAV_LINKS.map((link) => (
                <Link
                  href={link.href}
                  key={link.key}
                  className="regular-18 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                >
                  {link.label}
                </Link>
              ))}
            </ul>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export function Menu() {
  const guidingPackage = PACKAGES.find((pkg) => pkg.type === "Guiding");
  const Packages = PACKAGES;
  return (
    <NavigationMenu className="z-50">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/packages">
            <NavigationMenuTrigger>Packages</NavigationMenuTrigger>
          </Link>
          <NavigationMenuContent>
            <ul className="grid gap-1 p-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-1">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col transition-all ease-in-out  duration-800 justify-end opacity-70 hover:opacity-100 rounded-md p-6 no-underline outline-none bg-gradient-to-b from-purple-500 to-pink-500 focus:shadow-md text-white hover:to-pink-400 "
                    href={guidingPackage?.href}
                  >
                    {/* <strong className="text-lg position-absolute justify-start">
                        Guiding
                      </strong> */}
                    <GiWaveSurfer className="h-12 w-12 rounded-xl" />
                    <strong className="mb-2 mt-2 text-lg leading-5">
                      {guidingPackage?.label}
                    </strong>
                    <p className="text-xs leading-tight text-gray-100">
                      {guidingPackage?.description
                        ? guidingPackage?.description.slice(0, 100)
                        : ""}
                      {guidingPackage?.description &&
                      guidingPackage?.description.length > 100
                        ? " ..."
                        : ""}
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <Card className="p-1 flex flex-col">
                {/* <strong className="text-gray-50 ml-3 text-lg">Teaching</strong> */}
                {Packages.map((pkg) =>
                  pkg.type === "Teaching" ? (
                    <ListItem key={pkg.label} href={pkg.href} title={pkg.label}>
                      {pkg.description.slice(0, 70)}
                      {pkg.description.length > 70 ? " ..." : ""}
                    </ListItem>
                  ) : null
                )}
              </Card>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/gallery" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Gallery
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all ease-in-out  duration-800 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-bold text-blue-70 leading-none">
            {title}
          </div>
          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
