"use client";

export default function Footer() {
  return (
    <div className="font-semibold mb-16">
      <p>Copyright © 2024 Timothee Bels</p>
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
