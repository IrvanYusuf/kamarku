import CardRoom from "../../card-room";

const StudentChoices = () => {
  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="flex justify-center flex-col items-center">
        <div className="flex items-center">
          <h2 className="text-4xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Favorit Mahasiswa
          </h2>
          <span className="text-4xl lg:text-4xl">😍</span>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mt-4">
          Kamar dengan harga terjangkau dan fasilitas lengkap. Pilihan terbaik
          untuk belajar, istirahat, dan berkreasi.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-4 lg:gap-y-0 gap-y-4 mt-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <CardRoom key={index} />
        ))}
      </div>
    </div>
  );
};

export default StudentChoices;
