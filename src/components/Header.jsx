import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../../public/favicon-32x32.png";

const Header = () => {
  const router = useRouter();

  function download() {
    router.push("/SYED-SUFYAN-HASSAN.pdf")
  }
  function scrolling(id) {
    let selected = document.getElementsByClassName(id);
    selected[0].scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  }
  return (
    <nav className="mb-[80px] flex justify-start">
      <div className="bg-[#176B87] text-[#64CCC5]  h-[50px] z-50 fixed w-[100%] flex justify-center items-center sm:justify-start sm:items-center">
        <div>
          <Image className="mr-[20px] sm:ml-[20px]" src={logo} alt="logo" />
        </div>
        <div className="flex gap-[10px] sm:gap-[30px] sm:w-[100%] sm:justify-end">
          <h4
            className="hover:cursor-pointer font-thin select-none"
            onClick={() => {
              scrolling("about");
            }}
          >
            About
          </h4>
          <h4
            className="hover:cursor-pointer font-thin select-none"
            onClick={() => {
              scrolling("skills");
            }}
          >
            Expertise
          </h4>
          <h4
            className="hover:cursor-pointer font-thin select-none"
            onClick={() => {
              scrolling("projects");
            }}
          >
            Projects
          </h4>
          <h4
            className="hover:cursor-pointer font-thin select-none"
            onClick={() => {
              scrolling("contact");
            }}
          >
            Contact
          </h4>
          <button onClick={download} className="border-2 p-[2px] shadow-md shadow-[#64CCC5] border-[#64CCC5] w-[80px] sm:mr-[40px]">
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
