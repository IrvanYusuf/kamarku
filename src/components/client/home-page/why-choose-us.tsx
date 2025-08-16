import { Award, Clock, Shield, Users } from "lucide-react";
import { Card, CardContent } from "../../ui/card";

const whyChooseUsDatas = [
  {
    icon: Shield,
    title: "Aman & Terjaga",
    description:
      "Keamanan terjamin dengan CCTV 24 jam di area publik dan kunci akses mandiri untuk setiap kamar.",
    color: "bg-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Award,
    title: "Berpengalaman",
    description:
      "Dengan pengalaman lebih dari 5 tahun, kami berkomitmen untuk menyediakan tempat tinggal yang bersih, nyaman, dan terawat.",
    color: "bg-emerald-500",
    bgColor: "bg-emerald-50",
  },
  {
    icon: Users,
    title: "Pelayanan Responsif",
    description:
      "Kami siap membantu Anda dengan cepat dan ramah, memastikan setiap kebutuhan atau pertanyaan dapat terpenuhi.",
    color: "bg-purple-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: Clock,
    title: "Proses Mudah & Cepat",
    description:
      "Proses sewa yang sederhana dan tidak berbelit. Cukup hubungi kami, dan Anda bisa langsung menempati kamar.",
    color: "bg-orange-500",
    bgColor: "bg-orange-50",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100/80 backdrop-blur-sm rounded-full border border-emerald-200/50 mb-6">
            <span className="text-emerald-700 font-medium text-sm">
              ✨ Keunggulan Kami
            </span>
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Mengapa Memilih Kami?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami memberikan layanan terbaik dengan pengalaman bertahun-tahun
            dalam industri properti premium
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {whyChooseUsDatas.map((advantage, index) => (
            <Card
              key={index}
              className="group transition-all duration-500 border-0 rounded-none"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-16 h-16 ${advantage.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <advantage.icon
                    className={`w-8 h-8 ${advantage.color.replace(
                      "bg-",
                      "text-"
                    )}`}
                  />
                </div>
                <h3 className="font-bold text-xl mb-4 text-gray-900">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
