import { Settings } from 'lucide-react';

export default function features(){

    return(
        <div className="text-black text-center mt-10">
            <h2 className="font-bold mt-5 text-xl">Our Primary Features</h2>
            <p className="text-sm px-3 text-[#8d8d90e7]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolore<br/> culpa saepe laudantium,  ex illum? Deserunt ex maxime excepturi</p>

            <div className="flex flex-col md:flex-row md:flex-wrap gap-10 justify-center m-5 px-20 md:px-0">

             <div className=" flex flex-col items-center w-72 md:w-80 ">
               <Settings className="mb-3" size={60} />
               <p className="font-semibold text-xl">Effiency</p>
               <p className="text-sm px-3 text-[#626262]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deserunt</p>
             </div>

             <div className=" flex flex-col items-center w-72 md:w-80 ">
               <Settings className="mb-3" size={60} />
               <p className="font-semibold text-xl">Effiency</p>
               <p className="text-sm px-3 text-[#626262]" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deserunt</p>
             </div>

             <div className=" flex flex-col items-center w-72 md:w-80">
               <Settings className="mb-3" size={60} />
               <p className="font-semibold text-xl">Effiency</p>
               <p className="text-sm px-3 text-[#626262]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deserunt</p>
             </div>

             <div className=" flex flex-col items-center w-72 md:w-80">
               <Settings className="mb-3" size={60} />
               <p className="font-semibold text-xl">Effiency</p>
               <p className="text-sm px-3 text-[#626262]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deserunt</p>
             </div>

             <div className=" flex flex-col items-center w-72 md:w-80">
               <Settings className="mb-3" size={60} />
               <p className="font-semibold text-xl">Effiency</p>
               <p className="text-sm px-3 text-[#626262]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deserunt</p>
             </div>

             <div className=" flex flex-col items-center w-72 md:w-80">
               <Settings className="mb-3" size={60} />
               <p className="font-semibold text-xl">Effiency</p>
               <p className="text-sm px-3 text-[#626262]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deserunt</p>
             </div>

            </div>

        </div>
    )
}