import React, { useState } from "react";
import projects from "../utili/obj";
import CardsCenter from "../components/CardsCenter";
import Cards from "../components/Cards";
import { Element } from "react-scroll";

const Portofolio = () => {
  const [position, setPosition] = React.useState(0);
  const [isBouncing, setIsBouncing] = useState(false);

  return (
    <Element
      name="portfolio"
      class="pr-[20px] pl-[20px] sm:pr-[50px] sm:pl-[50px] pt-3 pb-3 flex flex-col gap-10 items-start justify-start self-stretch shrink-0 relative"
    >
      <div class="self-stretch shrink-0 sm:h-[5px] md:h-[10px] lg:h-[20px] xl:h-[32px] relative">
        <div
          class="text-[#006400] text-left font-['JejuGothic-Regular',_sans-serif] text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 
        font-normal absolute flex items-center justify-start"
        >
          Portofolio
        </div>
      </div>
      <div class="flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative">
        <div class="flex flex-row gap-2.5 items-center justify-end self-stretch shrink-0 relative">
          <div class="text-[#919191] text-left font-['Inter-Regular',_sans-serif] sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal relative flex-1">
            Click to see the richer content of my top projects more clearly
            <br />
          </div>
        </div>
      </div>
      <div
        className={
          "flex flex-row gap-[30px] items-end justify-center self-stretch shrink-0 relative" +
          (isBouncing ? " animate-pulse  " : "")
        }
      >
        <Cards
          projects={
            projects[(position - 2 + 10 * projects.length) % projects.length]
          }
        />
        <Cards
          projects={
            projects[(position - 1 + 10 * projects.length) % projects.length]
          }
        />
        <CardsCenter
          position={position}
          setPosition={setPosition}
          isBouncing={isBouncing}
          setIsBouncing={setIsBouncing}
          projects={
            projects[(position + 10 * projects.length) % projects.length]
          }
        />
        <Cards
          projects={
            projects[(position + 1 + 10 * projects.length) % projects.length]
          }
        />
        <Cards
          projects={
            projects[(position + 2 + 10 * projects.length) % projects.length]
          }
        />
      </div>
    </Element>
  );
};

export default Portofolio;
