import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";

const ImageDetail = () => {
  return (
    <div>
      <div className="aspect-video w-full relative rounded-2xl">
        <Image
          src={"/detail-kamar.jpg"}
          alt="detail image kamar"
          fill
          className="rounded-2xl"
        />
      </div>

      <div className="flex overflow-x-auto mt-4 lg:hidden gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            className="flex-none w-[33%] md:w-1/3 aspect-video relative rounded-2xl"
            key={index}
          >
            <Image
              src={"/detail-kamar.jpg"}
              alt="detail image kamar"
              fill
              className="rounded-2xl"
            />
          </div>
        ))}
      </div>

      <ScrollArea className="mt-4 lg:flex hidden">
        <div className="flex w-max space-x-4 px-4 py-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="w-[200px] aspect-video relative rounded-2xl flex-none"
            >
              <Image
                src={"/detail-kamar.jpg"}
                alt="detail image kamar"
                fill
                className="rounded-2xl object-cover"
              />
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="h-2" />
      </ScrollArea>
    </div>
  );
};

export default ImageDetail;
