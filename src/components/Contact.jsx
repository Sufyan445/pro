import { FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contact">
      <h1 className="text-6xl font-thin">Contact</h1>
      <p className=" mt-[10px] text-xl"> Let's connect! Feel free to reach out and connect with me on.</p>

      <a
        className="w-fit  flex items-center mt-[20px] gap-[5px] "
        href="https://github.com/Sufyan445"
        target="_blank"
      >
        <FaGithub className="text-white text-4xl" />
        <h2>Github</h2>
      </a>
      <div className="flex items-center mt-[20px] gap-[5px] ">
        <MdOutlineMail className="text-4xl" />
        <a href="mailto:sufyanhassan123321@gmail.com">
          sufyanhassan123321@gmail.com
        </a>
      </div>
      <div className="flex items-center mt-[20px] gap-[5px] ">
        <FaPhoneAlt className="text-4xl" />
        <a href="tel:+923192658349">+92 3192658349</a>
      </div>
    </div>
  );
};

export default Contact;
