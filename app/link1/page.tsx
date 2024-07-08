/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import React from "react";

export default function PleaseNo() {
  return (
    <div>
      <h1 className="font-bold text-center justify-center align-center  mt-20 text-xl">
        You should not have clicked this. I had no time to do this. So just
        imagine you didn't see this ok?
      </h1>
      <div className="text-center">

      {/* Anchor link */}
      <a
        href="/"
        className="bg-green-500 border-none rounded-md text-xl font-semibold px-10 py-1.5">
        <button className="py-5">Go Back</button>
      </a>
          </div>
      <div className="text-center mt-5  flex items-center justify-center">
        <img src="img/skills/img1.jpg" alt="ahhhhh" />
      </div>
    </div>
  );
}
