"use client"
import React, { Fragment, useState } from "react";

const About = () => {
  const [toggleTab, setToggleTab] = useState(1);
  const toggleState = (index) => {
    setToggleTab(index);
  };

  return (
    <Fragment>
      <section className="about p-20 bg-gray-100">
        <div className="flex justify-around">
          <div className="w-2/5">
            <div className="about-img bg-cover h-96" style={{backgroundImage: "url(https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.shutterstock.com%2Fimage-photo%2Fteam-young-african-people-office-260nw-1918294400.jpg&tbnid=h7cySnW0cS6wZM&vet=12ahUKEwiu-5KYzpCCAxWqkicCHV6CAVsQMygHegQIARA7..i&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fblack-professionals-group&docid=w7rdv75rdXPUHM&w=390&h=280&q=black%20people%20professional%20images&ved=2ahUKEwiu-5KYzpCCAxWqkicCHV6CAVsQMygHegQIARA7)"}}></div>
          </div>

          <div className="w-3/5">
            <div className="flex">
              <div
                className={`${
                  toggleTab === 1 ? "active-tab bg-yellow-300" : "bg-gray-200"
                } single-tab cursor-pointer`}
                onClick={() => toggleState(1)}
              >
                <h2 className="p-4 rounded-md text-bisque font-semibold text-sm">
                  ABOUT
                </h2>
              </div>

              <div
                className={`${
                  toggleTab === 2 ? "active-tab bg-yellow-300" : "bg-gray-200"
                } single-tab cursor-pointer`}
                onClick={() => toggleState(2)}
              >
                <h2 className="p-4 rounded-md text-bisque font-semibold text-sm">
                  SKILLS
                </h2>
              </div>

              <div
                className={`${
                  toggleTab === 3 ? "active-tab bg-yellow-300" : "bg-gray-200"
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
                <h2 className="text-4xl font-extrabold leading-1.4 mb-4 text-yellow-300">Our Story</h2>
                <p className="p-4 text-base leading-1.8 font-normal text-gray-900">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                  elementum porta sapien in ornare. In hac habitasse platea
                  dictumst. Pellentesque habitant morbi tristique senectus et
                  netus et malesuada fames ac turpis egestas. Donec ut sodales
                  elit, non blandit diam. Praesent et nisi nunc. Etiam id nisi at
                  enim convallis imperdiet. Praesent dolor ligula, ultricies et
                  suscipit ut, ullamcorper in nisi. Vestibulum eleifend, sem ut
                  venenatis consectetur, enim purus luctus orci, pharetra interdum
                  purus magna a augue. Maecenas pretium rhoncus nulla, vel
                  vehicula ex pharetra in.
                </p>
                <h3 className="text-xl font-semibold leading-1.5 text-yellow-300">
                  We are 3rd year students creating a project about Nutrition
                </h3>
                <p className="p-4 text-base leading-1.8 font-normal text-gray-900">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                  elementum porta sapien in ornare. In hac habitasse platea
                  dictumst. Pellentesque habitant morbi tristique senectus et
                  netus et malesuada fames ac turpis egestas. Donec ut sodales
                  elit, non blandit diam. Praesent et nisi nunc. Etiam id nisi at
                  enim convallis imperdiet. Praesent dolor ligula, ultricies et
                  suscipit ut, ullamcorper in nisi. Vestibulum eleifend, sem ut
                  venenatis consectetur, enim purus luctus orci, pharetra interdum
                  purus magna a augue. Maecenas pretium rhoncus nulla, vel
                  vehicula ex pharetra in.
                </p>
              </div>
              {/* Skills Content */}
              <div
                className={`${
                  toggleTab === 2 ? "active-content" : "hidden"
                } content`}
              >
                <h2 className="text-4xl font-extrabold leading-1.4 mb-4 text-yellow-300">Skills</h2>
                <p className="p-4 text-base leading-1.8 font-normal text-gray-900">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                  elementum porta sapien in ornare. In hac habitasse platea
                  dictumst. Pellentesque habitant morbi tristique senectus et
                  netus et malesuada fames ac turpis egestas. Donec ut sodales
                  elit, non blandit diam. Praesent et nisi nunc. Etiam id nisi at
                  enim convallis imperdiet. Praesent dolor ligula, ultricies et
                  suscipit ut, ullamcorper in nisi. Vestibulum eleifend, sem ut
                  venenatis consectetur, enim purus luctus orci, pharetra interdum
                  purus magna a augue. Maecenas pretium rhoncus nulla, vel
                  vehicula ex pharetra in.
                </p>
                <div className="skills-row">
                  <div className="skills-column">
                    <div className="progress-wrap">
                      <h3 className="text-xs font-semibold uppercase">Developers</h3>
                      <div className="progress">
                        <div className="progress-bar" style={{ width: "80%" }}>
                          <span className="text-yellow-300">80%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="skills-column">
                    <div className="progress-wrap">
                      <h3 className="text-xs font-semibold uppercase">Designer</h3>
                      <div className="progress">
                        <div className="progress-bar" style={{ width: "90%" }}>
                          <span className="text-yellow-300">90%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="skills-column">
                    <div className="progress-wrap">
                      <h3 className="text-xs font-semibold uppercase">Javascript</h3>
                      <div className="progress">
                        <div className="progress-bar" style={{ width: "85%" }}>
                          <span className="text-yellow-300">85%</span>
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
                  <h3 className="text-xl font-semibold leading-1.5 mb-2">Web App Developers</h3>
                  <span className="font-semibold text-yellow-300">2021-2023</span>
                  <p className="mt-2 text-gray-900">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                    elementum porta sapien in ornare. In hac habitasse platea
                    dictumst. Pellentesque habitant morbi tristique senectus et
                    netus et malesuada fames ac turpis egestas. Donec ut sodales
                    elit, non blandit diam. Praesent et nisi nunc. Etiam id nisi at
                    enim convallis imperdiet. Praesent dolor ligula, ultricies et
                    suscipit ut, ullamcorper in nisi. Vestibulum eleifend, sem ut
                    venenatis consectetur, purus luctus orci, pharetra interdum
                    purus magna a augue. Maecenas pretium rhoncus nulla, vel
                    vehicula ex pharetra in.
                  </p>
                </div>
                <div className="exp-column">
                  <h3 className="text-xl font-semibold leading-1.5 mb-2">Graphics Designers</h3>
                  <span className="font-semibold text-yellow-300">2021-2023</span>
                  <p className="mt-2 text-gray-900">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                    elementum porta sapien in ornare. In hac habitasse platea
                    dictumst. Pellentesque habitant morbi tristique senectus et
                    netus et malesuada fames ac turpis egestas. Donec ut sodales
                    elit, non blandit diam. Praesent et nisi nunc. Etiam id nisi at
                    enim convallis imperdiet. Praesent dolor ligula, ultricies et
                    suscipit ut, ullamcorper in nisi. Vestibulum eleifend, sem ut
                    venenatis consectetur, purus luctus orci, pharetra interdum
                    purus magna a augue. Maecenas pretium rhoncus nulla, vel
                    vehicula ex pharetra in.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
