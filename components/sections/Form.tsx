"use client";

import * as React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
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

import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

const formSchema = z.object({
  FullName: z.string().min(3, {
    message: "The Name Must Be At Least 3 Characters",
  }),
  Email: z.string(),
  Country: z.string(),
  City: z.string(),
  BoardRental: z.boolean(),
  PhoneNumber: z.string(),
  Package: z.string(),
});

export function ApplyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      FullName: "",
      Email: "",
      Country: "",
      City: "",
      PhoneNumber: "",
      BoardRental: false,
      Package: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // Transform the form values into the expected data structure
      const data = {
        FullName: values.FullName,
        PhoneNumber: values.PhoneNumber,
        Email: values.Email,
        Country: values.Country,
        City: values.City,
        BoardRental: values.BoardRental,
        Package: values.Package,
      };

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwlXfZ7JVlL1NXy6b5bolNhxqFqEV5CZ5wjL-C8LUVElsPYprP-g4w6sWJ8S-LjDWzPFw/exec",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log("Form submitted successfully");
        form.reset();
      } else {
        console.error("Error submitting form:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div
      className="w-full md:grid-cols-1 xl:container overflow-hidden items-center xl:my-5
    "
    >
      <Card className="w-full h-full lg:w-550 lg:h-870 text-blue-70">
        <CardHeader>
          <CardTitle>Book Now</CardTitle>
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
                        <Input placeholder="Full Name" type="text" {...field} />
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
                        <Input placeholder="Package" type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="BoardRental"
                render={({ field }) => {
                  return (
                    <FormItem className="flex items-center  justify-between gap-5">
                      <FormLabel>Board Rental</FormLabel>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
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
  );
}
