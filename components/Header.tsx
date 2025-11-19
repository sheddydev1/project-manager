"use client";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/16/solid";
import Avatar from "react-avatar";
import Image from "next/image";


function Header() {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
        <div
          className="absolute top-0 left-0 w-full h-96 
      bg-gradient-to-br from-pink-400 to-[#0055d1] 
      rounded-md filter blur-3xl opacity-20 -z-50"
        />
        <Image
          src="https://links.papareact.com/c2cdd5"
          alt="Logo"
          width={300}
          height={300}
          className="w-44 md:w-56 pb-10 object-contain"
        />

        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          {/* search box */}
          <form
            className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md 
        flex-1 md:flex-initial"
          >
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input type="text" className="flex-1 outline-none p-2" />
            <button hidden type="submit">
              Search
            </button>
          </form>

          {/* Avatar */}
          <Avatar name="Oyewole Shedrack" round color="#0055d1" size="50" className="cursor-pointer"/>
        </div>
      </div>

      <div className="flex items-center justify-center py-2 px-5 md:py-5">
        <p
          className="flex items-center p-5 text-sm font-light pr-5 shadow-xl rounded-xl
         bg-white italic max-w-3xl text-[#0055d1]"
        >
          <UserCircleIcon className="inline-block h-10 w-10 text-[#0055d1]" />
          GPT is summarising your day....
        </p>
      </div>
    </header>
  );
}

export default Header;
