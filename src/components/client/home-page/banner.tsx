import Image from "next/image";
import ButtonGradient from "../../button-gradient";
import { Button } from "../../ui/button";

const Banner = () => {
  return (
    <div>
      <div className="relative h-[100vh] w-full overflow-hidden">
        {/* Gambar Banner */}
        <Image src={"/banner.jpg"} alt="banner image" fill objectFit="cover" />

        {/* Gradasi Hitam sebagai Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        {/* Kotak Teks dan CTA (dengan posisi absolut di atas gradasi) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white space-y-4 p-4">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            Kost Nyaman, Mulai 50k Saja!
          </h1>
          <p className="mt-2 text-lg md:text-xl px-36">
            Cari tempat menginap harian, mingguan, atau bulanan? Kami sediakan
            kamar bersih, aman, dan nyaman dengan harga paling fleksibel.
            Dapatkan fasilitas lengkap seperti WiFi, dapur, dan parkir luas.
          </p>
          <div className="flex space-x-3">
            <ButtonGradient>Lihat Harga Lengkap</ButtonGradient>
            <Button variant={"outline"} className="text-slate-900">
              Hubungi via WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
