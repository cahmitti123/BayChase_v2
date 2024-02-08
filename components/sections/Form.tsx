// /app/components/sections/Form.tsx

"use client";

import * as React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { PACKAGES } from "@/constants/content";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

const formSchema = z.object({
  FullName: z.string().min(3, {
    message: "The Name Must Be At Least 3 Characters",
  }),
  Email: z.string().email(),
  Country: z.string(),
  City: z.string(),
  Photographer: z.boolean(),
  PhoneNumber: z.string(),
  Package: z.string(),
  SurfedBefore: z.string(),
});

export function ApplyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      FullName: "",
      Email: "",
      Country: "",
      City: "",
      Photographer: false,
      PhoneNumber: "",
      Package: "",
      SurfedBefore: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    const data = {
      FullName: values.FullName,
      PhoneNumber: values.PhoneNumber,
      Email: values.Email,
      Country: values.Country,
      City: values.City,
      Photographer: values.Photographer,
      Package: values.Package,
    };
    try {
      const response = await fetch("api/Reservation", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) throw new Error(await response.text());
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    // console.log(data);
  };

  return (
    <section id="booking">
      <div
        className="w-full md:grid-cols-1 xl:container overflow-hidden items-center xl:my-5
    "
      >
        <Card className="w-full h-full lg:w-550 lg:h-870 text-blue-70">
          <CardHeader>
            <CardTitle>Book Now!</CardTitle>
            <CardDescription>For An Amazing Tour</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="grid grid-cols-1 items-stretch xl:grid-cols-2 w-full md:max-w-md  gap-2 text-blue-70"
              >
                <FormField
                  control={form.control}
                  name="FullName"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Full Name"
                            type="text"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="PhoneNumber"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Phone Number"
                            type="tel"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="Email"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Email" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="Country"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Country</FormLabel>
                        <FormControl>
                          <Input placeholder="Country" type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="City"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input placeholder="City" type="text" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="Package"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Package</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange}>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select a package" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel className="text-blue-70">
                                  Packages
                                </SelectLabel>
                                {PACKAGES.map((pkg, index) => (
                                  <SelectItem
                                    key={index}
                                    value={pkg.label}
                                    className="text-blue-70"
                                  >
                                    {pkg.label}
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="SurfedBefore"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Surfed Before ?</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange}>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select an answer" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel className="text-blue-70">
                                  Packages
                                </SelectLabel>

                                <SelectItem
                                  value="Yes"
                                  className="text-blue-70"
                                >
                                  Yes
                                </SelectItem>
                                <SelectItem value="No" className="text-blue-70">
                                  No
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />

                <FormField
                  control={form.control}
                  name="Photographer"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Include Photographer ? </FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange}>
                            <SelectTrigger className="w-full ">
                              <SelectValue placeholder="Select an answer" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel className="text-blue-70">
                                  Photographer
                                </SelectLabel>

                                <SelectItem
                                  value="Yes"
                                  className="text-blue-70"
                                >
                                  Yes
                                </SelectItem>
                                <SelectItem value="No" className="text-blue-70">
                                  No
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />

                <Button type="submit" className="w-full btn_dark xl:col-span-2">
                  Submit
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
        {/* <BoardsCarousel /> */}
      </div>
    </section>
  );
}
