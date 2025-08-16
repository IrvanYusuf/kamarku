"use client";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Heart, Star } from "lucide-react";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { PATHS } from "@/lib/paths";

const facilites = [
  "Wifi",
  "CCTV",
  "Kasur",
  "Kamar Mandi Shower",
  "Lemari",
  "Kulkas",
];

const CardRoom = () => {
  return (
    <Card className="group transition-all duration-500 overflow-hidden border-0 bg-white p-0">
      <CardContent className="p-0">
        <div className="relative overflow-hidden mb-0 rounded-2xl hover:rounded-2xl">
          <Image
            src={"/kamar1.jpg"}
            alt={"alt"}
            width={400}
            height={300}
            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700 rounded-2xl hover:rounded-2xl"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <div className="flex space-x-2">
                <Button
                  size="sm"
                  variant="secondary"
                  className="bg-white/20 backdrop-blur-sm border-0 text-white hover:bg-white/30"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <Heart className={`w-4 h-4`} />
                </Button>
              </div>
            </div>
          </div>

          {/* Category Badge */}
          <div className="absolute top-2 left-4">
            <Badge
              variant="secondary"
              className="bg-white/90 backdrop-blur-sm text-gray-700 border-0"
            >
              Favorit Mahasiswa
            </Badge>
          </div>

          <div className="absolute top-2 right-4">
            <Badge className="bg-red-500 text-white border-0">-20%</Badge>
          </div>
        </div>

        <div className="px-6 py-4 space-y-4 mt-0">
          <div className="space-y-3">
            <Link href={PATHS.roomDetail("12akokaokao")}>
              <h3 className="font-bold text-lg text-gray-900 group-hover:text-emerald-600 transition-colors line-clamp-1">
                Kamar AC
              </h3>
            </Link>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium text-gray-700">4.5</span>
                <span className="text-xs text-gray-500">(400)</span>
              </div>
            </div>

            {/* Facilities */}
            <div className="flex flex-wrap gap-2">
              {facilites.map((facility, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-xs border-emerald-200 text-emerald-700 bg-emerald-50"
                >
                  {facility}
                </Badge>
              ))}
              <Badge
                variant="outline"
                className="text-xs border-emerald-200 text-emerald-700 bg-emerald-50"
              >
                +6 Lainnya
              </Badge>
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-2">
              <span className="font-medium text-sm text-gray-600">
                Mulai dari <span className="line-through">Rp1.000.000</span>
              </span>
              <span className="font-medium text-gray-600">/bulan</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-lg text-gray-900">Rp850.000</span>
              <span className="font-medium text-gray-600">/bulan</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardRoom;
