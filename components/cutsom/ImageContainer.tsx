"use client";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type LocalPhoto = {
  src: string;
  alt: string;
  id: string;
  previousSrc?: string;
  nextSrc?: string;
};

export default function ImgContainer(image: LocalPhoto): JSX.Element {
  const previousSrc = image.previousSrc;
  const nextSrc = image.nextSrc;
  const handleClick = () => {
    console.log(image.src);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          key={image.alt}
          className="h-64 bg-gray-20 rounded-xl relative hover:opacity-70 transition-all ease-in-out duration-700 cursor-pointer"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill={true}
            className="object-cover rounded-xl "
          />
        </div>
      </DialogTrigger>
      <DialogContent className="flex flex-col h-screen my-4 w-full bg-black bg-opacity-10 border-none backdrop-blur-sm rounded-sm">
        <div className="w-full">
          <Image
            src={image.src}
            alt={image.alt}
            fill={true}
            className="object-contain w-full"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
