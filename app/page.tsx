import Navbar from "@/component/navbar"
import Image from "next/image";
import Testimonials from "@/component/testimonal";
import Price from "@/component/price";
import FAQ from "@/component/faq";
import Footer from "@/component/Footer";
import Gallery from "@/component/Gallery";
import Template from "@/component/template";
import Features from "@/component/features";
import About from "@/component/about";
import Herosection from "@/component/herosection";


export default function Home() {
  return (
    <div className=" bg-gray-50 no-scrollbar">
      <Navbar />
      <Herosection></Herosection>
      <About></About>
      <Features></Features>
      <Gallery></Gallery>
      <Template></Template>
      <Testimonials></Testimonials>
      <Price></Price>
      <FAQ></FAQ>
      <Footer></Footer>
    </div>
  );
}
