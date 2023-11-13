import { useState } from "react";
import Profile from "../assets/Profile_Portfolio-modified.png";
import CV from "../assets/Arunkumar.pdf";
import { FaRegStar } from "react-icons/fa6";

const About = () => {
  const [starStates, setStarStates] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  let [reviewsCount, setReviewsCout] = useState(69);

  const handleStarClick = (index) => {
    const newStarStates = [...starStates];
    newStarStates[index] = !newStarStates[index];
    setStarStates(newStarStates);
    setReviewsCout((reviewsCount = reviewsCount + 1));
  };
  return (
    <>
      <section className="min-h-screen bg-[#1B2430] pt-20" id="about">
        <div className="w-[80%] mx-auto text-white">
          <h1 className="text-center font-bold font-Content text-3xl uppercase">
            About Me
          </h1>
          <div className="flex flex-col justify-around lg:flex-row w-full py-20">
            <div className="mx-auto">
              <img
                src={Profile}
                alt="ProfilePhoto"
                className="w-72 h-72 md:w-96 md:h-96 mx-auto lg:mx-0"
              />
            </div>
            <div className="max-w-[700px]">
              <h1 className="text-4xl font-semibold font-Content">
                Hello, I'm <span className="text-indigo-500">Arunkumar</span>
              </h1>
              <h1 className="font-light text-md py-2">
                Full Stack Developer - MERN
              </h1>
              <p className="font-Content text-md text-justify">
                Aspiring Full Stack Developer with a proficiency in the MERN
                (Mysql, Express.js, React.js, Node.js) stack. Adept at
                architecting and implementing end-to-end solutions, I bring a
                wealth of experience in designing and deploying robust web
                applications. My collaborative approach, coupled with a
                commitment to staying at the forefront of technology trends,
                ensures the delivery of scalable and cutting-edge solutions.
                Passionate about creating seamless user experiences, I thrive in
                dynamic environments where innovation and efficiency are
                paramount.
              </p>
              <div className="pt-5 flex space-6 lg:space-x-6 text-center flex-col md:flex-row">
                <a
                  href={CV}
                  className="font-medium text-lg shadow-sm mb-4 rounded-lg px-4 py-2 hover:bg-indigo-500 border-2 border-indigo-600"
                >
                  Download CV
                </a>
                <button className="font-medium text-lg shadow-sm mb-4 rounded-lg px-4 py-2 hover:text-indigo-500 border-2 border-indigo-500">
                  Learn More
                </button>
              </div>
              <div className="flex space-x-5 p-6">
                {starStates.map((isClicked, index) => (
                  <>
                    <FaRegStar
                      key={index}
                      size={24}
                      onClick={() => handleStarClick(index)}
                      className={`cursor-pointer ${
                        isClicked ? "text-yellow-500" : "text-gray-500"
                      }`}
                    />
                  </>
                ))}
                <p>{`(${reviewsCount} reviews)`}</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center items-center pt-12 text-center">
            <div>
              <h1 className="text-4xl font-semibold text-indigo-400">10+</h1>
              <p className="font-medium uppercase font-Headerfont pt-2">S u c c e s s</p>
            </div>
            <div>
              <h1 className="text-4xl font-semibold text-indigo-400">10+</h1>
              <p className="font-medium uppercase font-Headerfont pt-2">P r o j e c t s</p>
            </div>
            <div>
              <h1 className="text-4xl font-semibold text-indigo-400">6+</h1>
              <p className="font-medium uppercase font-Headerfont pt-2">P r o g r e s s</p>
            </div>
            <div>
              <h1 className="text-4xl font-semibold text-indigo-400">4+</h1>
              <p className="font-medium uppercase font-Headerfont pt-2">U p c o m i n g</p>
            </div>
            <div>
              <h1 className="text-4xl font-semibold text-indigo-400">2+</h1>
              <p className="font-medium uppercase font-Headerfont pt-2">T e a m W o r k</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
