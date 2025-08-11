import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import Green_Star from "../Images/GREEN STAR LOGO.svg";
import NavBarItems from "./NavBarItems";
import Navigations from "./Navigations";

const Navbar = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [active, setActive] = useState("");

  function toggleDropDown() {
    setShowDropDown((prev) => !prev);
  }

  const handleScrollTo = (id: string) => {
    const offset = 80; // header height
    const el = document.getElementById(id);
    if (el) {
      const top = el.offsetTop - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setShowDropDown(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120; // adjust buffer
      const sections = document.querySelectorAll<HTMLElement>("section[id]");
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollY >= top && scrollY < top + height) {
          setActive(section.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-10 bg-white">
      <div className="flex relative justify-between items-center px-6 py-2 bg-white">
        <img src={Green_Star} alt="Green star" className="lg:w-[15%] w-[55%]" />
        <div className="hidden lg:block">
          <ul className="flex items-center justify-end list-none gap-3">
            <Navigations onLinkClick={handleScrollTo} activeSection={active} />
          </ul>
        </div>
        <div className="lg:hidden flex relative items-center p-0">
          <button
            onClick={toggleDropDown}
            className="text-2xl flex cursor-pointer"
          >
            <RxHamburgerMenu />
          </button>
        </div>
        {showDropDown && (
          <div className="absolute z-10 top-0 right-0 bg-white w-[60%] border rounded-[10px] py-3 px-4 delay-500 ease-in-out transition-all duration-500 overflow-y-auto h-[100vh] flex flex-col">
            <button
              className="ml-auto text-[1.25rem] cursor-pointer"
              onClick={() => setShowDropDown(false)}
            >
              <IoClose />
            </button>
            <NavBarItems onLinkClick={handleScrollTo} activeSection={active} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
