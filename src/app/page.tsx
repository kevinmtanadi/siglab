"use client";

import Image from "next/image";
import Complete from "../../public/completed.png";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const downloadPdf = () => {
      const link = document.createElement("a");
      link.href = "SIG.LHP.VI.2024.031718162.pdf";
      link.setAttribute("download", "SIG.LHP.VI.2024.031718162.pdf");

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    downloadPdf();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col w-full h-full items-center gap-10">
        <Image
          className="w-[35%]"
          width={300}
          height={300}
          src={Complete}
          alt="Complete image"
        />
        <span className="text-xs text-[#fa7a6b] font-semibold">Completed</span>
      </div>
    </main>
  );
}
