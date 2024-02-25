// import { SignIn } from "@clerk/nextjs";
// import React from 'react';

// export default function Page() {
//   return (
//     <div className="flex justify-center items-center pt-20 overflow-x-hidden"
//     style={{
//       backgroundImage: 'url("./signin.jpg")',
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       minHeight: '100vh', // Optional: Set a minimum height to cover the entire viewport
//     }}
//     >

// {/* <div className="flex justify-center ml-10 mr-10">
//       <SignIn />
// </div> */}
// <div className="flex justify-center items-center ">
//     <div className="ml-12 mr-8">
//         <SignIn />
//     </div>
// </div>
//     </div>
//   );
// }

import { SignIn } from "@clerk/nextjs";
import React from 'react';

export default function Page() {
  return (
    <div className="flex justify-center items-center pt-3 md:pt-5 overflow-x-hidden"
      style={{
        backgroundImage: 'url("./signin.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Optional: Set a minimum height to cover the entire viewport
      }}
    >
      {/* <div className="flex justify-center ml-10 mr-10">
        <SignIn />
      </div> */}
      <div className="flex justify-center items-center ">
        <div className="ml-12">
          <SignIn />
        </div>
      </div>
    </div>
  );
}

