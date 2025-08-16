import {
  ArrowRight,
  Bath,
  Bed,
  Car,
  Cctv,
  DoorOpen,
  Heart,
  MapPin,
  ParkingCircle,
  Play,
  Search,
  Wifi,
} from "lucide-react";
import { Button } from "../../ui/button";
import { Badge } from "../../ui/badge";
import Image from "next/image";
import { NumberTicker } from "../../magicui/number-ticker";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="relative container mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="lg:space-y-8">
            <div className="space-y-6 w-full">
              <div className="flex justify-center lg:justify-start">
                <div className="inline-flex items-center px-4 py-2 bg-emerald-100/80 backdrop-blur-sm rounded-full border border-emerald-200/50">
                  <div className="text-emerald-700 w-auto font-medium text-sm">
                    🏆 #1 Tempat Kos di BTN
                  </div>
                </div>
              </div>

              <h1 className="font-bold text-6xl leading-tight bg-gradient-to-r text-center lg:text-start from-gray-900 via-emerald-800 to-gray-900 bg-clip-text text-transparent">
                Rasakan Kenyamanan
                <span className="block text-emerald-600">Seperti Dirumah</span>
              </h1>

              <p className="text-xl lg:text-start text-center text-gray-600 leading-relaxed">
                Cari tempat menginap harian, mingguan, atau bulanan? Kami
                sediakan kamar bersih, aman, dan nyaman dengan harga paling
                fleksibel. Dapatkan fasilitas lengkap seperti WiFi, dapur, dan
                parkir luas.
              </p>
            </div>

            <div className="flex flex-col justify-center lg:justify-start sm:flex-row gap-4 mt-4 lg:mt-0">
              <Button
                size="lg"
                className="bg-gradient-to-r py-6 from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 text-lg shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 group cursor-pointer"
              >
                Lihat Kamar
                <DoorOpen className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg border-2 border-gray-200 hover:border-emerald-200 hover:bg-emerald-50 group cursor-pointer"
              >
                <Image
                  src={"/wa.png"}
                  alt="wa icon"
                  width={20}
                  height={20}
                  className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform"
                />
                Hubungi Admin
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start space-x-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">
                  <NumberTicker value={6} className="text-emerald-600" />+
                </div>
                <div className="text-sm text-gray-600">Pilihan Kamar</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">
                  <NumberTicker value={98} className="text-emerald-600" />%
                </div>
                <div className="text-sm text-gray-600">Pelanggan Puas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">
                  <NumberTicker value={15} className="text-emerald-600" />+
                </div>
                <div className="text-sm text-gray-600">
                  Terpercaya & Terjaga
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Image Section */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Property Image */}
              <div className="relative bg-white/20 backdrop-blur-sm rounded-3xl p-6 border border-white/30 shadow-2xl shadow-emerald-500/10">
                <div className="w-full h-[500px]">
                  <Image
                    src="/banner.jpg"
                    alt="Luxury modern home"
                    className="object-cover rounded-2xl"
                    fill
                  />
                </div>

                {/* Floating Property Card */}
                <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                        Featured
                      </Badge>
                      <Heart className="w-5 h-5 text-gray-400 hover:text-emerald-500 cursor-pointer transition-colors" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-emerald-600">
                        Mulai 50k
                      </div>
                      <div className="text-gray-600 font-medium">
                        Nyaman, Aman dan Fasilitas Lengkap
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        BTN Teluk Mulus
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Wifi className="w-4 h-4 mr-1" />
                        Free Wifi
                      </div>
                      <div className="flex items-center">
                        <Cctv className="w-4 h-4 mr-1" />
                        Dilengkapi CCTV
                      </div>
                      <div className="flex items-center">
                        <Car className="w-4 h-4 mr-1" />
                        Tempat Parkir Luas
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-emerald-500 text-white rounded-2xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">4.9</div>
                  <div className="text-xs opacity-90">Rating</div>
                </div>
              </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-emerald-200/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-emerald-300/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
