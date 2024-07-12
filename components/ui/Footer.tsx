"use client";

export default function Footer() {
  return (
    <div className="font-semibold bg-black text-white">
      <p className="mt-14 md:mt-0 xl:mt-0 ">Copyright © 2024 Timothee Bels</p>
      <p className="mt-5">
        Credits{" "}
        <u>
          {/* Anchor link */}
          <a href="https://elias.codity.net">Elias Nau</a>
        </u>
      </p>
    </div>
  );
}
