import Image from "next/image";
import weather from "../../public/weather.png";
import food from "../../public/food.png";
import quran from "../../public/quran.png";
import myblawg from "../../public/myblawg.png";
import { FaLink } from "react-icons/fa6";
const Projects = () => {
  return (
    <div className="projects">
      <h1 className="ml-[20px] text-6xl font-thin sm:ml-0 ">Projects</h1>
      <p className="mt-[20px]  ml-[20px] text-xl sm:ml-0">
        Check out some of my projects and <br /> get a sense of my coding style
      </p>
      <div className="mt-[100px]  ">
        <div className="flex justify-center items-center sm:items-start sm:justify-start">
          <Image
            src={weather}
            className="h-[250px] w-[300px] object-cover rounded-md sm:w-[55%] sm:h-[50%] sm:absolute sm:-z-10"
          />
        </div>
        <div className="flex flex-col sm:items-end ">
          <h1 className="text-4xl w-[100%] text-center font-thin mt-[20px] sm:mb-[10px] sm:text-end">
            Gamma Weather
          </h1>
          <div className="p-[15px] w-[100%] rounded-2xl mt-[5px] sm:z-10 sm:bg-[#058c42] sm:w-[55%]">
            <p className="text-xl">
              A dynamic and user-friendly weather web application, providing
              real-time weather updates and forecasts. Users can stay informed
              about current conditions and plan their activities with ease.
            </p>
          </div>
          <a
            className="w-fit ml-[15px]"
            href="https://gammaweather.netlify.app/"
            target="_blank"
          >
            <FaLink className="mt-[10px]" />
          </a>
        </div>
      </div>
      <div className="mt-[100px] sm:mt-[300px] ">
        <div className="flex justify-center items-center sm:items-start sm:justify-end">
          <Image
            src={food}
            className="h-[250px] w-[300px] object-cover rounded-md sm:w-[55%] sm:h-[50%] sm:absolute sm:-z-10"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-4xl w-[100%] text-center font-thin mt-[20px] sm:mb-[10px]  sm:text-start">
            Taste Flavours
          </h1>
          <div className=" p-[15px] w-[100%] rounded-2xl mt-[5px] sm:z-10 sm:bg-[#058c42] sm:w-[55%]">
            <p className="text-xl">
              Crafted a delightful food recipe hub where culinary enthusiasts
              can discover, share, and indulge in a variety of recipes. From
              mouth-watering dishes to cooking tips, the platform celebrates the
              joy of cooking and gastronomic exploration.
            </p>
          </div>
          <a
            className="w-fit ml-[15px]"
            href="https://tasteflavours.netlify.app/"
            target="_blank"
          >
            <FaLink className="mt-[10px]" />
          </a>
        </div>
      </div>
      <div className="mt-[100px] sm:mt-[290px]">
        <div className="flex justify-center items-center sm:items-start sm:justify-start">
          <Image
            src={quran}
            className="h-[250px] w-[300px] object-cover rounded-md sm:w-[55%] sm:h-[50%] sm:absolute sm:-z-10"
          />
        </div>
        <div className="flex flex-col sm:items-end ">
          <h1 className="text-4xl w-[100%] text-center font-thin mt-[20px] sm:mb-[10px]  sm:text-end ">
            Al Quran Majeed
          </h1>
          <div className=" p-[15px] w-[100%] rounded-2xl mt-[5px] sm:z-10 sm:bg-[#058c42] sm:w-[55%]">
            <p className="text-xl">
              Developed a user-friendly Quran web application, fostering a
              seamless digital experience for reading and exploring the Holy
              Quran. The platform incorporates features for easy navigation,
              translations, and enriches the spiritual journey for users around
              the world.
            </p>
          </div>
          <a
            className="w-fit ml-[15px]"
            href="https://al-quranmajeed.netlify.app/"
            target="_blank"
          >
            <FaLink className="mt-[10px]" />
          </a>
        </div>
      </div>
      <div className="mt-[100px] sm:mt-[300px] ">
        <div className="flex justify-center items-center sm:items-start sm:justify-end">
          <Image
            src={myblawg}
            className="h-[250px] w-[300px] object-cover rounded-md sm:w-[55%] sm:h-[55%] sm:absolute sm:-z-10"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-4xl w-[100%] text-center font-thin mt-[20px] sm:mb-[10px]  sm:text-start">
            My Blawg
          </h1>
          <div className=" p-[15px] w-[100%] rounded-2xl mt-[5px] sm:z-10 sm:bg-[#058c42] sm:w-[55%] ">
            <p className="text-xl">
              Designed and developed a robust blog platform that empowers users
              to share their thoughts and experiences. The intuitive interface
              and powerful features make it a perfect space for creative
              expression and meaningful discussions.
            </p>
          </div>
          <a
            className="w-fit ml-[15px]"
            href="https://myblawg.netlify.app/"
            target="_blank"
          >
            <FaLink className="mt-[10px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
