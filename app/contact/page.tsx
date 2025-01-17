"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { StaticGoogleMap, Marker, Path } from "react-static-google-map";

const api_key_maps = "AIzaSyAFpqjkXRHWEaewAl1_6JyJE9sdRme9Tx0";

const Contact = () => {
  return (
    <Card className="flex flex-col  items-center justify-between gap-4 pb-5 text-blue-70 pt-4">
      <h1 className="bold-52 lg:bold-64 mb-2  tracking-tighter text-blue-70 xl:max-w-[32.5rem]">
        Contact Us
      </h1>
      <p className=" text-center text-blue-70">
        Ready to ride the waves with Bay Chaser ? Contact us to get all the info
        you need for your next surf adventure !
      </p>

      <Separator className="my-4" />
      <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
        <div className="flex flex-col items-center justify-between ">
          <div className="grid grid-cols-3">
            <strong>Phone : </strong>
            <div className="col-span-2">+212 7 01 36 49 78</div>
            <strong>Email :</strong>
            <div className="col-span-2">baychaiser.club@gmail.com</div>
            <strong>Address :</strong>
            <div className="col-span-2"> Imsouane, Morocco North of Africa</div>
          </div>
          {/* <Separator className="my-4" /> */}

          <iframe
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17144.898768694077!2d-9.7860718!3d30.8273494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb25e7d752b20eb%3A0x1598a7f8cccd6362!2sImsouane!5e0!3m2!1sen!2s!4v1644355918954!5m2!1sen!2s&z=100"
            aria-hidden="true"
            className="w-full h-full rounded-md mt-2"
            title="Google Map"
          />
        </div>
        <div className="container grid gap-4 py-4 w-full h-full">
          <div className="grid grid-cols-1 md:grid-cols-3 justify-between w-full items-center gap-4">
            <div className="w-full items-center gap-4">
              <Label htmlFor="FullName" className="text-right">
                Full Name
              </Label>
              <Input id="FullName" placeholder="Full Name" className="" />
            </div>
            <div className="w-full items-center gap-4">
              <Label htmlFor="Phone" className="text-right">
                Phone Number
              </Label>
              <Input id="Phone" placeholder="Phone Number" className="" />
            </div>
            <div className="w-full items-center gap-4">
              <Label htmlFor="Email" className="text-right">
                Email
              </Label>
              <Input id="Email" placeholder="Email" className="" />
            </div>
          </div>
          <div className="items-center gap-4">
            <Label htmlFor="Message" className="text-right">
              Message
            </Label>
            <Textarea
              id="Message"
              className=""
              style={{ resize: "none", height: "100px" }}
              placeholder="Message"
            />
          </div>
          <Button className="bg-blue-70">Send</Button>
        </div>
      </div>
    </Card>
  );
};

export default Contact;
