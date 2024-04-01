import React from "react";

//          src={`${process.env.PUBLIC_URL}/Image.png`}

const Home = () => {
  return (
    <div class="pr-[50px] pl-[50px] flex flex-row items-center justify-between self-stretch shrink-0 relative">
      <div class="flex flex-col gap-20 items-start justify-center flex-1 relative">
        <div class="self-stretch shrink-0 h-52 relative">
          <div class="text-[#006400] text-left font-['JejuGothic-Regular',_sans-serif] text-8xl font-normal absolute right-[0%] left-[0%] w-[100%] bottom-[0%] top-[0%] h-[100%]">
            Iordan
            <br />
            Ionut Marius
          </div>
        </div>
        <div class="flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative">
          <div class="flex flex-row gap-2.5 items-center justify-end self-stretch shrink-0 relative">
            <div class="text-[#919191] text-left font-['Inter-Regular',_sans-serif] text-4xl font-normal relative flex-1">
              Hello, my name is Ionut. Nice to meet you! I would like to welcome
              you to my personal portfolio.
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row justify-between flex-1 h-[667px] relative">
        <img
          class="flex-1 h-[730px] relative"
          //style={{objectFit: 'cover'}}
          src={`${process.env.PUBLIC_URL}/Image.png`}
          alt="im"
        />
      </div>
      <svg
        class="shrink-0 w-[150px] h-[150px] absolute left-[calc(50%_-_-153.7px)] top-[417.22px] overflow-visible"
        style={{transform: 'translate(-81.7px, 0px)'}}
        width="208"
        height="208"
        viewBox="0 0 208 208"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_4_24)">
          <path
            d="M85.063 63.89L48.7104 68.2284L59.533 103.203"
            stroke="white"
            stroke-opacity="0.7"
            stroke-width="12"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M147.963 104.738L158.786 139.712L122.433 144.051"
            stroke="white"
            stroke-opacity="0.7"
            stroke-width="12"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M147.556 70.9384L59.9402 137.002"
            stroke="white"
            stroke-opacity="0.7"
            stroke-width="12"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_4_24">
            <rect
              width="150"
              height="150"
              fill="white"
              transform="translate(81.6958 0.222168) rotate(33)"
            />
          </clipPath>
        </defs>
      </svg>
      <svg
        class="pt-[23px] pr-[9px] pb-[23px] pl-[9px] shrink-0 w-[149.75px] h-[149.12px] absolute left-[calc(50%_-_303.78px)] top-[calc(50%_-_-166.5px)] overflow-visible"
        style={{transform: 'translate(-81.22px, 0px)'}}
        width="207"
        height="207"
        viewBox="0 0 207 207"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_4_28)">
          <path
            d="M84.5102 63.0968L48.1576 67.4351L58.9803 102.409"
            stroke="white"
            stroke-opacity="0.7"
            stroke-width="12"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M147.213 70.2813L59.597 136.345"
            stroke="white"
            stroke-opacity="0.7"
            stroke-width="12"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M147.83 104.217L158.652 139.191L122.3 143.53"
            stroke="white"
            stroke-opacity="0.7"
            stroke-width="12"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_4_28">
            <rect
              width="149.75"
              height="149.125"
              fill="white"
              transform="translate(81.2192) rotate(33)"
            />
          </clipPath>
        </defs>
      </svg>
      <svg
        class="shrink-0 w-[150px] h-[150px] absolute left-[calc(50%_-_114.3px)] top-[63px] overflow-visible"
        style={{transform: 'translate(-81.7px, 0px)'}}
        width="208"
        height="208"
        viewBox="0 0 208 208"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_4_32)">
          <path
            d="M85.063 63.6678L48.7104 68.0062L59.533 102.981"
            stroke="white"
            stroke-opacity="0.7"
            stroke-width="12"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M147.963 104.516L158.786 139.49L122.433 143.829"
            stroke="white"
            stroke-opacity="0.7"
            stroke-width="12"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M147.556 70.7162L59.9402 136.78"
            stroke="white"
            stroke-opacity="0.7"
            stroke-width="12"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_4_32">
            <rect
              width="150"
              height="150"
              fill="white"
              transform="translate(81.6958) rotate(33)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Home;
