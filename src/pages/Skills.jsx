import React from "react";
import { Element } from "react-scroll";
import { backend, frontend, design } from "../utili/information";
import Table from "../components/Table";

const Skills = () => {
  return (
    <Element
      name="skills"
      class="pr-[20px] pl-[20px] sm:pr-[50px] sm:pl-[50px] pt-3 pb-3 flex flex-col gap-10 items-start justify-start self-stretch shrink-0 relative"
    >
      <svg
        class="shrink-0 absolute overflow-visible md:w-[149.75px] sm:w-[100px] sm:h-[100px] md:h-[149.12px] w-[70px] h-[70px]
        md:left-[calc(90%_-_33.78px)] md:top-[calc(3%_-_-16.5px)]  sm:left-[calc(40%_-_1.78px)]
        sm:top-[calc(20%_-_-16.5px)] left-[calc(60%_-_10.78px)] top-[calc(3%_-_-120.5px)]"
        style={{ transform: "translate(-173.83px, -34.2px)" }}
        width="175"
        height="129"
        viewBox="0 0 175 129"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_4_47)">
          <path
            d="M109.171 20.6352C108.643 20.4935 108.06 20.5122 107.551 20.6874C107.041 20.8625 106.647 21.1797 106.455 21.5691L102.831 28.9104C102.639 29.2998 102.664 29.7296 102.902 30.1052C103.139 30.4808 103.569 30.7714 104.097 30.9131C104.626 31.0548 105.208 31.0361 105.718 30.8609C106.227 30.6858 106.621 30.3687 106.814 29.9792L110.437 22.6379C110.63 22.2485 110.604 21.8187 110.367 21.4431C110.129 21.0676 109.699 20.777 109.171 20.6352ZM133.211 49.4483C132.959 49.5388 132.684 49.5912 132.403 49.6026C132.123 49.614 131.842 49.5841 131.577 49.5148C131.312 49.4454 131.069 49.3379 130.861 49.1985C130.653 49.0591 130.485 48.8906 130.366 48.7029C130.247 48.5151 130.18 48.3118 130.169 48.1047C130.158 47.8977 130.203 47.6911 130.301 47.497C130.399 47.3028 130.548 47.125 130.741 46.9738C130.933 46.8227 131.164 46.7012 131.42 46.6165L141.024 43.3173C141.277 43.2275 141.551 43.1756 141.832 43.1647C142.112 43.1537 142.392 43.1838 142.656 43.2533C142.92 43.3228 143.163 43.4303 143.371 43.5696C143.578 43.7089 143.746 43.8771 143.865 44.0646C143.983 44.2521 144.05 44.4551 144.061 44.6617C144.073 44.8684 144.028 45.0747 143.931 45.2686C143.833 45.4626 143.684 45.6403 143.493 45.7915C143.301 45.9426 143.071 46.0643 142.815 46.1493L133.211 49.4483ZM134.656 74.0438L144.611 76.7187C145.139 76.8606 145.569 77.1513 145.807 77.5269C146.044 77.9025 146.069 78.3323 145.877 78.7216C145.685 79.111 145.29 79.4281 144.781 79.6031C144.272 79.7782 143.689 79.7968 143.161 79.655L133.207 76.9803C132.945 76.9101 132.705 76.8026 132.5 76.6639C132.295 76.5252 132.129 76.3581 132.011 76.1722C131.893 75.9862 131.827 75.7849 131.815 75.5799C131.803 75.3749 131.845 75.1702 131.941 74.9774C132.036 74.7846 132.182 74.6075 132.37 74.4563C132.558 74.305 132.784 74.1826 133.037 74.0959C133.289 74.0092 133.562 73.96 133.84 73.9511C134.118 73.9422 134.395 73.9735 134.656 74.0438ZM43.0613 76.9731C43.3141 76.8827 43.5888 76.8302 43.8694 76.8188C44.15 76.8074 44.4308 76.8373 44.6956 76.9066C44.9603 76.976 45.2038 77.0835 45.4117 77.2229C45.6196 77.3623 45.7878 77.5308 45.9066 77.7186C46.0253 77.9063 46.0923 78.1097 46.1034 78.3167C46.1146 78.5237 46.0699 78.7303 45.9718 78.9245C45.8737 79.1186 45.7242 79.2964 45.532 79.4476C45.3398 79.5987 45.1088 79.7202 44.8524 79.8049L35.2484 83.1041C34.9957 83.1939 34.7213 83.2458 34.4411 83.2568C34.161 83.2677 33.8807 83.2376 33.6165 83.1681C33.3522 83.0986 33.1094 82.9911 32.9019 82.8518C32.6945 82.7125 32.5266 82.5443 32.408 82.3568C32.2895 82.1693 32.2226 81.9664 32.2112 81.7597C32.1999 81.553 32.2443 81.3467 32.3419 81.1528C32.4395 80.9588 32.5884 80.7811 32.7799 80.63C32.9714 80.4788 33.2017 80.3571 33.4574 80.2721L43.0613 76.9731ZM110.668 95.1168L115.149 102.196C115.271 102.382 115.341 102.584 115.356 102.791C115.371 102.998 115.33 103.204 115.236 103.399C115.142 103.594 114.996 103.773 114.807 103.926C114.618 104.079 114.39 104.203 114.136 104.29C113.882 104.378 113.606 104.427 113.326 104.435C113.046 104.444 112.766 104.411 112.503 104.339C112.24 104.267 111.999 104.157 111.794 104.016C111.589 103.875 111.424 103.705 111.309 103.516L106.828 96.4372C106.705 96.2508 106.634 96.0483 106.618 95.8414C106.603 95.6345 106.643 95.4274 106.738 95.2322C106.832 95.037 106.978 94.8575 107.167 94.7042C107.356 94.5509 107.584 94.4269 107.839 94.3394C108.093 94.2518 108.369 94.2025 108.65 94.1942C108.931 94.186 109.211 94.219 109.474 94.2913C109.738 94.3637 109.979 94.4739 110.184 94.6156C110.389 94.7574 110.553 94.9277 110.668 95.1168ZM33.1111 46.7661L43.0662 49.4411C43.5942 49.5829 44.0243 49.8736 44.2617 50.2493C44.499 50.6249 44.5243 51.0546 44.332 51.444C44.1396 51.8334 43.7454 52.1505 43.236 52.3255C42.7265 52.5006 42.1437 52.5192 41.6156 52.3774L31.6596 49.7021C31.1315 49.5603 30.7014 49.2696 30.4641 48.894C30.2267 48.5184 30.2014 48.0886 30.3937 47.6992C30.5861 47.3099 30.9803 46.9928 31.4897 46.8177C31.9992 46.6427 32.583 46.6243 33.1111 46.7661ZM66.8275 32.1037C66.5657 32.0338 66.3252 31.9264 66.1199 31.7877C65.9145 31.649 65.7484 31.4818 65.6309 31.2956L61.1559 24.2132C60.9185 23.8375 60.8932 23.4076 61.0857 23.0181C61.2781 22.6287 61.6725 22.3115 62.1821 22.1365C62.6917 21.9614 63.2747 21.9428 63.8029 22.0847C64.3311 22.2266 64.7613 22.5174 64.9987 22.8932L69.4735 29.9755C69.6506 30.2556 69.711 30.5682 69.6472 30.8736C69.5834 31.1791 69.3981 31.4637 69.1149 31.6915C68.8316 31.9193 68.4631 32.0801 68.056 32.1534C67.6488 32.2268 67.2213 32.2095 66.8275 32.1037ZM52.3427 65.4357C51.4739 60.7588 52.2178 55.9958 54.5056 51.5869C56.7934 47.178 60.5513 43.2653 65.4322 40.2105C70.0578 37.2551 75.6189 35.2068 81.6018 34.255C87.5847 33.3032 93.7964 33.4784 99.6632 34.7646L99.6669 34.7656C101.175 35.1021 102.656 35.4997 104.105 35.9565C109.72 37.7518 114.631 40.5617 118.385 44.1264C122.138 47.6912 124.612 51.8959 125.579 56.3522C126.655 61.0057 126.123 65.7841 124.032 70.2458C121.941 74.7076 118.359 78.7088 113.616 81.8797L92.1084 96.28L88.6635 103.259C87.3141 105.983 84.5546 108.2 80.9903 109.426C77.4261 110.651 73.3481 110.785 69.6509 109.796L61.6857 107.658C57.9917 106.663 54.9838 104.629 53.3217 102.001C51.6597 99.3725 51.4793 96.3656 52.8201 93.6395L56.265 86.6607L52.3427 65.4357ZM85.4056 100.722L87.58 96.3169L59.7018 88.8353L57.5274 93.2401L85.4056 100.722ZM121.399 56.8656C120.585 52.9163 118.414 49.1861 115.095 46.029C111.775 42.872 107.417 40.3929 102.432 38.8272C101.131 38.4163 99.8004 38.0591 98.4457 37.7573C93.2621 36.5938 87.7612 36.4266 82.4653 37.2715C77.1695 38.1164 72.2544 39.9454 68.1867 42.5849C63.8462 45.3008 60.504 48.7795 58.4687 52.6996C56.4333 56.6197 55.7706 60.8547 56.5417 65.0136L60.3618 85.6868L73.0991 89.1052L79.1515 76.8441C78.0411 76.6757 76.9474 76.4522 75.8778 76.1752C74.1291 75.7747 72.5067 75.1203 71.1063 74.2504C69.7058 73.3805 68.5556 72.3128 67.7234 71.1102C63.7116 64.9381 70.281 56.8482 70.563 56.5062C70.7069 56.3303 70.8965 56.1771 71.1211 56.0555C71.3456 55.934 71.6006 55.8463 71.8713 55.7978C72.1419 55.7492 72.423 55.7406 72.6982 55.7725C72.9734 55.8044 73.2373 55.8762 73.4747 55.9837C81.4124 59.5439 83.5099 66.8858 84.0168 71.5562C88.4766 68.2187 96.4841 63.5879 105.668 64.6234C105.944 64.6537 106.208 64.7239 106.447 64.83C106.685 64.936 106.893 65.0758 107.058 65.2412C107.223 65.4067 107.342 65.5946 107.408 65.7941C107.474 65.9936 107.486 66.2008 107.443 66.4037C107.361 66.799 105.34 76.1101 96.8871 78.9369C95.2012 79.4638 93.3893 79.7366 91.5581 79.7392C89.727 79.7418 87.9137 79.4742 86.225 78.9521C85.1641 78.6574 84.1315 78.3102 83.1341 77.9129L77.0817 90.174L89.8191 93.5923L110.768 79.5662C114.984 76.7458 118.168 73.1875 120.026 69.2199C121.885 65.2523 122.357 61.0033 121.399 56.8656ZM79.9195 73.7865C79.8326 70.5075 78.9344 63.4108 73.0999 59.6431C71.4459 62.2373 69.5178 66.6383 71.545 69.7594C72.8378 71.7421 75.6476 73.0963 79.9195 73.7865ZM85.2128 75.2071C89.0737 76.7011 92.4121 76.998 95.1291 76.0934C99.6762 74.5777 101.866 70.0782 102.752 67.604C95.0037 67.7308 88.136 72.7383 85.2128 75.2071ZM63.1353 104.722L71.1005 106.859C73.3957 107.473 75.9075 107.484 78.2126 106.891C80.5177 106.298 82.475 105.137 83.7548 103.604L56.2792 96.2306C55.9232 98.0115 56.4107 99.8284 57.6596 101.375C58.9085 102.922 60.8424 104.104 63.1353 104.722Z"
            fill="white"
            fill-opacity="0.7"
          />
        </g>
        <defs>
          <clipPath id="clip0_4_47">
            <rect
              width="131.953"
              height="104.794"
              fill="white"
              transform="matrix(-0.965824 -0.259199 -0.442634 0.896702 174.326 34.7954)"
            />
          </clipPath>
        </defs>
      </svg>
      <div class="self-stretch shrink-0 sm:h-[5px] md:h-[10px] lg:h-[20px] xl:h-[32px] relative">
        <div class="text-[#006400] text-left font-['JejuGothic-Regular',_sans-serif]  text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-normal absolute flex items-center justify-start">
          Skills
        </div>
      </div>
      <div class="flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative">
        <div class="flex flex-row gap-2.5 items-center justify-end self-stretch shrink-0 relative">
          <div class="text-[#919191] text-left font-['Inter-Regular',_sans-serif] sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal relative flex-1">
            Available skills on which I can work
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-[30px] items-start justify-start self-stretch shrink-0 relative">
        <div class="flex flex-col gap-10 items-start justify-start self-stretch shrink-0 relative py-0.5">
          <div class="flex flex-row gap-[40px] sm:gap-[100px] items-start justify-start self-stretch shrink-0 relative">
            <div class="flex flex-row items-center justify-between shrink-0 relative">
              <div
                class="text-[#006400] text-left font-['JejuGothic-Regular',_sans-serif] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 
              font-normal uppercase relative"
              >
                01.
              </div>
              <div
                class="text-[#ffffff] text-left font-['JejuGothic-Regular',_sans-serif] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 
              font-normal uppercase relative"
              >
                BackEnd
              </div>
            </div>
            <div class="flex flex-col gap-2.5 items-start justify-start self-stretch flex-1 relative">
              <div class="flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative">
                <div class="flex flex-row gap-2.5 items-start justify-start self-stretch shrink-0 relative">
                  <div
                    class="text-[#919191] text-left font-['Inder-Regular',_sans-serif] sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
                    font-normal relative flex-1"
                  >
                    A solid understanding of backend technologies, including
                    databases, server-side languages , APIs, and frameworks.
                    Proficiency in designing, developing, and maintaining
                    scalable and efficient backend systems to support web and
                    mobile applications.
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flow-root sm:flex flex-row gap-0 items-start justify-start self-stretch flex-1 relative">
            {backend?.map((text, index) => (
              <div key={index}>
                <Table text={text} />
              </div>
            ))}
          </div>
        </div>
        <div class="flex flex-col gap-10 items-start justify-start self-stretch shrink-0 relative">
          <div class="flex flex-row gap-[30px] sm:gap-[75px] items-start justify-start self-stretch shrink-0 relative">
            <div class="flex flex-row items-center justify-between shrink-0 relative">
              <div
                class="text-[#006400] text-left font-['JejuGothic-Regular',_sans-serif] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
                font-normal uppercase relative"
              >
                02.
              </div>
              <div
                class="text-[#ffffff] text-left font-['JejuGothic-Regular',_sans-serif] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 
              font-normal uppercase relative"
              >
                Frontend
              </div>
            </div>
            <div class="flex flex-col gap-2.5 items-start justify-start flex-1 relative">
              <div class="flex flex-row gap-2.5 items-center justify-end self-stretch shrink-0 relative">
                <div
                  class="text-[#919191] text-left font-['Inter-Regular',_sans-serif] sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
                  font-normal relative flex-1"
                >
                  Proficient in frontend development with a strong understanding
                  of key technologies and frameworks.
                </div>
              </div>
            </div>
          </div>
          <div class="flow-root sm:flex flex-row gap-0 items-start justify-start self-stretch shrink-0 relative">
            {frontend?.map((text, index) => (
              <div key={index}>
                <Table text={text} />
              </div>
            ))}
          </div>
        </div>
        <div class="flex flex-col gap-10 items-start justify-start self-stretch shrink-0 relative">
          <div class="flex flex-row gap-[30px] sm:gap-[140px] items-start justify-start self-stretch shrink-0 relative">
            <div class="flex flex-row items-center justify-between shrink-0 relative">
              <div
                class="text-[#006400] text-left font-['JejuGothic-Regular',_sans-serif] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
                font-normal uppercase relative"
              >
                03.
              </div>
              <div
                class="text-[#ffffff] text-left font-['JejuGothic-Regular',_sans-serif] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
                font-normal uppercase relative"
              >
                Desing
              </div>
            </div>
            <div class="flex flex-col gap-2.5 items-start justify-start flex-1 relative">
              <div class="flex flex-row gap-2.5 items-center justify-end self-stretch shrink-0 relative">
                <div
                  class="text-[#919191] text-left font-['Inter-Regular',_sans-serif] sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 
                font-normal relative flex-1"
                >
                  A proficient designer with a strong grasp of design principles
                  and techniques, adept at transforming ideas into visually
                  appealing and functional creations. Skilled in utilizing
                  various design tools and technologies to produce high-quality
                  designs that effectively communicate messages and captivate
                  audiences. <br />
                </div>
              </div>
            </div>
            <svg
              class="shrink-0 absolute overflow-visible md:w-[149.75px] sm:w-[100px] sm:h-[100px] md:h-[149.12px] w-[70px] h-[70px]
              md:left-[calc(30%_-_33.78px)] md:top-[calc(60%_-_-16.5px)] sm:left-[calc(30%_-_1.78px)] sm:top-[calc(50%_-_-16.5px)] 
              left-[calc(30%_-_10.78px)] top-[calc(50%_-_-10.5px)]"
              style={{ transform: "translate(-80.29px, 0px)" }}
              width="161"
              height="142"
              viewBox="0 0 161 142"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_146_1677)">
                <path
                  d="M80.289 35.6229C78.5145 34.0601 76.1078 33.1821 73.5982 33.1821C71.0887 33.1821 68.682 34.0601 66.9075 35.6229C66.0202 36.4043 64.8168 36.8433 63.5621 36.8433C62.3073 36.8433 61.1039 36.4043 60.2167 35.6229C59.3294 34.8415 58.831 33.7817 58.831 32.6766C58.831 31.5716 59.3294 30.5118 60.2167 29.7304C63.7657 26.6048 68.5792 24.8488 73.5982 24.8488C78.6173 24.8488 83.4308 26.6048 86.9798 29.7304L97.016 38.5692C98.7905 40.132 101.197 41.01 103.707 41.01C106.216 41.01 108.623 40.132 110.398 38.5692C111.285 37.7878 112.488 37.3488 113.743 37.3488C114.998 37.3488 116.201 37.7878 117.088 38.5692C117.976 39.3506 118.474 40.4104 118.474 41.5155C118.474 42.6205 117.976 43.6804 117.088 44.4618C115.314 46.0246 114.317 48.1442 114.317 50.3543C114.317 52.5644 115.314 54.6841 117.088 56.2469L127.124 65.0857C130.673 68.2113 132.667 72.4505 132.667 76.8708C132.667 81.2911 130.673 85.5303 127.124 88.6559C126.237 89.4373 125.034 89.8763 123.779 89.8763C122.524 89.8763 121.321 89.4373 120.434 88.6559C119.546 87.8745 119.048 86.8147 119.048 85.7096C119.048 84.6046 119.546 83.5448 120.434 82.7634C122.208 81.2006 123.205 79.0809 123.205 76.8708C123.205 74.6607 122.208 72.5411 120.434 70.9783L110.398 62.1394C108.503 60.4521 107.04 58.4281 106.105 56.2026C105.17 53.9771 104.786 51.6015 104.978 49.2347C102.291 49.4036 99.5932 49.0652 97.0662 48.2421C94.5393 47.4189 92.241 46.1301 90.3252 44.4618L80.289 35.6229ZM43.4897 97.4948C45.2642 95.932 46.2611 93.8123 46.2611 91.6022C46.2611 89.3921 45.2642 87.2724 43.4897 85.7096L33.4536 76.8708C29.9046 73.7452 27.9108 69.506 27.9108 65.0857C27.9108 60.6654 29.9046 56.4262 33.4536 53.3006C34.3408 52.5192 35.5442 52.0802 36.799 52.0802C38.0537 52.0802 39.2571 52.5192 40.1443 53.3006C41.0316 54.082 41.5301 55.1418 41.5301 56.2469C41.5301 57.3519 41.0316 58.4117 40.1443 59.1931C38.3698 60.7559 37.3729 62.8756 37.3729 65.0857C37.3729 67.2958 38.3698 69.4155 40.1443 70.9783L50.1805 79.8171C52.0749 81.5044 53.5383 83.5284 54.4729 85.7539C55.4075 87.9794 55.7918 90.355 55.6 92.7218C58.2875 92.5529 60.9849 92.8913 63.5118 93.7145C66.0387 94.5376 68.337 95.8264 70.2528 97.4948L80.289 106.334C82.0635 107.896 84.4703 108.774 86.9798 108.774C89.4893 108.774 91.8961 107.896 93.6706 106.334C94.5578 105.552 95.7612 105.113 97.016 105.113C98.2707 105.113 99.4741 105.552 100.361 106.334C101.249 107.115 101.747 108.175 101.747 109.28C101.747 110.385 101.249 111.445 100.361 112.226C96.8123 115.352 91.9988 117.108 86.9798 117.108C81.9607 117.108 77.1472 115.352 73.5982 112.226L63.5621 103.387C61.7876 101.825 59.3808 100.947 56.8713 100.947C54.3618 100.947 51.955 101.825 50.1805 103.387C49.2933 104.169 48.0899 104.608 46.8351 104.608C45.5804 104.608 44.377 104.169 43.4897 103.387C42.6025 102.606 42.104 101.546 42.104 100.441C42.104 99.336 42.6025 98.2762 43.4897 97.4948Z"
                  fill="white"
                  fill-opacity="0.7"
                />
              </g>
              <defs>
                <clipPath id="clip0_146_1677">
                  <rect
                    width="106.988"
                    height="106.988"
                    fill="white"
                    transform="matrix(-0.750454 0.660923 0.750454 0.660923 80.2891 0.267578)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="flow-root sm:flex flex-row gap-0 items-start justify-start self-stretch shrink-0 relative">
            {design?.map((text, index) => (
              <div key={index}>
                <Table text={text} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Skills;
