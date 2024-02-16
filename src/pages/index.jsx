import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import React from "react";
import Typed from "typed.js";
import { useState, useRef, useEffect } from "react";

const index = () => {
  const el = React.useRef(null);

  // Create reference to store the DOM element containing the animation

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Assalam U Alaikum.^1000",
        "Hi,Whats up.^500",
        "Hola^500",
        "Olá^500",
        "Hallo^500",
        "Bonjour^500",
        "Ciao^500",
        "Merhaba^500",
      ],
      typeSpeed: 40,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, [el]);

  return (
    <div>
      <Header />
      <div className="ml-[20px] flex flex-col items-start sm:ml-[100px]">
        <div className="about">
          <div>
            <span className="text-6xl" ref={el} />
          </div>
          <p className="mt-[20px] text-xl">My name is</p>
          <h1 className="text-6xl font-thin ">Syed Sufyan Hassan</h1>
          <p className="mt-[50px] text-xl">
            A passionate frontend developer with a love for <br /> creating
            engaging and user-friendly web experiences.
            <br />I am driven by the desire to create seamless and visually
            <br />
            appealing interfaces that not only meet but exceed user
            expectations.
          </p>
        </div>
      </div>
      <div className="mt-[100px] ml-[20px] sm:ml-[100px]">
        <Skills />
      </div>
      <div className="mt-[100px] sm:ml-[100px] sm:mr-[100px]">
        <Projects />
      </div>
      <div className="mt-[100px] ml-[20px] mb-[30px] sm:mt-[250px] sm:ml-[100px]">
        <Contact />
      </div>
      <div className="text-center">
        <h1 className="text-gray-500">
          Built and Designed by Syed Sufyan Hassan
        </h1>
      </div>
    </div>
  );
};
export default index;
