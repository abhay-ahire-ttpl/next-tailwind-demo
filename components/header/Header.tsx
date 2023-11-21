import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "../../utils/constant/staticImage";
import Banner from "../animation/Banner";

export default function Header() {
  const [isMenu, setIsMenu] = useState(false);
  const menu = [
    { name: "LOREM IPSUM", url: "lorem1" },
    { name: "LOREM IPSUM", url: "lorem2" },
    { name: "LOREM IPSUM", url: "lorem3" },
  ];

  return (
    <header
      className={`bg-black text-white fixed top-0 w-full z-50 ${
        isMenu ? "h-full" : ""
      }`}
    >
      <div className="mx-auto py-4 items-center">
        <div className="flex items-center px-5">
          <Link href="/">
            <Image
              src={Icon.logo}
              alt="logo"
              className="mr-2"
              width={35}
              height={30}
            />
          </Link>
          <p className="px-2 text-[1rem] font-semibold w-full ">
            {isMenu ? "Menu" : "Lorem"}
          </p>
          <Image
            alt="menu-icon"
            className="sm:hidden"
            src={isMenu ? Icon.close : Icon.menu}
            onClick={() => setIsMenu(!isMenu)}
          />
        </div>
        {isMenu && (
          <div className="flex h-[85vh] items-center sm:hidden">
            <nav
              className="mt-2 space-y-6 px-5 flex flex-col"
              onClick={() => setIsMenu(!isMenu)}
            >
              {menu.map((item, index) => (
                <Link
                  href={`/${item.url}`}
                  className="hover:text-gray-300 font-medium text-lg tracking-wide capitalize"
                  key={index}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex justify-between gap-12">
                <Link
                  href="/loremipsum1"
                  className="text-[#666666] font-bold text-lg tracking-wide uppercase"
                >
                  lorem ipsum
                </Link>
                <Link
                  href="/loremipsum1"
                  className="text-[#666666] font-bold text-lg tracking-wide uppercase"
                >
                  comming soon
                </Link>
              </div>
            </nav>
            <div className="fixed bottom-0 w-full">
              <Banner />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
