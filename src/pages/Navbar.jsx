import React from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <div class="pt-5 pr-[50px] pb-5 pl-[50px] flex flex-row items-center justify-between self-stretch shrink-0 relative overflow-hidden">
      <div class="text-[#ffffff] text-center font-['JejuGothic-Regular',_sans-serif] text-5xl font-normal relative select-none">
        &lt; IIM /&gt;
      </div>
      <div class="flex flex-row gap-[50px] items-center justify-start self-stretch shrink-0 relative">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <div class="hover:border-solid hover:border-[#006400] hover:border-b-2 flex flex-row items-center justify-between self-stretch shrink-0 relative">
            <div class="hover:text-[#006400] text-text-color text-left font-['Inter-Regular',_sans-serif] text-2xl font-normal relative">
              Home
            </div>
          </div>
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <div class="hover:border-solid hover:border-[#006400] hover:border-b-2 flex flex-row items-center justify-between self-stretch shrink-0  relative">
            <div class="hover:text-[#006400] text-text-color text-left font-['Inter-Regular',_sans-serif] text-2xl font-normal relative">
              About me
            </div>
          </div>
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <div class="hover:border-solid hover:border-[#006400] hover:border-b-2 flex flex-row items-center justify-between self-stretch shrink-0 relative">
            <div class="hover:text-[#006400] text-text-color text-left font-['Inter-Regular',_sans-serif] text-2xl font-normal relative">
              Skills
            </div>
          </div>
        </Link>
        <Link
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <div class="hover:border-solid hover:border-[#006400] hover:border-b-2 flex flex-row items-center justify-between self-stretch shrink-0 relative">
            <div class="hover:text-[#006400] text-text-color text-left font-['Inter-Regular',_sans-serif] text-2xl font-normal relative">
              Portfolio
            </div>
          </div>
        </Link>
        <Link
          activeClass="active"
          to="education"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <div class="hover:border-solid hover:border-[#006400] hover:border-b-2 flex flex-row items-center justify-between self-stretch shrink-0 relative">
            <div class="hover:text-[#006400] text-text-color text-left font-['Inter-Regular',_sans-serif] text-2xl font-normal relative">
              Education
            </div>
          </div>
        </Link>
      </div>
      <div class="flex flex-row items-center justify-between shrink-0 w-[174px] relative">
        <div class="text-[#919191] text-left font-['Inter-Regular',_sans-serif] text-2xl font-normal relative">
          EN
        </div>
        <svg
          class="shrink-0 w-8 h-8 relative overflow-visible"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 14.81L28.78 6.6C28.2662 6.21461 27.6423 6.0043 27 6H5C4.35774 6.0043 3.73381 6.21461 3.22 6.6L16 14.81Z"
            fill="#919191"
          />
          <path
            d="M16.54 16.3901L16.37 16.4701H16.29C16.1979 16.5112 16.1001 16.5382 16 16.5501C15.917 16.5605 15.833 16.5605 15.75 16.5501H15.67L15.5 16.4701L2.1 7.81006C2.03598 8.0516 2.00238 8.30019 2 8.55006V22.5501C2 23.3457 2.31607 24.1088 2.87868 24.6714C3.44129 25.234 4.20435 25.5501 5 25.5501H27C27.7956 25.5501 28.5587 25.234 29.1213 24.6714C29.6839 24.1088 30 23.3457 30 22.5501V8.55006C29.9976 8.30019 29.964 8.0516 29.9 7.81006L16.54 16.3901Z"
            fill="#919191"
          />
        </svg>
        <svg
          class="shrink-0 w-8 h-8 relative overflow-visible"
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 4.8C30 2.7 28.3 1 26.2 1H7.8C5.7 1 4 2.7 4 4.8V29.2C4 31.3 5.7 33 7.8 33H26.2C28.3 33 30 31.3 30 29.2V4.8ZM28 29.2C28 30.2 27.2 31 26.2 31H7.8C6.8 31 6 30.2 6 29.2V4.8C6 3.8 6.8 3 7.8 3H26.2C27.2 3 28 3.8 28 4.8V29.2Z"
            fill="#919191"
          />
          <path
            d="M10.9 18.9999H22.7C23 18.9999 23.3 18.8999 23.5 18.5999C23.7 18.3999 23.8 18.0999 23.7 17.7999C23.3 15.3999 21.8 13.4999 19.8 12.5999C20.4 11.8999 20.8 10.9999 20.8 9.8999C20.8 7.6999 19 5.8999 16.8 5.8999C14.6 5.8999 12.8 7.6999 12.8 9.8999C12.8 10.8999 13.2 11.7999 13.8 12.5999C11.8 13.5999 10.2 15.4999 9.9 17.7999C9.9 18.0999 9.9 18.3999 10.1 18.5999C10.3 18.8999 10.6 18.9999 10.9 18.9999ZM14.8 9.9999C14.8 8.8999 15.7 7.9999 16.8 7.9999C17.9 7.9999 18.8 8.8999 18.8 9.9999C18.8 11.0999 17.9 11.9999 16.8 11.9999C15.7 11.9999 14.8 11.0999 14.8 9.9999ZM16.8 13.9999C18.8 13.9999 20.6 15.1999 21.4 16.9999H12.2C13 15.1999 14.8 13.9999 16.8 13.9999ZM25 21.9999H9C8.4 21.9999 8 22.3999 8 22.9999C8 23.5999 8.4 23.9999 9 23.9999H25C25.6 23.9999 26 23.5999 26 22.9999C26 22.3999 25.6 21.9999 25 21.9999ZM25 25.9999H9C8.4 25.9999 8 26.3999 8 26.9999C8 27.5999 8.4 27.9999 9 27.9999H25C25.6 27.9999 26 27.5999 26 26.9999C26 26.3999 25.6 25.9999 25 25.9999Z"
            fill="#919191"
          />
        </svg>
      </div>
    </div>
  );
};

export default NavBar;
