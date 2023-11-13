import Nav from "../Components/Nav";
import Profile from "../assets/Profile_Portfolio-modified.png";
import {
  FaAnglesDown,
  FaArrowDown,
  FaSquarePhone,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <Nav />
      <section
        className="min-h-content lg:p-12 pt-5 bg-[#020202] text-white"
        id="/"
      >
        <div className="w-[80%] mx-auto py-16">
          <div className="flex flex-col gap-4 md:flex-row w-full">
            <div className="order-2 md:order-1 max-w-[702px]">
              <h1 className="text-lg font-Content">Hello!👋 , I'm</h1>
              <h1 className="text-4xl py-3  font-Content font-bold">
                Arun <span className="text-[#8F5CF8]">Kumar</span>
              </h1>
              <p className="font-Content text-justify">
                Aspiring Full Stack Developer with a proficiency in the MERN
                (MongoDB, Express.js, React.js, Node.js) stack. Adept at
                architecting and implementing end-to-end solutions, I bring a
                wealth of experience in designing and deploying robust web
                applications. My collaborative approach, coupled with a
                commitment to staying at the forefront of technology trends,
                ensures the delivery of scalable and cutting-edge solutions.
                Passionate about creating seamless user experiences, I thrive in
                dynamic environments where innovation and efficiency are
                paramount.
              </p>

              <button className="w-65 mt-4 px-4 py-2 rounded-lg text-white text-md font-semibold bg-gradient-to-r from-indigo-500 flex items-center space-x-2 to-white/30 hover:bg-indigo-600">
                <p>Hire Me</p> <FaArrowDown />
              </button>
              {/*Contact Details */}
              <div className="flex space-x-4 items-center py-7">
                <FaSquarePhone size={23}/>
                <FaGithub size={23}/>
                <FaLinkedin size={23}/>
              </div>
            </div>
            <div className="order-1 mx-auto md:order-2">
              <img
                src={Profile}
                alt="Profile"
                className="w-72 h-72 md:w-96 md:h-96"
              />
            </div>
          </div>

          <footer className="flex gap-x-3 items-center relative py-56 justify-center">
            <p className="font-semibold text-2xl font-Profile1">
              Scroll <span className="text-indigo-500">D o w n</span>
            </p>
            <div className="animate-bounce">
              <FaAnglesDown size={23} className="text-indigo-600" />
            </div>
          </footer>
        </div>
      </section>
    </>
  );
};

export default Home;
