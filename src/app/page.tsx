import FeaturedCourses from "@/components/FeaturedCourses.component";
import HeroSection from "@/components/HeroSection.component";
import MusicSchoolTestimonials from "@/components/TestimonialCard.component";
import UpcomingWebinars from "@/components/UpcomingWebinars.component";
import WhyChooseUs from "@/components/WhyChooseUs.component";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicSchoolTestimonials />
      <UpcomingWebinars />
    </main>
  );
}
