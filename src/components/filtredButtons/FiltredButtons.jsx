import React from "react";

const FiltredButtons = ({ logo, name }) => {
  return (
    <div className="flex justify-center items-center gap-2 py-2 w-[200px] bg-[#222] bg-opacity-60 border-black border-2 rounded-md">
      <div>{logo}</div>
      <div className="font-medium">{name}</div>
    </div>
  );
};

export default FiltredButtons;
