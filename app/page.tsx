import About from "@/components/About";
import Blogs from "@/components/Blogs";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Work from "@/components/Work";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Work />
      <Testimonials />
      <Services />
      <Blogs />
    </>
  );
}
