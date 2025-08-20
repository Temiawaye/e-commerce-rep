import Navbar from "@/component/navbar"

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

    </div>
  );
}
