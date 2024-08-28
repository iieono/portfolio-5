import React from "react";

function About() {
  return (
    <div className="lg:w-10/12 h-full jetbrains font-extralight text-sm lg:text-base about overflow-auto">
      {/* <InteractiveBackground /> */}
      <div className="flex flex-col lg:flex-row w-full gap-10 h-full p-5 lg:p-20 overflow-scroll">
        {/* first side */}
        <div className="h-full w-full p-2 pt-3 flex flex-col gap-5 lg:gap-10 overflow-visible">
          <div className="lg:w-10/12 h-screen flex flex-col justify-between lg:justify-start gap-2 overflow-visible">
            <div className=" text-3xl lg:text-[9rem] italic leading-none sofia ">Hello<span className="text-lead ital">!</span> </div>
            <div className="overflow-visible text-sm lg:text-base leading-7 lg:leading-7 pt-2 lg:pt-5 lg:px-3">
              My name is Abdusamadbek Akhmadjonov. I'm a UX/UI designer and
              full-stack developer based in Uzbekistan. My passion for
              technology drives me to continually explore and learn new aspects
              of the field. I am dedicated to creating engaging designs and
              building effective solutions, always eager to expand my knowledge.
            </div>
            <div className="bg-lead rounded-full blur-xl w-40 h-40 self-center"></div>
          </div>
          {/* <div className="flex flex-col gap-3">
            <div className="text-lg lg:text-2xl">
              Let's connect{" "}
              <span className="font-bold text-gradient">[AVAILABLE]</span>{" "}
            </div>
            <div className="flex gap-8 links-container ">
              <div className="flex lg:flex-col gap-6 lg:gap-3 links-name-container">
                <div className="cursor-pointer email-link">Email</div>
                <div className="cursor-pointer github-link">Github</div>
                <div className="cursor-pointer cv-link h">CV</div>
              </div>
              <div className="lg:flex hidden flex-col items-start gap-3 overflow-hidden">
                <div className="cursor-pointer overflow-hidden email-arrow">
                  [copy]
                </div>
                <div className="cursor-pointer overflow-hidden github-arrow">{`->`}</div>
                <div className="cursor-pointer overflow-hidden cv-arrow h-max">{`->`}</div>
              </div>
            </div>
          </div> */}
        </div>
        {/* second side */}
        <div className="h-full w-full lg:w-2/3 p-2 flex flex-col items-end justify-end gap-10 overflow-visible">
          <div className="flex h-full flex-wrap gap-x-10">
            <div className="skill-item">Nextjs</div>
            <div className="skill-item">Nextjs</div>
            <div className="skill-item">Nextjs</div>
            <div className="skill-item">Nextjs</div>
            <div className="skill-item">Nextjs</div>
            <div className="skill-item">Nextjs</div>
            <div className="skill-item">Nextjs</div>
            <div className="skill-item">Nextjs</div>
            <div className="skill-item">Nextjs</div>
            <div className="skill-item">Nextjs</div>
            <div className="skill-item">Nextjs</div>
            <div className="skill-item">Nextjs</div>
            <div className="skill-item">Nextjs</div>
            <div className="skill-item">Nextjs</div>
          </div>
          <div className="flex h-full flex-wrap gap-x-10">
            <div className="skill-item">Blender</div>
            <div className="skill-item">Blender</div>
            <div className="skill-item">Blender</div>
            <div className="skill-item">Blender</div>
            <div className="skill-item">Blender</div>
            <div className="skill-item">Blender</div>
            <div className="skill-item">Blender</div>
            <div className="skill-item">Blender</div>
            <div className="skill-item">Blender</div>
            <div className="skill-item">Blender</div>
            <div className="skill-item">Blender</div>
            <div className="skill-item">Blender</div>
            <div className="skill-item">Blender</div>
          </div>
          <div className="h-full">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
            quos repellendus amet laudantium tempore ipsum. Cum pariatur,
            eveniet perspiciatis ullam est doloremque consequuntur, neque
            quaerat nemo voluptatum laborum voluptas soluta. Nihil consequatur
            vitae fugit deleniti maxime, obcaecati iusto numquam est.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
