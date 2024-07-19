import React from "react";
import { useState } from "react";

const Bg = () => {
  const [color, setColor] = useState("black");

  return (
    <>
      <div className="w-full h-screen duration-200 "style={{ backgroundColor: color  }}>
    
        <div className="w-full h-screen flex justify-center">
          <div className=" text-black bg-white flex w-5/6 rounded-3xl flex-wrap justify-center px-4   mx-6 absolute bottom-8  font-serif py-4">
            
            <button className="mx-4 min-w-24 my-2 justify-center  rounded-3xl py-1 px-5 text-white flex flex-wrap" style={{backgroundColor: "black" }} onClick={()=>{setColor("black")}}>
              Black
            </button>
            <button className=" mx-4 min-w-24 my-2 justify-center rounded-3xl py-1 px-5 text-white flex flex-wrap"  style={{backgroundColor:"blue"}} onClick={()=>{setColor("blue")}}>
              Blue
            </button> 
            <button className=" mx-4 min-w-24 my-2 justify-center  rounded-3xl py-1 px-5 text-white flex flex-wrap" style={{backgroundColor:"red"}} onClick={()=>{setColor("red")}}>
              Red
            </button> 
            <button className="   mx-4 min-w-24 my-2 justify-center  rounded-3xl py-1 px-5 text-black flex flex-wrap" style={{backgroundColor:"yellow"}} onClick={()=>{setColor("yellow")}}>
              Yellow
            </button>
            <button className=" mx-4 min-w-24 my-2 justify-center  rounded-3xl py-1 px-5 text-black flex flex-wrap" style={{backgroundColor:"pink"}} onClick={()=>{setColor("pink")}}>
              pink
            </button>
            <button className="   mx-4 min-w-24 my-2 justify-center  rounded-3xl py-1 px-5 text-white flex flex-wrap" style={{backgroundColor:"purple"}} onClick={()=>{setColor("purple")}}>
              purple
            </button>
            <button className="  mx-4 min-w-24 my-2 justify-center  rounded-3xl py-1 px-5 text-white flex flex-wrap" style={{backgroundColor:"gray"}} onClick={()=>{setColor("grey")}}>
              grey
            </button>
         
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Bg;
