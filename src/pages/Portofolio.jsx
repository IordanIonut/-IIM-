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
      class="pr-[50px] pl-[50px] flex flex-col gap-10 items-start justify-start self-stretch shrink-0 relative"
    >
      <div class="self-stretch shrink-0 h-[52px] relative">
        <div class="text-[#006400] text-left font-['JejuGothic-Regular',_sans-serif] text-[50px] font-normal absolute right-[0%] left-[0%] w-[100%] bottom-[-1.92%] top-[-1.92%] h-[103.85%] flex items-center justify-start">
          Portofolio
        </div>
      </div>
      <div class="flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative">
        <div class="flex flex-row gap-2.5 items-center justify-end shrink-0 w-[1101px] relative">
          <div class="text-[#919191] text-left font-['Inter-Regular',_sans-serif] text-[34px] font-normal relative flex-1">
            Click to see the richer content of my top projects more clearly
            <br />
          </div>
        </div>
      </div>
      <div
        className={
          "flex flex-row items-end justify-between self-stretch shrink-0 relative" +
          (isBouncing ? " animate-pulse  " : "")
        }
      >
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
      </div>
    </Element>
  );
};

export default Portofolio;
