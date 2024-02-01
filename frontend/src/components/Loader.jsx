import React from "react";

function Loader() {
  return (
    <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
      <div className="border-t-transparent border-solid animate-spin  rounded-full border-secondary border-8 h-44 w-44"></div>
    </div>
  );
}

export default Loader;
