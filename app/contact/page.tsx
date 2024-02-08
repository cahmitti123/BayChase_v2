import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <Card className="flex flex-col items-center justify-between gap-4 mb-24">
      <Separator className="my-4" />
      <h1 className="bold-52 lg:bold-64 mb-5  tracking-tighter text-blue-70 xl:max-w-[32.5rem]">
        Contact Us
      </h1>
      <p className=" text-center text-blue-70">
        Here are the packages and the surf sessions we offer, please keep in
        mind
      </p>

      <Separator className="my-4" />
      <div className="container grid gap-4 py-4">
        <div className="flex fex-col justify-between w-full items-center gap-4">
          <div className="w-full items-center gap-4">
            <Label htmlFor="FullName" className="text-right">
              Full Name
            </Label>
            <Input id="FullName" defaultValue="Full Name" className="" />
          </div>
          <div className="w-full items-center gap-4">
            <Label htmlFor="Email" className="text-right">
              Email
            </Label>
            <Input id="Email" defaultValue="Email" className="" />
          </div>
        </div>
        <div className="items-center gap-4">
          <Label htmlFor="Message" className="text-right">
            Message
          </Label>
          <Textarea id="Message" defaultValue="Message" className="" />
        </div>
        <Button>Send</Button>
      </div>
    </Card>
  );
};

export default Contact;
