"use client";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import SignupForm from "@/components/SignupForm";

const About = () => {
  const [toggleTab, setToggleTab] = useState(1);
  const toggleState = (index) => {
    setToggleTab(index);
  };

  return (
    <Fragment>
      <section className="about py-20 bg-white">
        <div className="flex flex-col justify-center items-center md:flex-row">
          <div className="w-full md:w-3/5 mb-8 md:mb-0">
            <div className="h-auto rounded-full overflow-hidden">
              <Image
                src="/about-us.jpg"
                alt="about us"
                // fill={true}
                className="mx-auto p-6"
                width={920} // Reduce the width
                height={920} // Increase the height
              />
            </div>
          </div>

          <div className="w-3/5">
            <div className="flex">
              <div
                className={`${
                  toggleTab === 1 ? "active-tab bg-blue-300" : "bg-gray-200"
                } single-tab cursor-pointer`}
                onClick={() => toggleState(1)}
              >
                <h2 className="p-4 rounded-md text-bisque font-semibold text-sm">
                  ABOUT
                </h2>
              </div>

              <div
                className={`${
                  toggleTab === 2 ? "active-tab bg-blue-300" : "bg-gray-200"
                } single-tab cursor-pointer`}
                onClick={() => toggleState(2)}
              >
                <h2 className="p-4 rounded-md text-bisque font-semibold text-sm">
                  SKILLS
                </h2>
              </div>

              <div
                className={`${
                  toggleTab === 3 ? "active-tab bg-blue-300" : "bg-gray-200"
                } single-tab cursor-pointer`}
                onClick={() => toggleState(3)}
              >
                <h2 className="p-4 rounded-md text-bisque font-semibold text-sm">
                  EXPERIENCE
                </h2>
              </div>
            </div>

            <div className="tab-content">
              {/* About Us Content */}
              <div
                className={`${
                  toggleTab === 1 ? "active-content" : "hidden"
                } content`}
              >
                <h2 className="text-4xl font-extrabold leading-1.4 mb-2 ml-3 pt-4 text-black">
                  Our Story
                </h2>
                <p className="p-4 text-base leading-1.8 font-normal text-gray-900">
                  As third-year computer science students, we&#39;ve immersed
                  ourselves in a diverse range of skills essential for the
                  ever-evolving tech landscape. Proficient in languages such as
                  Python and Javascript, we bring a strong foundation in
                  programming to the table. Our exploration extends to web
                  development, where we&#39;ve embraced HTML, Next, Tailwind,
                  CSS, and JavaScript for crafting dynamic user interfaces. Data
                  structures and algorithms are not just theoretical concepts;
                  they&#39;re tools we leverage for creative problem-solving.
                </p>
                <p className="p-4 text-base leading-1.8 font-normal text-gray-900">
                  With a keen interest in databases, we&#39;ve mastered both SQL
                  and NoSQL systems, ensuring efficient data management.
                  Collaboration is at the heart of our approach, supported by a
                  solid understanding of software development life cycles and
                  version control systems like Git. We are not just coders but
                  collaborators in the vibrant world of computer science.
                </p>
              </div>
              {/* Skills Content */}
              <div
                className={`${
                  toggleTab === 2 ? "active-content" : "hidden"
                } content`}
              >
                <h2 className="text-4xl font-extrabold leading-1.4 mb-2 ml-3 pt-4 text-black">
                  Skills
                </h2>
                <p className="p-4 text-base leading-1.8 font-normal text-gray-900">
                  In our third year as computer science students, we&#39;ve
                  adeptly navigated a spectrum of skills crucial for today&#39;s
                  tech realm. Our programming prowess now spans Python, Java,
                  and C++, while web development proficiency includes mastery of
                  HTML, Next, Tailwind, CSS, and JavaScript. Data structures and
                  algorithmic problem-solving are second nature, as is the
                  efficient management of both SQL and NoSQL databases. Version
                  control with Git, software development life cycle
                  understanding, and collaborative coding are integral aspects
                  of my skill set. Networking concepts, cybersecurity awareness,
                  and experience in cloud platforms contribute to our
                  comprehensive tech toolkit, demonstrating a dynamic and
                  adaptable skill growth in two years.
                </p>
                <div className="skills-row pl-5">
                  <div className="skills-column">
                    <div className="progress-wrap">
                      <h3 className="text-xs font-semibold uppercase">
                        Developers
                      </h3>
                      <div className="progress">
                        <div
                          className="progress-bar bg-blue-500"
                          style={{ width: "80%" }}
                        >
                          <span className="text-a2a9b1">70%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="skills-column">
                    <div className="progress-wrap">
                      <h3 className="text-xs font-semibold uppercase">
                        Designer
                      </h3>
                      <div className="progress">
                        <div
                          className="progress-bar bg-blue-500"
                          style={{ width: "90%" }}
                        >
                          <span className="text-a2a9b1">80%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="skills-column">
                    <div className="progress-wrap">
                      <h3 className="text-xs font-semibold uppercase">
                        Javascript
                      </h3>
                      <div className="progress">
                        <div
                          className="progress-bar  bg-blue-500"
                          style={{ width: "85%" }}
                        >
                          <span className="text-a2a9b1">70%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Experience Content */}
              <div
                className={`${
                  toggleTab === 3 ? "active-content" : "hidden"
                } content`}
              >
                <div className="exp-column">
                  <h3 className="text-xl font-semibold leading-1.5 mb-2 pt-2">
                    2022
                  </h3>
                  
                  <ul className="mt-2 text-gray-900">
                    <li className="font-bold pb-1">1. Programming Languages:</li>
                    <li> Strengthen proficiency in languages like Python, Java, C++, or others commonly used in the industry.</li>
                    <li className="pb-2"> Explore web development languages like HTML, CSS, and JavaScript.</li>
                    <li className="font-bold pb-1">2. Database Management:</li>
                    <li> Gain experience with both SQL and NoSQL databases.</li>
                    <li className="pb-2"> Learn about database design, normalization, and optimization.</li>
                    <li className="font-bold pb-1">3. Software Development:</li>
                    <li className="pb-1"> Practice version control systems like Git.</li>

                  </ul>
                </div>
                <div className="exp-column">
                  <h3 className="text-xl font-semibold leading-1.5 mb-2">
                    2023
                  </h3>
                  
                  <ul className="mt-2 text-gray-900">
                    <li className="font-bold pb-1">4. Web Development:</li>
                    <li className="pb-1"> Understand front-end technologies like React, Tailwind.css or Next.js.</li>
                
                    <li className="font-bold pb-1">5. Cybersecurity Awareness:</li>
                    <li className="pb-1"> Learn about common cybersecurity threats and measures to prevent them.</li>
                    <li className="pb-2"> Understand the importance of secure coding practices.</li>
                    <li className="font-bold pb-1">6. Problem-Solving Skills:</li>
                    <li className="pb-1"> Engage in programming contests to enhance problem-solving speed.</li>
                    <li className="font-bold pb-1">7. Soft Skills:</li>
                    <li> Improve communication skills for effective collaboration with team members.</li>
                    <li> Develop time management and project management skills.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-auto">
        <SignupForm />
      </div>
    </Fragment>
  );
};

export default About;
