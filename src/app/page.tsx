"use client";

import Logo from "../../public/siglogomenu.png";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className={`flex flex-col min-h-screen justify-center items-center gap-3 bg-[#2c313c] opacity-100`}
    >
      <Image src={Logo} alt="Logo" width={120} height={120} />
      <div className="loader"></div>
    </div>
  );
}
