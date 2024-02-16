import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

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
      <div className="bg-[#04471c] text-[#16db65]  h-[50px] z-50 fixed w-[100%] flex justify-center gap-[10px] items-center sm:justify-end  sm:gap-[30px]">
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
        <button className="border-2 p-[2px] shadow-md shadow-[#16db65] border-[#16db65] w-[80px] sm:mr-[40px]">Resume</button>
      </div>
    </nav>
  );
};

export default Header;
