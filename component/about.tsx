export default function about(){
    return(
        <div className=" text-center ">
            <h2 className="mt-10 text-lg font-bold text-[#a8a8ab]">ABOUT</h2>
            <p className="text-black text-xl font-bold mt-5 ">Discover the Future of Online Shopping <br/> A Marketplace Built for You </p>
            <p className="text-md font-medium text-[#8d8d90e7] mb-10" >Step Into the Next Level Marketplace - where innovation meets shopping.</p>

            <div className="my-5 mx-25 text-black flex flex-col md:flex-row gap-10 lg:gap-15">
            <div className="bg-[#e5e5e8] rounded-2xl  flex flex-col items-center pb-3 hover:scale-110 transform transition duration-300">
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
            <div className="bg-[#e5e5e8] rounded-2xl  flex flex-col items-center pb-3 hover:scale-110 transform transition duration-300">
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
            <div className="bg-[#e5e5e8] rounded-2xl  flex flex-col items-center pb-3 hover:scale-110 transform transition duration-300">
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
    )
}