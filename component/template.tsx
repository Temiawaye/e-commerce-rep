export default function template(){
    return(
        <div className="my-10 mx-10 flex flex-col md:items-center">
            <div className="flex flex-col gap-3 text-center mb-10">
              <h2 className="text-black font-semibold text-2xl">Get your own custom built e-commerce store <br /> in a flash</h2>
              <p>Get it built in few hours</p>
            </div>

        
            <div className="flex md:flex-col md:items-center ">
              {/* line/steps */}
              <div className=" px-10 my-5">
                <div className="linesix linesixsm bg-[#8d8d90e7] relative text-center">
                  <div className="sectionsix sectionsixsm p1 bg-blue-700 center">
                    <p>1</p>
                  </div>

                  <div className="sectionsix sectionsixsm top-45 p2 bg-blue-700">
                    <p>2</p>
                  </div>

                  <div className="sectionsix sectionsixsm bottom-18 p3 bg-green-500">
                    <p>3</p>
                  </div>
                </div>
              </div>

              {/* steps description */}
              <div className="flex flex-col md:flex-row gap-10 md:gap-10 md:items-center mt-7 md:px-15 md:ml-18 text-black">
                <div className="mx-5">
                  <h2 className="text-black font-semibold">Coding and Testing</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur<br/> adipisicing elit. Reiciendis sit neque velit pariatur soluta, voluptatibus vel sunt.</p>
                </div>
                <div className="mx-5">
                  <h2 className="text-black font-semibold">Deployment</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur<br/> adipisicing elit. Reiciendis sit neque velit pariatur soluta, voluptatibus vel sunt.</p>
                </div>
                <div className="mx-5">
                  <h2 className="text-black font-semibold">Placing an order</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur<br/> adipisicing elit. Reiciendis sit neque velit pariatur soluta, voluptatibus vel sunt.</p>
                </div>
              </div>

            </div>
        </div> 
    )
}