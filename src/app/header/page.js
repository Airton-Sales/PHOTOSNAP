"use client";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
     <header className={`w-screen h-[72px] bg-white flex justify-center ${menuActive ? "flex-col h-[330px] absolute top-0 left-0 right-0 items-center" : "justify-center"}`}>
      <div className="flex justify-between  w-screen items-center gap-36">
        <Image className="ml-5" src="/logo.svg" alt="Logo" width={170} height={16} />
        <button className="block md:hidden mr-5" onClick={toggleMenu}>
            <Image src="/Menu.svg" alt="Menu" width={20} height={6} />
        </button>
      </div>
      <nav className={`mt-16 w-screen flex flex-col items-center ${menuActive ? "block" : "hidden"}`}>
        <ul className="flex flex-col gap-3 items-center">
          <li>STORIES</li>
          <li>FEATURES</li>
          <li>PRICING</li>
        </ul>
        <div className="w-[86%] h-[1px] bg-[#97979783] mt-5"></div>
        <button className="w-[86%] h-[48px] bg-black text-white -tracking-[-3px] font-bold mt-5">GET AN INVITE</button>
      </nav>
    </header>
  );
}