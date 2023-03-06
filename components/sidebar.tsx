import Image from "next/image";
import Link from "next/link";

import { AiFillGithub, AiFillLinkedin, AiFillYahoo } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { MdPlace } from "react-icons/md";
import {GiTie} from "react-icons/gi"
import {FiPhoneCall} from "react-icons/fi"

import { useTheme } from "next-themes";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <div className="flex flex-col items-center py-4">
      <div className=" relative w-40 h-40 ">
        <Image
          alt="avatar"
          src="/images/baobao2.png"
          className="rounded-full object-cover"
          fill
          quality={75}
        />
        </div>
        <h3 className="my-4 font-kaushan text-3xl font-medium tracking-wider">
          <span className="text-pink-300 mr-2 tracking-wider">郭思迦</span>
          Scarlette
        </h3>
        <p className="px-2 py-1 my-3 bg-gray-200 tracking-wider w-10/12 rounded-full dark:bg-dark-200">
          一年级2班
        </p>
        <Link
          className="flex w-10/12 items-center justify-center px-2 py-1 my-2 dark:bg-dark-200 bg-gray-200 rounded-full cursor-pointer"
          href=""
          // download=""
        >
          <GiTie className="w-6 h-6 tracking-wider" />
          <span>  我的相册 🚀</span>
        </Link>
        <div className="flex justify-around pt-5 text-pink-400 w-9/12 md:w-full mx-auto">
          <Link href="">
            <AiFillGithub className="w-8 h-8 cursor-pointer" />
          </Link>
          <Link href="">
            <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
          </Link>
          <Link href="">
            <AiFillYahoo className="w-8 h-8 cursor-pointer" />
          </Link>
        </div>
      </div>
      <div
        className="py-3 my-3 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex flex-col items-center">
          <div className="flex flex-row items-center my-2 tracking-wider">
            <MdPlace className="text-blue-600" />
            <span className="pl-2">上海市闵行区万源路</span>
          </div>
          <div className="flex flex-row items-center my-2 tracking-wider">
            <HiOutlineMail className="text-blue-600" />
            <p className="pl-2">协和双语小学</p>
          </div>
          <div className="flex flex-row items-center my-2">
            <FiPhoneCall className="text-blue-600" />
            <p className="pl-2"> 01234567890 </p>
          </div>
        </div>
      </div>
      {/* Email Button */}
      <button
        className="w-8/12 tracking-wider py-2 bg-gradient-to-r from-pink-300 to-blue-200 rounded-full px-5 my-3 text-white focus:outline-none"
        onClick={() => window.open("mailto:alexguo503@gmail.com")}
      >
        来加好友吧 😘
      </button>
      <button
        className="w-8/12 tracking-wider bg-gradient-to-r from-pink-300 to-blue-200 rounded-full px-5 py-2 my-2 text-white"
        onClick={changeTheme}
      >
        更换 Light / Dark 主题
      </button>
    </>
  );
};

export default Sidebar;
