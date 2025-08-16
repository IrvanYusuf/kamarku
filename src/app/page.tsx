import HeroSection from "@/components/client/home-page/hero-section";
import OurFacilities from "@/components/client/home-page/our-facilities";
import PopularChoices from "@/components/client/home-page/popular-choices";
import StudentChoices from "@/components/client/home-page/student-choices";
import WhyChooseUs from "@/components/client/home-page/why-choose-us";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhyChooseUs />
      <OurFacilities />
      <StudentChoices />
      <PopularChoices />
    </div>
  );
}
