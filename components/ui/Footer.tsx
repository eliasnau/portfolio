"use client";

export default function Footer() {
  return (
    <div className="font-semibold mb-16 bg-black">
      <p className="bg-black">Copyright © 2024 Timothee Bels</p>
      <p className="mt-5 bg-black">
        Credits{" "}
        <u>
          {/* Anchor link */}
          <a href="https://elias.codity.net">Elias Nau</a>
        </u>
      </p>
    </div>
  );
}
