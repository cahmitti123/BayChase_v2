// /app/components/sections/Form.tsx

"use client";

import * as React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";

const formSchema = z.object({
  FullName: z.string().min(3, {
    message: "The Name Must Be At Least 3 Characters",
  }),
  Email: z.string().email(),
  Country: z.string(),
  City: z.string(),
  Photographer: z.string(),
  PhoneNumber: z.string(),
  Package: z.string(),
  SurfedBefore: z.string(),
});

export function ApplyForm() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [countries, setCountries] = React.useState([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      FullName: "",
      Email: "",
      Country: "",
      City: "",
      Photographer: "",
      PhoneNumber: "",
      Package: "",
      SurfedBefore: "",
    },
  });

  // Uks$$C_Dh47Qz49
  // NGchOTDvT/u8580xhp09cA==B1TIqAQVouJAa7nq

  React.useEffect(() => {
    // Fetch country data
    axios.get("https://restcountries.com/v3.1/all")
      .then((response) => {
        const countryOptions = response.data.map((country: any) => ({
          label: country.name.common,
          value: country.name.common,
        }));
        setCountries(countryOptions);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  const handleCountryChange = (selectedOption: any) => {
    form.setValue("Country", selectedOption.value);
  };

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    const data = {
      FullName: values.FullName,
      PhoneNumber: values.PhoneNumber,
      Email: values.Email,
      Country: values.Country,
      City: values.City,
      Photographer: values.Photographer === 'Yes' ? true : false,
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

      console.log("Form submitted successfully!");
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section id="booking">
      <div
        className="w-full md:grid-cols-1 xl:container overflow-hidden items-center  xl:my-5
    "
      >
        <Card className="w-full h-full lg:w-550 lg:h-870 text-blue-70">
          <CardHeader>
            <CardTitle>Book Now !</CardTitle>
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
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country</FormLabel>
                      <FormControl>
                        <Select onValueChange={(value) => handleCountryChange(value)}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel className="text-blue-70">Countries</SelectLabel>
                              {countries.map((country, index) => (
                                <SelectItem key={index} value={country.value} className="text-blue-70">
                                  {country.label}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="City"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input placeholder="City" type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
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

                <Button
                  type="submit"
                  className={`w-full mt-4 btn_dark xl:col-span-2 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? 'Submitting...' : 'Submit'}
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
