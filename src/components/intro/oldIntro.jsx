import React from "react";

const oldIntro = () => {
  return (
    <section
      id="intro"
      data-section
      className={`mt-section mb-8 sm:flex sm:items-center items-start w-full `}
    >
      <div className="max-w-7xl w-full mx-auto ">
        <div
          className=" mx-auto
        flex items-center "
        >
          <div className="rounded-full  mx-auto w-[210px] h-[210px] object-cover  flex items-center duration-[400ms] transition-all  border-[white] border-2 p-2 ">
            <span className="bg-gradient-to-t to-[#9b77fd]  from-[#455cc4]  w-full h-full inline-block rounded-full transition-all">
              <img
                className="mx-auto w-full h-full object-cover rounded-full"
                src={profilePic}
                alt="Profile-photo"
              />
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 pt-3 pb-2">
          {icons.map((Icon) => (
            <Icon className="text-white text-lg mx-1" />
          ))}
        </div>

        <div className="text-center">
          <div className=" text-xl flex items-center justify-center pb-1">
            <span className="text-white font-semibold">
              Hi, I'm Munna Ahmed
            </span>{" "}
            &nbsp;
            <HiCheckBadge className="text-blue-500 " />
          </div>

          <span className="text-gray-200 w-full max-w-xl mx-auto  xs:text-sm text-[13px] leading-5 block tracking-[1px] pb-4 px-5">
            I'm a &nbsp;
            <span className="xs:w-[6rem] w-[5.8rem] inline-block text-center ">
              <Typewriter
                options={{ autoStart: true, loop: true, delay: 100 }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("<span class='typewriter '>MERN Stack<span/>")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("<span class='typewriter'>Front-End<span/>")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("<span class='typewriter '>React<span/>")
                    .pauseFor(2000)
                    .deleteAll()
                    .start();
                }}
              />
            </span>
            &nbsp; Developer from Bangladesh. I'm self-taught with experience in
            web development, designing and creating responsive and user-friendly
            websites.
          </span>

          <a href="https://drive.google.com/u/0/uc?id=1RhVvtP6IrrtuftlTtwQZAvgmQVRizMcy&export=download">
            <Ripple className="text-white opacity-90 hover:opacity-100 transition-all border-white border py-2 px-3 rounded-sm">
              Download Resume
            </Ripple>
          </a>
        </div>
      </div>
    </section>
  );
};

export default oldIntro;
