"use client";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
     <header className={`w-[375px] h-[72px] bg-white flex justify-center ${menuActive ? "flex-col h-[325px] items-center" : "justify-center"}`}>
      <div className="flex justify-between items-center gap-36">
        <Image src="/logo.svg" alt="Logo" width={170} height={16} />
        <button className="block md:hidden" onClick={toggleMenu}>
            <Image src="/Menu.svg" alt="Menu" width={20} height={6} />
        </button>
      </div>
      <nav className={`mt-10 ${menuActive ? "block" : "hidden"}`}>
        <ul className="flex flex-col gap-1 items-center">
          <li>STORIES</li>
          <li>FEATURES</li>
          <li>PRICING</li>
        </ul>
        <div className="w-[310px] h-[1px] bg-[#979797] mt-10"></div>
        <button className="w-[310px] h-[48px] bg-black text-white -tracking-[-3px] font-bold mt-10">GET AN INVITE</button>
      </nav>
    </header>
  );
}