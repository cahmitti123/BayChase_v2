import { getLocalImages } from "@/lib/fetchImages";
import { Separator } from "@/components/ui/separator";
import ImgContainer from "@/components/cutsom/ImageContainer";

export default async function Gallery() {
  // const url = "https://api.pexels.com/v1/search?query=surf";
  const images = await getLocalImages();
  if (!images) return <h2>No Images Found</h2>;
  return (
    <div className="flex flex-col items-center">
      <Separator className="my-4" />
      <h1 className="bold-52 lg:bold-64 mb-5  tracking-tighter text-blue-70 xl:max-w-[32.5rem]">
        Gallery
      </h1>
      <p className="font-semibold container text-center text-blue-70">
        Dive into our gallery, where every image tells a story of extraordinary
        surf tours. Let the visuals inspire your next adventure with BayChaser.
        Discover the allure of Morocco's hidden waves through our lens, inviting
        you to join a surfing experience that transcends the ordinary.
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
