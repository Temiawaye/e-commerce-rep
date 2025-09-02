export default function Gallery(){
    return(
        <div>
            <h2 className="text-black text-3xl font-bold text-center my-10">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-1 mx-10">
              <div className="md:row-span-2 bg-amber-400 relative md:h-[500px]">
                {/* <Image
                  src={Img11}
                  alt="Gallery image"
                  // layout="responsive"
                  fill
                /> */}1
              </div>

              <div className="md:col-span-2 bg-blue-400 relative">
                {/* <Image
                  src={Img2}
                  alt="Gallery image"
                  // layout="responsive"
                  fill
                />  */}
              </div>

              <div className="bg-teal-400">
                3
              </div>

              <div className="md:row-span-2 bg-indigo-400 relative md:h-[500px]">
                {/* <Image
                  src={Img4}
                  alt="Gallery image"
                  // layout="responsive"
                  fill
                /> */}
              </div>
                
              <div className="bg-red-400 relative">
                {/* <Image
                  src={Img3}
                  alt="Gallery image"
                  // layout="responsive"
                  fill
                /> */}
              </div>
                
              <div className="bg-orange-400">
                6
              </div>
            </div>
            {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-1 mx-10">
              <img src="https://placehold.co/350x250" alt="" className="md:row-span-2 md:h-[500px]" />
              <img src="https://placehold.co/350x250" alt="" className="md:col-span-2 md:" />
              <img src="https://placehold.co/350x250" alt="" className="" />
              <img src="https://placehold.co/350x250" alt="" className="md:row-span-2 md:h-[500px]" />
              <img src="https://placehold.co/350x250" alt="" className="" />
              <img src="https://placehold.co/350x250" alt="" className="" />
            </div> */}
        </div>
    )
}