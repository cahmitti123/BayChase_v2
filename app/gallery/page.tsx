// app/gallery/page.tsx

import { getLocalImages } from "@/lib/fetchImages";
import { Separator } from "@/components/ui/separator";
import ImgContainer from "@/components/cutsom/ImageContainer";

export async function Gallery() {
  // const url = "https://api.pexels.com/v1/search?query=surf";
  const images = await getLocalImages();
  if (!images) return <h2>No Images Found</h2>;
  return (
    <div className="flex flex-col items-center">
      <Separator className="my-4" />
      <h1 className="bold-52 lg:bold-64 mb-5  tracking-tighter text-blue-70 xl:max-w-[32.5rem]">
        Gallery
      </h1>
      <p className="font-semibold text-blue-70">
        Here we will put some long ass text to describe this page matter of
        filling some space as we have a lot of empty space bla bla bla.
      </p>
      <Separator className="my-4" />
      <section className="container px-2 my-3 grid gap-2 grid-cols-gallery">
        {images.map((photo) => (
          <ImgContainer
            id={photo.id}
            nextSrc={photo?.nextSrc}
            previousSrc={photo?.previousSrc}
            src={photo.src}
            alt={photo.alt}
          />
        ))}
      </section>
    </div>
  );
}

const page = () => {
  return <Gallery />;
};

export default page;
