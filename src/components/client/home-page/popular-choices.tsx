import CardRoom from "../../card-room";
import { Button } from "../../ui/button";

const PopularChoices = () => {
  return (
    <div className="container mx-auto px-4 mt-16">
      <div className="flex justify-center flex-col items-center">
        <div className="flex items-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Favorit Lainnya
          </h2>
          <span className="text-4xl">😎</span>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mt-4">
          Kamar-kamar ini paling banyak dipilih karena fasilitas lengkap dan
          harganya yang terjangkau.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-4 lg:gap-y-0 gap-y-4 mt-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <CardRoom key={index} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Button variant={"outline"}>Lihat Semua</Button>
      </div>
    </div>
  );
};

export default PopularChoices;
