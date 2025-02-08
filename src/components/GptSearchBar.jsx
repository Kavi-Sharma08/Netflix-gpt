import React from "react";
import { Button } from "./ui/button";

const GptSearchBar = () => {
  return (
    <div className="pt-[10%] w-[80%] items-center">
      <form className="grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
        <input
          type="search"
          placeholder="Which movie you want to see"
          className="border-2 p-2 col-span-9 m-2 box-border"
        />
        <button className=" text-white  m-2 bg-red-700 col-span-3 ">Search</button>
        
      </form>
    </div>
  );
};

export default GptSearchBar;
