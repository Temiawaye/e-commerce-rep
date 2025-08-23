import Navbar from "@/component/navbar"
import { Settings } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-black font-cinzel md:text-5xl text-3xl text-center mt-10">Launch Your Own Store in <br/> Minutes</h1>

        <div className="flex gap-5 mt-3">
          <button className="bg-black text-white rounded-3xl px-4 py-2 text-sm ">Start Shoping</button>
          <button className="text-black border border-black rounded-3xl px-4 py-2 text-sm ">Explore Vendors</button>
        </div>
      </div>

      <div className=" flex flex-col md:grid grid-cols-3 grid-rows-3 gap-3 mx-5 mt-8">
        <div className="order-2 md:order-none">
          <img src="https://placehold.co/600x150" alt="" />
        </div>

        <div className="order-1 md:order-none row-span-3">
          <img src="https://placehold.co/600x480" alt="" />
        </div>

        <div className=" order-4 md:order-none ">
          <img src="https://placehold.co/600x150" alt="" />
        </div>

        <div className=" order-3 md:order-none row-span-2">
          <img src="https://placehold.co/600x300" alt="" />
        </div>

        <div className="order-5 md:order-none row-span-2">
          <img src="https://placehold.co/600x300" alt="" />
        </div>

      </div>

      {/* About Section */}
      <div className=" text-center ">
        <h2 className="mt-10 text-lg font-bold text-[#a8a8ab]">ABOUT</h2>
        <p className="text-black text-xl font-bold mt-5 ">Discover the Future of Online Shopping <br/> A Marketplace Built for You </p>
        <p className="text-md font-medium text-[#8d8d90e7] mb-10" >Step Into the Next Level Marketplace - where innovation meets shopping.</p>

        <div className="my-5 mx-25 text-black flex flex-col md:flex-row gap-10 lg:gap-15">
        <div className="bg-[#e5e5e8] rounded-2xl  flex flex-col items-center pb-3 hover:scale-110">
          <div>
            <img src="https://placehold.co/250x250" alt="" />
          </div>

          <div className="bg-[#A2A3B1] justify-items-start pl-3 w-full">
            <p>01</p>
          </div>
          
          <div className="mx-3">
            <p>Custom SEO Services</p>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          
        </div>
        <div className="bg-[#e5e5e8] rounded-2xl  flex flex-col items-center pb-3 hover:scale-110">
          <div>
            <img src="https://placehold.co/250x250" alt="" />
          </div>

          <div className="bg-[#A2A3B1] justify-items-start pl-3 w-full">
            <p>02</p>
          </div>
          
          <div className="mx-3">
            <p>Custom SEO Services</p>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          
        </div>
        <div className="bg-[#e5e5e8] rounded-2xl  flex flex-col items-center pb-3 hover:scale-110">
          <div>
            <img src="https://placehold.co/250x250" alt="" />
          </div>

          <div className="bg-[#A2A3B1] justify-items-start pl-3 w-full">
            <p>03</p>
          </div>
          
          <div className="mx-3">
            <p>Custom SEO Services</p>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          
        </div>
        </div>

      </div>

      {/* Features*/}
      <div className="text-black text-center mt-10">
       <h2 className="font-bold text-xl">Our Primary Features</h2>
       <p className="text-sm px-3 text-[#8d8d90e7]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolore<br/> culpa saepe laudantium,  ex illum? Deserunt ex maxime excepturi</p>

       <div className="flex flex-col md:flex-row md:flex-wrap gap-10 justify-center m-5 px-20">

        <div className=" flex flex-col items-center w-72 ">
          <Settings className="mb-3" size={60} />
          <p className="font-semibold text-xl">Effiency</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deserunt</p>
        </div>

        <div className=" flex flex-col items-center w-72 ">
          <Settings className="mb-3" size={60} />
          <p className="font-semibold text-xl">Effiency</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deserunt</p>
        </div>

        <div className=" flex flex-col items-center w-72">
          <Settings className="mb-3" size={60} />
          <p className="font-semibold text-xl">Effiency</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deserunt</p>
        </div>

        <div className=" flex flex-col items-center w-72">
          <Settings className="mb-3" size={60} />
          <p className="font-semibold text-xl">Effiency</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deserunt</p>
        </div>

        <div className=" flex flex-col items-center w-72">
          <Settings className="mb-3" size={60} />
          <p className="font-semibold text-xl">Effiency</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deserunt</p>
        </div>
        
        <div className=" flex flex-col items-center w-72">
          <Settings className="mb-3" size={60} />
          <p className="font-semibold text-xl">Effiency</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deserunt</p>
        </div>
        
       </div>

      </div>

      {/* Gallery */}
      <div>
        <h2 className="text-black text-3xl font-bold text-center my-10">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 mx-10">
          <img src="https://placehold.co/350x250" alt="" className="md:row-span-2 md:h-[500px]" />
          <img src="https://placehold.co/350x250" alt="" className="md:col-span-2 md:" />
          <img src="https://placehold.co/350x250" alt="" className="" />
          <img src="https://placehold.co/350x250" alt="" className="md:row-span-2 md:h-[500px]" />
          <img src="https://placehold.co/350x250" alt="" className="" />
          <img src="https://placehold.co/350x250" alt="" className="" />
        </div>
      </div>

      

    </div>
  );
}
