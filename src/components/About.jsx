import React from "react";

function About() {
  return (
    <div className="lg:w-10/12 h-full jetbrains font-extralight text-sm lg:text-base about overflow-auto">
      {/* <InteractiveBackground /> */}
      <div className="flex flex-col lg:flex-row w-full gap-10 h-full p-5 lg:p-20 overflow-scroll">
        {/* first side */}
        <div className="h-full w-full p-2 pt-3 flex flex-col gap-5 lg:gap-10 overflow-visible">
          <div className="lg:w-4/5 h-screen flex flex-col justify-between lg:justify-start gap-2 overflow-visible">
            <div className=" text-3xl lg:text-[8rem] italic leading-none sofia ">Hello<span className="text-lead ital">!</span> </div>
            <div className="overflow-visible text-sm lg:text-base leading-7 lg:leading-7 pt-2  lg:pt-5 lg:px-3">
              My name is Abdusamadbek Akhmadjonov. I'm a UX/UI designer and
              full-stack developer based in Uzbekistan. My passion for
              technology drives me to continually explore and learn new aspects
              of the field. I am dedicated to creating engaging designs and
              building effective solutions, always eager to expand my knowledge.
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div className="bg-lead rounded-full lg:mt-10 blur-xl hover:blur-md transition-all duration-700 w-40 h-40 self-center"></div>
          </div>
        </div>
        {/* second side */}
        <div className="h-[70%] lg:h-[70%] min-h-[70%] w-full lg:w-2/3 p-2 flex flex-col self-end items-end justify-end gap-10 overflow-visible">
          
        </div>
      </div>
    </div>
  );
}

export default About;
