const Skills = () => {
  return (
    <div className="skills">
      <h1 className="text-6xl font-thin">Skills And Expertise</h1>
      <p className="mt-[20px] text-xl">The technologies I specialize in</p>
      <div className="flex mt-[20px] text-xl">
        <ul className="list-disc ml-[10px]">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React</li>
        </ul>
        <ul className="list-disc ml-[60px]">
          <li>Tailwind CSS</li>
          <li>Next.js</li>
          <li>Firebase</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
