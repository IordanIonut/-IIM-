import React from "react";

const Table = ({text}) => {
  return (
    <div class="border-solid border-[#ffffff] border-2 flex flex-row items-center justify-between flex-1 h-[60px] sm:h-[140px] w-auto relative">
      <div
        class="text-[#ffffff] text-center font-['JejuGothic-Regular',_sans-serif] text-sm md:text-xl xl:text-2xl font-normal relative flex-1
        text-stroke-1 sm:text-stroke-2"
      >
        {text}
        <br />
      </div>
    </div>
  );
};

export default Table;
