import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaArrowRight } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link, animateScroll as scroll } from "react-scroll";

const Nav = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);

  // Social Media Link
  const githubLink = "https://github.com/Arun-DevOfficial";
  const linkedinLink = "https://www.linkedin.com/in/arun-kumar-d-374775211/";

  useEffect(() => {
    Aos.init();
    setIsOpenNav(false); // Initialize mobile menu state to closed
  }, []);

  return (
    <>
      <header
        className="bg-[#020202]/90 h-22 min-w-max p-6 sticky top-0 backdrop-blur-lg shadow-sm text-white"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <nav className="container mx-auto flex justify-between items-center font-Content">
          <h1
            onClick={() => scroll.scrollToTop()}
            className="cursor-pointer text-xl font-bold font-logo"
          >
            A r u n
          </h1>
          <ul className="hidden md:flex space-x-12 font-Content">
            {[
              { to: "/", label: "Home" },
              { to: "about", label: "About" },
              { to: "experience", label: "Experience" },
              { to: "services", label: "Services" },
              { to: "projects", label: "Projects" },
              { to: "contact", label: "Contact" },
            ].map(({ to, label }, index) => (
              <Link
                key={index}
                to={to}
                className="hover:border-b-2 hover:border-violet-600 cursor-pointer border-b-2 border-transparent transition-border-color duration-300"
                smooth={true}
              >
                {label}
              </Link>
            ))}
          </ul>

          <div className="hidden md:flex space-x-4">
            <SocialIcon
              icon={<FaGithub size={22} />}
              onClick={() => (window.location = githubLink)}
            />
            <SocialIcon
              icon={<FaLinkedin size={22} />}
              onClick={() => (window.location = linkedinLink)}
            />
          </div>

          <div onClick={() => setIsOpenNav(!isOpenNav)} className="md:hidden">
            {!isOpenNav ? <FaArrowRight /> : <FaBars />}
          </div>

          <MobileMenu isOpenNav={isOpenNav} />
        </nav>
      </header>
    </>
  );
};

const SocialIcon = ({ icon, onClick }) => (
  <div onClick={onClick} className="cursor-pointer">
    {icon}
  </div>
);

const MobileMenu = ({ isOpenNav }) => (
  <div
    className={
      !isOpenNav
        ? "fixed left-0 top-0 min-h-screen shadow-lg bg-white w-[70%] ease-in-out duration-500 p-12 md:hidden"
        : "fixed left-[-100%] p-12 ease-out duration-500 md:hidden"
    }
  >
    <h1 className="mb-8 text-4xl font-semibold text-black">Arun</h1>
    <ul className="flex flex-col mt-6 justify-center text-black">
      {[
        { to: "/", label: "Home" },
        { to: "about", label: "About" },
        { to: "experience", label: "Experience" },
        { to: "services", label: "Services" },
        { to: "projects", label: "Projects" },
        { to: "contact", label: "Contact" },
      ].map(({ to, label }, index) => (
        <Link
          key={index}
          to={to}
          className="hover:border-b-2 hover:border-violet-600 cursor-pointer border-b-2 border-transparent transition-border-color duration-300 py-5"
          smooth={true}
        >
          {label}
        </Link>
      ))}
    </ul>
  </div>
);

export default Nav;
