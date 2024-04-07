import React from "react";
import { Element } from "react-scroll";

const About = () => {
  return (
    <Element
      name="about"
      class="pr-[20px] pl-[20px] sm:pr-[50px] sm:pl-[50px] pt-3 pb-3 flex flex-col gap-10 items-start justify-start self-stretch shrink-0 relative"
    >
      <div class="self-stretch shrink-0 sm:h-[5px] md:h-[10px] lg:h-[20px] xl:h-[32px] relative">
        <div class="text-[#006400] text-left font-['JejuGothic-Regular',_sans-serif]  text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-normal absolute flex items-center justify-start">
          About me
        </div>
      </div>
      <div class="flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative">
        <div class="flex flex-row gap-2.5 items-center justify-end self-stretch shrink-0 relative">
          <div class="text-[#919191] text-left font-['Inter-Regular',_sans-serif] sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal relative flex-1">
            I can deliver results that exceed your expectations.
            <br />
          </div>
        </div>
      </div>
      <div class="flex flex-row gap-[30px] sm:gap-[100px] items-start justify-start self-stretch shrink-0 relative">
        <div class="border-solid border-[#ffffff] border-4 p-2 xl:p-2 md:p-3 lg:p-4 xl:p-5 flex flex-row gap-2.5 items-center justify-center shrink-0 relative">
          <div class="text-[#ffffff] text-center text-[10px] sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-normal relative flex-1">
            More information -&gt;
          </div>
        </div>
        <div class="flex flex-col gap-2.5 items-start justify-start self-stretch flex-1 relative">
          <div class="flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative">
            <div class="flex flex-row gap-2.5 items-start justify-start self-stretch shrink-0 relative">
              <div class="text-[#919191] text-left font-['Inder-Regular',_sans-serif] sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal relative flex-1">
                Of course! Please provide me with the details of the two people
                and the nature of their conflict so that I can offer tailored
                suggestions to help them work through their issues.
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};
export default About;
