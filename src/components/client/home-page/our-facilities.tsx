"use client";
import { Marquee } from "@/components/magicui/marquee";

import { Badge } from "../../ui/badge";
import { facilitiesData } from "@/lib/dummy-data";

const firstRow = facilitiesData.slice(0, facilitiesData.length / 2);
const secondRow = facilitiesData.slice(facilitiesData.length / 2);
const OurFacilities = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-4 py-2 bg-emerald-100/80 backdrop-blur-sm rounded-full border border-emerald-200/50 mb-6">
          <span className="text-emerald-700 font-medium text-sm">
            ✨ Fasilitas Lengkap
          </span>
        </div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
          Fasilitas Yang Kami Tawarkan
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Dari WiFi super cepat hingga dapur bersama, semua fasilitas ini
          dirancang untuk menunjang aktivitas dan kenyamanan Anda sehari-hari.
        </p>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review, index) => {
            const Icon = review.icon;
            return (
              <Badge
                key={index}
                className="bg-emerald-100/80 backdrop-blur-sm rounded-full border border-emerald-200/50 text-emerald-700 py-1 px-3"
              >
                <Icon />
                {review.name}
              </Badge>
            );
          })}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review, index) => {
            const Icon = review.icon;
            return (
              <Badge
                key={index}
                className="bg-emerald-100/80 backdrop-blur-sm rounded-full border border-emerald-200/50 text-emerald-700 py-1 px-3"
              >
                <Icon />
                {review.name}
              </Badge>
            );
          })}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </div>
  );
};

export default OurFacilities;
