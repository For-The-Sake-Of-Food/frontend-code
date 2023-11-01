// "use client"
// import React, { Fragment, useState } from "react";

// const About = () => {
//   const [toggleTab, setToggleTab] = useState(1);
//   const toggleState = (index) => {
//     setToggleTab(index);
//   };
//   return (
//     <Fragment>
//       <section className="about">
//         <div className="row">
//           <div className="column">
//             <div className="about-img"></div>
//           </div>

//           <div className="column">
//             <div className="tabs">
//               <div
//                 className={
//                   toggleTab === 1 ? "single-tab active-tab" : "single-tab"
//                 }
//                 onClick={() => toggleState(1)}
//               >
//                 <h2>ABOUT</h2>
//               </div>

//               <div
//                 className={
//                   toggleTab === 2 ? "single-tab active-tab" : "single-tab"
//                 }
//                 onClick={() => toggleState(2)}
//               >
//                 <h2>SKILLS</h2>
//               </div>

//               <div
//                 className={
//                   toggleTab === 3 ? "single-tab active-tab" : "single-tab"
//                 }
//                 onClick={() => toggleState(3)}
//               >
//                 <h2>EXPERIENCE</h2>
//               </div>
//             </div>

//             <div className="tab-content">
//               {/* About Us Content */}

//               <div
//                 className={
//                   toggleTab === 1 ? "content active-content" : "content"
//                 }
//               >
//                 <h2>Our Story</h2>
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Nullam elementum porta sapien in ornare. In hac habitasse
//                   platea dictumst. Pellentesque habitant morbi tristique
//                   senectus et netus et malesuada fames ac turpis egestas. Donec
//                   ut sodales elit, non blandit diam. Praesent et nisi nunc.
//                   Etiam id nisi at enim convallis imperdiet. Praesent dolor
//                   ligula, ultricies et suscipit ut, ullamcorper in nisi.
//                   Vestibulum eleifend, sem ut venenatis consectetur, enim purus
//                   luctus orci, pharetra interdum purus magna a augue. Maecenas
//                   pretium rhoncus nulla, vel vehicula ex pharetra in.
//                 </p>
//                 <h3>
//                   We are 3rd year students creating a project about Nutrition
//                 </h3>
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Nullam elementum porta sapien in ornare. In hac habitasse
//                   platea dictumst. Pellentesque habitant morbi tristique
//                   senectus et netus et malesuada fames ac turpis egestas. Donec
//                   ut sodales elit, non blandit diam. Praesent et nisi nunc.
//                   Etiam id nisi at enim convallis imperdiet. Praesent dolor
//                   ligula, ultricies et suscipit ut, ullamcorper in nisi.
//                   Vestibulum eleifend, sem ut venenatis consectetur, enim purus
//                   luctus orci, pharetra interdum purus magna a augue. Maecenas
//                   pretium rhoncus nulla, vel vehicula ex pharetra in.
//                 </p>
//               </div>

//               {/* Skills Content */}

//               <div
//                 className={
//                   toggleTab === 2 ? "content active-content" : "content"
//                 }
//               >
//                 <h2>Skills</h2>
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Nullam elementum porta sapien in ornare. In hac habitasse
//                   platea dictumst. Pellentesque habitant morbi tristique
//                   senectus et netus et malesuada fames ac turpis egestas. Donec
//                   ut sodales elit, non blandit diam. Praesent et nisi nunc.
//                   Etiam id nisi at enim convallis imperdiet. Praesent dolor
//                   ligula, ultricies et suscipit ut, ullamcorper in nisi.
//                   Vestibulum eleifend, sem ut venenatis consectetur, enim purus
//                   luctus orci, pharetra interdum purus magna a augue. Maecenas
//                   pretium rhoncus nulla, vel vehicula ex pharetra in.
//                 </p>

//                 <div className="skills-row">
//                   <div className="skills-column">
//                     <div className="progress-wrap">
//                       <h3>Developers</h3>
//                       <div className="progress">
//                         <div className="progress-bar">
//                           <span>80%</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="skills-column">
//                     <div className="progress-wrap">
//                       <h3>Designer</h3>
//                       <div className="progress">
//                         <div className="progress-bar Designer">
//                           <span>90%</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="skills-column">
//                     <div className="progress-wrap">
//                       <h3>Javascript</h3>
//                       <div className="progress">
//                         <div className="progress-bar Javascript">
//                           <span>85%</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {/* Experience Content */}

//               <div
//                 className={
//                   toggleTab === 3 ? "content active-content" : "content"
//                 }
//               >
//                 <div className="exp-column">
//                   <h3>Web App Developers</h3>
//                   <span>2021-2023</span>
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                     Nullam elementum porta sapien in ornare. In hac habitasse
//                     platea dictumst. Pellentesque habitant morbi tristique
//                     senectus et netus et malesuada fames ac turpis egestas.
//                     Donec ut sodales elit, non blandit diam. Praesent et nisi
//                     nunc. Etiam id nisi at enim convallis imperdiet. Praesent
//                     dolor ligula, ultricies et suscipit ut, ullamcorper in nisi.
//                     Vestibulum eleifend, sem ut venenatis consectetur, enim
//                     purus luctus orci, pharetra interdum purus magna a augue.
//                     Maecenas pretium rhoncus nulla, vel vehicula ex pharetra in.
//                   </p>
//                 </div>

//                 <div className="exp-column">
//                   <h3>Graphics Designers</h3>
//                   <span>2021-2023</span>
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                     Nullam elementum porta sapien in ornare. In hac habitasse
//                     platea dictumst. Pellentesque habitant morbi tristique
//                     senectus et netus et malesuada fames ac turpis egestas.
//                     Donec ut sodales elit, non blandit diam. Praesent et nisi
//                     nunc. Etiam id nisi at enim convallis imperdiet. Praesent
//                     dolor ligula, ultricies et suscipit ut, ullamcorper in nisi.
//                     Vestibulum eleifend, sem ut venenatis consectetur, enim
//                     purus luctus orci, pharetra interdum purus magna a augue.
//                     Maecenas pretium rhoncus nulla, vel vehicula ex pharetra in.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </Fragment>
//   );
// };

// export default About;
"use client";
import React, { Fragment, useState } from "react";
import Image from "next/image";

const About = () => {
  const [toggleTab, setToggleTab] = useState(1);
  const toggleState = (index) => {
    setToggleTab(index);
  };

  return (
    <Fragment>
      <section className="about py-20 bg-white">
        <div className="flex justify-around flex-row">
          <div>
            <div className="h-auto py-20 rounded-full">
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
                <h2 className="text-4xl font-extrabold leading-1.4 mb-4 text-black">
                  Our Story
                </h2>
                <p className="p-4 text-base leading-1.8 font-normal text-gray-900">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam elementum porta sapien in ornare. In hac habitasse
                  platea dictumst. Pellentesque habitant morbi tristique
                  senectus et netus et malesuada fames ac turpis egestas. Donec
                  ut sodales elit, non blandit diam. Praesent et nisi nunc.
                  Etiam id nisi at enim convallis imperdiet. Praesent dolor
                  ligula, ultricies et suscipit ut, ullamcorper in nisi.
                  Vestibulum eleifend, sem ut venenatis consectetur, enim purus
                  luctus orci, pharetra interdum purus magna a augue. Maecenas
                  pretium rhoncus nulla, vel vehicula ex pharetra in.
                </p>
                <p className="p-4 text-base leading-1.8 font-normal text-gray-900">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam elementum porta sapien in ornare. In hac habitasse
                  platea dictumst. Pellentesque habitant morbi tristique
                  senectus et netus et malesuada fames ac turpis egestas. Donec
                  ut sodales elit, non blandit diam. Praesent et nisi nunc.
                  Etiam id nisi at enim convallis imperdiet. Praesent dolor
                  ligula, ultricies et suscipit ut, ullamcorper in nisi.
                  Vestibulum eleifend, sem ut venenatis consectetur, enim purus
                  luctus orci, pharetra interdum purus magna a augue. Maecenas
                  pretium rhoncus nulla, vel vehicula ex pharetra in.
                </p>
              </div>
              {/* Skills Content */}
              <div
                className={`${
                  toggleTab === 2 ? "active-content" : "hidden"
                } content`}
              >
                <h2 className="text-4xl font-extrabold leading-1.4 mb-4 text-black">
                  Skills
                </h2>
                <p className="p-4 text-base leading-1.8 font-normal text-gray-900">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam elementum porta sapien in ornare. In hac habitasse
                  platea dictumst. Pellentesque habitant morbi tristique
                  senectus et netus et malesuada fames ac turpis egestas. Donec
                  ut sodales elit, non blandit diam. Praesent et nisi nunc.
                  Etiam id nisi at enim convallis imperdiet. Praesent dolor
                  ligula, ultricies et suscipit ut, ullamcorper in nisi.
                  Vestibulum eleifend, sem ut venenatis consectetur, enim purus
                  luctus orci, pharetra interdum purus magna a augue. Maecenas
                  pretium rhoncus nulla, vel vehicula ex pharetra in.
                </p>
                <div className="skills-row">
                  <div className="skills-column">
                    <div className="progress-wrap">
                      <h3 className="text-xs font-semibold uppercase">
                        Developers
                      </h3>
                      <div className="progress">
                        <div className="progress-bar bg-blue-500" style={{ width: "80%" }}>
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
                        <div className="progress-bar bg-blue-500" style={{ width: "90%" }}>
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
                        <div className="progress-bar  bg-blue-500" style={{ width: "85%" }}>
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
                  <h3 className="text-xl font-semibold leading-1.5 mb-2">
                    Web App Developers
                  </h3>
                  <span className="font-semibold text-black">2021-2023</span>
                  <p className="mt-2 text-gray-900">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam elementum porta sapien in ornare. In hac habitasse
                    platea dictumst. Pellentesque habitant morbi tristique
                    senectus et netus et malesuada fames ac turpis egestas.
                    Donec ut sodales elit, non blandit diam. Praesent et nisi
                    nunc. Etiam id nisi at enim convallis imperdiet. Praesent
                    dolor ligula, ultricies et suscipit ut, ullamcorper in nisi.
                    Vestibulum eleifend, sem ut venenatis consectetur, purus
                    luctus orci, pharetra interdum purus magna a augue. Maecenas
                    pretium rhoncus nulla, vel vehicula ex pharetra in.
                  </p>
                </div>
                <div className="exp-column">
                  <h3 className="text-xl font-semibold leading-1.5 mb-2">
                    Graphics Designers
                  </h3>
                  <span className="font-semibold text-black">2021-2023</span>
                  <p className="mt-2 text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam elementum porta sapien in ornare. In hac habitasse
                    platea dictumst. Pellentesque habitant morbi tristique
                    senectus et netus et malesuada fames ac turpis egestas.
                    Donec ut sodales elit, non blandit diam. Praesent et nisi
                    nunc. Etiam id nisi at enim convallis imperdiet. Praesent
                    dolor ligula, ultricies et suscipit ut, ullamcorper in nisi.
                    Vestibulum eleifend, sem ut venenatis consectetur, purus
                    luctus orci, pharetra interdum purus magna a augue. Maecenas
                    pretium rhoncus nulla, vel vehicula ex pharetra in.
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
