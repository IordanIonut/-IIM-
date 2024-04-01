import React from "react";

const CardsCenter = ({ position, setPosition, isBouncing, setIsBouncing }) => {
  const slideLeft = () => {
    setPosition((prevPosition) => prevPosition - 1);
    animation();
  };

  const slideRight = () => {
    setPosition((prevPosition) => prevPosition + 1);
    animation();
  };

  const animation = () => {
    setIsBouncing(true);
    setTimeout(() => {
      setIsBouncing(false);
    }, 1000);
  };
  return (
    <div class="pt-[35px] pb-[35px] flex flex-col items-center justify-between shrink-0 h-[641.04px] relative">
      <div class="bg-[#1e1e1e] rounded-[40px] pt-5 pr-10 pb-5 pl-10 flex flex-col gap-10 items-center justify-start shrink-0 w-[500px] h-[450px] relative overflow-hidden">
        <div class="rounded-[50px] border-solid border-[#006400] border-b-4 shrink-0 w-[191px] h-[46px] relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-[46px] w-[191px] absolute right-0 left-0"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </div>
        <div class="flex flex-col gap-10 items-start justify-start self-stretch shrink-0 relative">
          <div class="text-[#ffffff] text-left font-['JejuGothic-Regular',_sans-serif] text-[32px] font-normal relative">
            MUsic PLay
          </div>
          <div class="flex flex-row gap-5 items-start justify-start flex-wrap self-stretch shrink-0 relative">
            <div class="bg-[#006400] rounded-[60px] p-[5px] flex flex-row gap-0.5 items-start justify-start shrink-0 relative">
              <div class="text-[#ffffff] text-left font-['Inter-Regular',_sans-serif] text-21 font-normal relative">
                #
              </div>
              <div class="text-[#ffffff] text-left font-['Inter-Regular',_sans-serif] text-21 font-normal relative">
                React js
              </div>
            </div>
            <div class="bg-[#006400] rounded-[60px] p-[5px] flex flex-row gap-0.5 items-start justify-start shrink-0 relative">
              <div class="text-[#ffffff] text-left font-['Inter-Regular',_sans-serif] text-21 font-normal relative">
                #
              </div>
              <div class="text-[#ffffff] text-left font-['Inter-Regular',_sans-serif] text-21 font-normal relative">
                React js
              </div>
            </div>
            <div class="bg-[#006400] rounded-[60px] p-[5px] flex flex-row gap-0.5 items-start justify-start shrink-0 relative">
              <div class="text-[#ffffff] text-left font-['Inter-Regular',_sans-serif] text-21 font-normal relative">
                #
              </div>
              <div class="text-[#ffffff] text-left font-['Inter-Regular',_sans-serif] text-21 font-normal relative">
                React js
              </div>
            </div>
            <div class="bg-[#006400] rounded-[60px] p-[5px] flex flex-row gap-0.5 items-start justify-start shrink-0 relative">
              <div class="text-[#ffffff] text-left font-['Inter-Regular',_sans-serif] text-21 font-normal relative">
                #
              </div>
              <div class="text-[#ffffff] text-left font-['Inter-Regular',_sans-serif] text-21 font-normal relative">
                React js
              </div>
            </div>
            <div class="bg-[#006400] rounded-[60px] p-[5px] flex flex-row gap-0.5 items-start justify-start shrink-0 relative">
              <div class="text-[#ffffff] text-left font-['Inter-Regular',_sans-serif] text-21 font-normal relative">
                #
              </div>
              <div class="text-[#ffffff] text-left font-['Inter-Regular',_sans-serif] text-21 font-normal relative">
                React js
              </div>
            </div>
            <div class="bg-[#006400] rounded-[60px] p-[5px] flex flex-row gap-0.5 items-start justify-start shrink-0 relative">
              <div class="text-[#ffffff] text-left font-['Inter-Regular',_sans-serif] text-21 font-normal relative">
                #
              </div>
              <div class="text-[#ffffff] text-left font-['Inter-Regular',_sans-serif] text-21 font-normal relative">
                React js
              </div>
            </div>
            <div class="bg-[#006400] rounded-[60px] p-[5px] flex flex-row gap-0.5 items-start justify-start shrink-0 relative">
              <div class="text-[#ffffff] text-left font-['Inter-Regular',_sans-serif] text-21 font-normal relative">
                #
              </div>
              <div class="text-[#ffffff] text-left font-['Inter-Regular',_sans-serif] text-21 font-normal relative">
                React js
              </div>
            </div>
            <div class="bg-[#006400] rounded-[60px] p-[5px] flex flex-row gap-0.5 items-start justify-start shrink-0 relative">
              <div class="text-[#ffffff] text-left font-['Inter-Regular',_sans-serif] text-21 font-normal relative">
                #
              </div>
              <div class="text-[#ffffff] text-left font-['Inter-Regular',_sans-serif] text-21 font-normal relative">
                React js
              </div>
            </div>
            <div class="bg-[#006400] rounded-[60px] p-[5px] flex flex-row gap-0.5 items-start justify-start shrink-0 relative">
              <div class="text-[#ffffff] text-left font-['Inter-Regular',_sans-serif] text-21 font-normal relative">
                #
              </div>
              <div class="text-[#ffffff] text-left font-['Inter-Regular',_sans-serif] text-21 font-normal relative">
                React js
              </div>
            </div>
            <div class="bg-[#006400] rounded-[60px] p-[5px] flex flex-row gap-0.5 items-start justify-start shrink-0 relative">
              <div class="text-[#ffffff] text-left font-['Inter-Regular',_sans-serif] text-21 font-normal relative">
                #
              </div>
              <div class="text-[#ffffff] text-left font-['Inter-Regular',_sans-serif] text-21 font-normal relative">
                React js
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row gap-[100px] items-center justify-center shrink-0 relative">
        <button
          type="button"
          class="shrink-0 w-[61.04px] h-[61.04px] relative"
          onClick={slideLeft}
        >
          <div
            class="bg-[#006400] rounded-[20px] w-[60px] h-[60px] absolute left-[-0.48px] top-[1.05px]"
            style={{
              transformOrigin: "0 0",
              transform: "rotate(-1deg) scale(1, 1)",
            }}
          ></div>
          <div class="text-[#ffffff] text-left font-['Inter-Regular',_sans-serif] text-[31px] font-normal absolute right-[18.52px] left-[18.51904296875px] top-[calc(50%_-_22.04px)]">
            &lt;
          </div>
        </button>
        <button
          type="button"
          class="shrink-0 w-[61.04px] h-[61.04px] relative"
          onClick={slideRight}
        >
          <div
            class="bg-[#006400] rounded-[20px] w-[60px] h-[60px] absolute left-[-0.48px] top-[1.05px]"
            style={{
              transformOrigin: "0 0",
              transform: "rotate(-1deg) scale(1, 1)",
            }}
          ></div>
          <div class="text-[#ffffff] text-left font-['Inter-Regular',_sans-serif] text-[31px] font-normal absolute right-[18.52px] left-[18.51904296875px] top-[calc(50%_-_22px)]">
            &gt;
          </div>
        </button>
      </div>
    </div>
  );
};

export default CardsCenter;
