import { useState, useEffect, FunctionComponent } from "react";
import Link from "next/link";

import { useRouter } from "next/router";

// 重点:
// 可复用 NavItem Component 提取, 设置方法如下
// NavItem标签有3个参数和1个方法, 工作方式如下
// 1. 初始状态 activeItem = '', 显示所有标签
// 2. 选中某标签后, 执行setActiveItem方法, 将name赋值给activeItem, 然后navbar就会隐藏该标签
const NavItem: FunctionComponent<{
  activeItem: string;
  setActiveItem: Function;
  name: string;
  route: string;
}> = ({ activeItem, name, route, setActiveItem }) => {
  return activeItem !== name ? (
    <Link href={route}>
      <span
        className="hover:text-pink-300"
        onClick={() => setActiveItem(name)}
      >
        {name}
      </span>
    </Link>
  ) : null;
};

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("");

  // 这里是当用户直接访问'./' 或'./projects'...时, navbar标签处于被选中状态
  const { pathname } = useRouter();
  useEffect(() => {
    if (pathname === "/") setActiveItem("About");
    if (pathname === "/projects") setActiveItem("Projects");
    if (pathname === "/resume") setActiveItem("Resume");
  }, []);

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="font-extrabold tracking-wide text-gray-700 dark:text-white hover:text-pink-300 border-pink-300 text-xl border-b-4 md:text-2xl">
        {activeItem}
      </span>
      <div className="flex text-gray-600 dark:text-white text-lg space-x-5">
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Who am I"
          route="/"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="My work"
          route="/projects"
        />

      </div>
    </div>
  );
};

export default Navbar;
