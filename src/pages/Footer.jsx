import React from "react";
import { Element } from "react-scroll";

const Footer = () => {
  return (
    <Element
      name="footer"
      class="pr-[20px] pl-[20px] sm:pr-[50px] sm:pl-[50px] pt-3 pb-3 flex flex-col gap-10 items-center 
    justify-start self-stretch shrink-0 relative"
    >
      <div class="flex flex-row items-center justify-between self-stretch flex-1 relative">
        <div class="flex flex-col gap-2.5 items-start justify-end self-stretch flex-1 relative">
          <div class="flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative">
            <div class="flex flex-row gap-2.5 items-center justify-end self-stretch shrink-0 relative">
              <div
                class="text-[#919191] text-left font-['Inter-Regular',_sans-serif] text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
                font-normal relative flex-1"
              >
                @Email : mariusionut879@yahoo.com
              </div>
            </div>
          </div>
          <svg
            class="shrink-0 absolute left-[calc(50%_-_8.86px)] top-[63.19px] overflow-visible sm:w-[106.99px] sm:h-[106.99px] 
            w-[70px] h-[70px]"
            style={{ transform: "translate(0px, -84.6px)" }}
            width="142"
            height="161"
            viewBox="0 0 142 161"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_4_120)">
              <path
                d="M35.4263 83.1182C33.979 84.9881 33.2551 87.4456 33.414 89.9501C33.5729 92.4546 34.6015 94.8009 36.2735 96.4729C37.1095 97.309 37.6238 98.4821 37.7032 99.7344C37.7826 100.987 37.4207 102.215 36.6971 103.15C35.9734 104.085 34.9473 104.65 33.8444 104.72C32.7416 104.79 31.6523 104.359 30.8163 103.523C27.4723 100.179 25.4151 95.4867 25.0974 90.4777C24.7797 85.4687 26.2274 80.5537 29.122 76.8139L37.3077 66.2383C38.7551 64.3684 39.4789 61.9109 39.3201 59.4065C39.1612 56.902 38.1326 54.5556 36.4606 52.8836C35.6246 52.0476 35.1103 50.8744 35.0309 49.6222C34.9514 48.37 35.3134 47.1412 36.037 46.2063C36.7607 45.2713 37.7868 44.7068 38.8897 44.6368C39.9925 44.5669 41.0818 44.9972 41.9178 45.8332C43.5898 47.5052 45.7682 48.3659 47.9739 48.226C50.1796 48.0861 52.2319 46.957 53.6792 45.0871L61.865 34.5115C64.7596 30.7718 68.8641 28.5136 73.2755 28.2337C77.6869 27.9539 82.0439 29.6753 85.3879 33.0194C86.2239 33.8554 86.7382 35.0285 86.8176 36.2808C86.8971 37.533 86.5352 38.7618 85.8115 39.6967C85.0878 40.6317 84.0617 41.1962 82.9588 41.2662C81.856 41.3361 80.7668 40.9058 79.9308 40.0698C78.2587 38.3978 76.0803 37.537 73.8746 37.6769C71.6689 37.8169 69.6166 38.946 68.1693 40.8158L59.9835 51.3914C58.4196 53.3888 56.4922 54.9774 54.3304 56.0511C52.1685 57.1247 49.822 57.6586 47.4478 57.6171C47.7865 60.2884 47.6195 63.0018 46.958 65.5758C46.2965 68.1498 45.1558 70.525 43.6121 72.5426L35.4263 83.1182ZM99.5037 115.927C97.8317 114.255 95.6532 113.394 93.4475 113.534C91.2418 113.674 89.1896 114.803 87.7423 116.673L79.5565 127.248C76.6619 130.988 72.5573 133.246 68.1459 133.526C63.7345 133.806 59.3776 132.085 56.0336 128.741C55.1976 127.905 54.6833 126.731 54.6038 125.479C54.5244 124.227 54.8863 122.998 55.61 122.063C56.3337 121.128 57.3598 120.564 58.4626 120.494C59.5655 120.424 60.6547 120.854 61.4907 121.69C63.1627 123.362 65.3412 124.223 67.5469 124.083C69.7526 123.943 71.8049 122.814 73.2522 120.944L81.4379 110.369C83.0019 108.371 84.9293 106.783 87.0911 105.709C89.253 104.635 91.5995 104.101 93.9737 104.143C93.635 101.472 93.802 98.7582 94.4635 96.1842C95.125 93.6102 96.2657 91.2349 97.8094 89.2173L105.995 78.6417C107.442 76.7718 108.166 74.3143 108.007 71.8098C107.849 69.3054 106.82 66.959 105.148 65.287C104.312 64.451 103.798 63.2778 103.718 62.0256C103.639 60.7733 104.001 59.5446 104.724 58.6097C105.448 57.6747 106.474 57.1102 107.577 57.0402C108.68 56.9702 109.769 57.4006 110.605 58.2366C113.949 61.5806 116.006 66.2733 116.324 71.2823C116.642 76.2913 115.194 81.2063 112.299 84.946L104.114 95.5216C102.666 97.3915 101.943 99.849 102.101 102.354C102.26 104.858 103.289 107.204 104.961 108.876C105.797 109.712 106.311 110.886 106.391 112.138C106.47 113.39 106.108 114.619 105.384 115.554C104.661 116.489 103.635 117.053 102.532 117.123C101.429 117.193 100.34 116.763 99.5037 115.927Z"
                fill="white"
                fill-opacity="0.7"
              />
            </g>
            <defs>
              <clipPath id="clip0_4_120">
                <rect
                  width="106.988"
                  height="106.988"
                  fill="white"
                  transform="matrix(0.707107 0.707107 0.612088 -0.79079 0.141846 85.3564)"
                />
              </clipPath>
            </defs>
          </svg>
          <svg
            class="shrink-0 absolute left-[calc(50%_-_-229.42px)] top-[-10px] overflow-visible sm:w-[200px] sm:h-[200px] w-[100px] h-[100px]"
            style={{ transform: "translate(-141.42px, 0px)" }}
            width="283"
            height="284"
            viewBox="0 0 283 284"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_4_122)">
              <path
                d="M141.421 70.8797C144.547 67.7541 148.786 65.9981 153.206 65.9981C157.627 65.9981 161.866 67.7541 164.992 70.8797C166.554 72.4425 168.674 73.3205 170.884 73.3205C173.094 73.3205 175.214 72.4425 176.777 70.8797C178.34 69.3169 179.217 67.1973 179.217 64.9871C179.217 62.777 178.34 60.6574 176.777 59.0946C170.525 52.8434 162.047 49.3315 153.206 49.3315C144.366 49.3315 135.887 52.8434 129.636 59.0946L111.959 76.7722C108.833 79.8979 104.594 81.6538 100.173 81.6538C95.7532 81.6538 91.514 79.8979 88.3884 76.7722C86.8255 75.2094 84.7059 74.3315 82.4958 74.3315C80.2857 74.3315 78.166 75.2094 76.6032 76.7723C75.0404 78.3351 74.1625 80.4547 74.1625 82.6648C74.1625 84.8749 75.0404 86.9946 76.6032 88.5574C79.7288 91.683 81.4848 95.9222 81.4848 100.342C81.4848 104.763 79.7288 109.002 76.6032 112.128L58.9256 129.805C52.6744 136.056 49.1625 144.535 49.1625 153.375C49.1625 162.216 52.6743 170.695 58.9256 176.946C60.4884 178.509 62.608 179.386 64.8181 179.386C67.0283 179.386 69.1479 178.509 70.7107 176.946C72.2735 175.383 73.1515 173.263 73.1515 171.053C73.1515 168.843 72.2735 166.723 70.7107 165.161C67.5851 162.035 65.8291 157.796 65.8291 153.375C65.8291 148.955 67.5851 144.716 70.7107 141.59L88.3883 123.913C91.725 120.538 94.3027 116.49 95.949 112.039C97.5952 107.588 98.2721 102.837 97.9343 98.1033C102.668 98.4411 107.419 97.7642 111.87 96.118C116.321 94.4717 120.369 91.8941 123.744 88.5574L141.421 70.8797ZM206.239 194.623C203.114 191.498 201.358 187.259 201.358 182.838C201.358 178.418 203.114 174.179 206.239 171.053L223.917 153.375C230.168 147.124 233.68 138.646 233.68 129.805C233.68 120.965 230.168 112.486 223.917 106.235C222.354 104.672 220.235 103.794 218.025 103.794C215.814 103.794 213.695 104.672 212.132 106.235C210.569 107.798 209.691 109.917 209.691 112.128C209.691 114.338 210.569 116.457 212.132 118.02C215.258 121.146 217.014 125.385 217.014 129.805C217.014 134.226 215.258 138.465 212.132 141.59L194.454 159.268C191.118 162.643 188.54 166.691 186.894 171.142C185.248 175.593 184.571 180.344 184.908 185.077C180.175 184.74 175.424 185.417 170.973 187.063C166.522 188.709 162.474 191.287 159.099 194.623L141.421 212.301C138.296 215.427 134.057 217.183 129.636 217.183C125.216 217.183 120.977 215.427 117.851 212.301C116.288 210.738 114.169 209.86 111.959 209.86C109.748 209.86 107.629 210.738 106.066 212.301C104.503 213.864 103.625 215.983 103.625 218.194C103.625 220.404 104.503 222.523 106.066 224.086C112.317 230.337 120.796 233.849 129.636 233.849C138.477 233.849 146.955 230.337 153.206 224.086L170.884 206.408C174.01 203.283 178.249 201.527 182.669 201.527C187.09 201.527 191.329 203.283 194.454 206.408C196.017 207.971 198.137 208.849 200.347 208.849C202.557 208.849 204.677 207.971 206.239 206.408C207.802 204.846 208.68 202.726 208.68 200.516C208.68 198.306 207.802 196.186 206.239 194.623Z"
                fill="white"
                fill-opacity="0.7"
              />
            </g>
            <defs>
              <clipPath id="clip0_4_122">
                <rect
                  width="200"
                  height="200"
                  fill="white"
                  transform="translate(141.421 0.168945) rotate(45)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div class="flex flex-col gap-2.5 items-center justify-start shrink-0 relative">
          <a
            href="https://www.linkedin.com/in/iordan-ionut-08b3021bb/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-col gap-2.5 items-start justify-start shrink-0 relative"
          >
            <div class="flex flex-row gap-2.5 items-center justify-end self-stretch shrink-0 relative">
              <div
                class="hover:text-[#0077B5] text-[#919191] text-left font-['Inter-Regular',_sans-serif] text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 
                font-normal relative"
              >
                Linkedin
              </div>
            </div>
          </a>
          <a
            href="https://github.com/IordanIonut"
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-col gap-2.5 items-start justify-start shrink-0 relative"
          >
            <div class="flex flex-row gap-2.5 items-center justify-end self-stretch shrink-0 relative">
              <div
                class="hover:text-[#ffffff] text-[#919191] text-left font-['Inter-Regular',_sans-serif] text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 
                font-normal relative"
              >
                GitHub
              </div>
            </div>
          </a>
          <a
            href="https://www.facebook.com/iordan.ionut.399"
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-col gap-2.5 items-start justify-start shrink-0 relative"
          >
            <div class="flex flex-row gap-2.5 items-center justify-end self-stretch shrink-0 relative">
              <div
                class="hover:text-[#4464A9] text-[#919191] text-left font-['Inter-Regular',_sans-serif] text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 
                font-normal relative"
              >
                Facebook
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="flex flex-row gap-2.5 items-center justify-center shrink-0 relative">
        <div class="flex flex-col gap-2.5 items-center justify-center shrink-0 relative">
          <div class="flex flex-row gap-2.5 items-center justify-center shrink-0 relative">
            <div
              class="text-[#919191] text-center font-['Inter-Regular',_sans-serif] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
              font-normal relative"
            >
              © Copyright 2024. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Footer;
