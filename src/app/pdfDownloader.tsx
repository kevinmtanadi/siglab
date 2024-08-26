import Image from "next/image";
import React, { useEffect } from "react";
import Complete from "../../public/completed.png";

interface Props {
  id: "634214" | "634239" | "634227" | "634232";
}

const PDFDownloader = ({ id }: Props) => {
  const idMapper = {
    "634214": "/SIG.LHP.VI.2024.031718162.pdf",
    "634239": "/SIG.LHP.VI.2024.031718162.pdf",
    "634227": "/SIG.LHP.VI.2024.210923321.pdf",
    "634232": "/SIG.LHP.VI.2024.031718161.pdf",
  };

  useEffect(() => {
    const downloadPdf = () => {
      const file = idMapper[id];

      console.log(file);
      const link = document.createElement("a");
      link.href = file;
      link.setAttribute("download", file);

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    downloadPdf();
  }, [id, idMapper]);

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
};

export default PDFDownloader;
