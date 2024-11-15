import { main_bg } from "@/assets";
import About from "@/components/About";
import Blogs from "@/components/Blogs";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Work from "@/components/Work";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${main_bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom left",
        }}
      >
        <Header />
        <HeroSection />
        <About />
        <Work />
        <Testimonials />
      </div>

      <Services />
      <Blogs />
    </>
  );
}
