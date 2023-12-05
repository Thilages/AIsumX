import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between w-screen p-3 items-center">
      <div className=" flex item-center ml-2">
        <img src="/ai.png" className="inline w-8 text-white"></img>
        <h2 className="text-2xl font-bold ml-2 "><span style={{ color: "#00daa4" }}>AI</span><span style={{ color: "#000a64" }}>SumX</span><span style={{ color: "#00daa4" }}></span></h2>
      </div>
      <div className="mr-7">

        <button className=" text-sm border-solid button p-2 rounded-3xl  text-white "
          onClick={()=>window.open("https://www.instagram.com/_thilages_")}>
          Instagram
        </button>
        
        <button className=" border-solid text-sm  p-2 rounded-3xl b text-white ml-6 button"
        onClick={()=>window.open("https://github.com/Thilages")}>
          Github
        </button>
        <button className="drop-down">drop</button>
      </div>
    </div>
  );
};

export default Navbar;
