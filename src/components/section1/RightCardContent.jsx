import React from 'react'
import { ArrowRight } from "lucide-react";
const RightCardContent = (props) => {
  return (
     <div className="absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between">
        <h2 className="bg-white rounded-full h-14 w-14 flex justify-center items-center text-2xl font-bold">{props.id+1}</h2>
        <div>
          <p className="text-lg leading-normal text-white mb-10 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            nihil unde quam. Expedita, architecto 
          </p>
           <div className="flex justify-between">
          <button className="bg-blue-600 text-white font-medium px-8 py-3 rounded-full ">{props.tag}</button>
          <button className="bg-blue-600 text-white font-medium px-3 py-3 rounded-full ">
            <ArrowRight />
          </button>
        </div>
        </div>
       
      </div>
  )
}

export default RightCardContent
