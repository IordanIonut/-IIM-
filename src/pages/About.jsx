import React from "react";

const About = () => {
  return (
    <div class="pr-[50px] pl-[50px] flex flex-col gap-10 items-start justify-start self-stretch shrink-0 relative">
      <div class="self-stretch shrink-0 h-[52px] relative">
        <div class="text-[#006400] text-left font-['JejuGothic-Regular',_sans-serif] text-[50px] font-normal absolute right-[0%] left-[0%] w-[100%] bottom-[-1.92%] top-[-1.92%] h-[103.85%] flex items-center justify-start">
          About me
        </div>
      </div>
      <div class="flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative">
        <div class="flex flex-row gap-2.5 items-center justify-end self-stretch shrink-0 relative">
          <div class="text-[#919191] text-left font-['Inter-Regular',_sans-serif] text-[34px] font-normal relative flex-1">
            I can deliver results that exceed your expectations.
            <br />
          </div>
        </div>
      </div>
      <div class="flex flex-row gap-[100px] items-start justify-start self-stretch shrink-0 relative">
        <div class="border-solid border-[#ffffff] border-4 p-5 flex flex-row gap-2.5 items-center justify-center shrink-0 w-[300px] relative">
          <div class="text-[#ffffff] text-center text-2xl font-normal relative flex-1">
            More information -&gt;
          </div>
        </div>
        <div class="flex flex-col gap-2.5 items-start justify-start self-stretch flex-1 relative">
          <div class="flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative">
            <div class="flex flex-row gap-2.5 items-start justify-start self-stretch shrink-0 relative">
              <div class="text-[#919191] text-left font-['Inder-Regular',_sans-serif] text-[34px] font-normal relative flex-1">
                Of course! Please provide me with the details of the two people
                and the nature of their conflict so that I can offer tailored
                suggestions to help them work through their issues.
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
