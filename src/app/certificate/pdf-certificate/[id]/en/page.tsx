"use client";

import { useEffect, useState } from "react";
import Logo from "../../../../../../public/siglogomenu.png";
import Image from "next/image";
import PDFDownloader from "@/app/pdfDownloader";

const page = ({ params }: { params: { id: string } }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDecaying, setIsDecaying] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsDecaying(true);
    }, 3000);
  }, []);

  if (isLoading) {
    return (
      <div
        className={`flex flex-col min-h-screen justify-center items-center gap-3 bg-[#2c313c] transition-all duration-1000 ${
          isDecaying ? "opacity-0" : "opacity-100"
        }`}
      >
        <Image src={Logo} alt="Logo" width={120} height={120} />
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <PDFDownloader
      id={
        ["634214", "634239", "634227", "634232"].includes(params.id)
          ? (params.id as "634214" | "634239" | "634227" | "634232")
          : "634214"
      }
    />
  );
};

export default page;
