import React from "react";

const Cards = ({ projects }) => {
  return (
    <div class="flex flex-col gap-2.5 items-start justify-start shrink-0 relative">
      <div
        class="bg-[#1e1e1e] rounded-[40px] pr-3 sm:pr-4 md:pr-5 lg:pr-7 pl-3 sm:pl-4 md:md-5 lg:pl-7 pt-5 pb-5
        gap-4 sm:gap-5 md:gap-6 lg:gap-10 flex flex-col items-center justify-start shrink-0 relative overflow-hidden 
        w-[180px] h-[300px] sm:w-[200px] sm:h-[350px] md:w-[250px] md:h-[400px] lg:w-[300px] lg:h-[450px] xl:w-[350px] xl:h-[500px]"
        style={{ filter: "blur(2px)" }}
      >
        <div
          class="rounded-[50px] border-solid border-[#006400] border-b-4 shrink-0 relative w-[150px] h-[30px] sm:h-[35px] sm:w-[170px] 
        md:h-[40px] md:w-[170px] lg:h-[50px] lg:w-[200px]"
        >
          <a href={projects.link}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="absolute right-0 left-0 top-[-4px] w-[150px] h-[30px] sm:h-[35px] sm:w-[170px] md:h-[40px] md:w-[170px] lg:h-[50px] lg:w-[200px]"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
        <div class="flex flex-col gap-4 sm:gap-4 md:gap-5 lg:gap-10 items-start justify-start self-stretch shrink-0 relative">
          <div
            class="text-[#ffffff] font-['JejuGothic-Regular',_sans-serif] text-center text:lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
          font-normal relative"
          >
            {projects.title}
          </div>
          <div class="flex flex-row gap-1 sm:gap-2 md:gap-3 lg:gap-4 items-start justify-start flex-wrap self-stretch shrink-0 relative">
            {projects.keyWords.map((project, index) => (
              <div class="bg-[#006400] rounded-[60px] p-[5px] flex flex-row gap-0.5 items-start justify-start shrink-0 relative">
                <div
                  class="text-[#ffffff] text-left font-['Inter-Regular',_sans-serif] text-xs sm:text-sm md:text-base lg:text-21 
                font-normal relative"
                >
                  #
                </div>
                <div
                  class="text-[#ffffff] text-left font-['Inter-Regular',_sans-serif] text-xs sm:text-sm md:text-base lg:text-21 
                  font-normal relative"
                >
                  {project}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
