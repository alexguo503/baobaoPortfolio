import { FC, useState } from "react";

import { Category } from "../pages/api/data";

export const NavItem: FC<{
  selectedCategory: Category | "all";
  handlerFilterCategory: Function;
  active: string;
}> = ({ selectedCategory, handlerFilterCategory, active }) => {
  let activeClassName = "capitalize cursor-pointer hover:text-pink-300";
  if (active === selectedCategory)
    activeClassName += " text-pink-300 border-b";

  return (
    <li
      className={activeClassName}
      onClick={() => handlerFilterCategory(selectedCategory)}
    >
      {selectedCategory}
    </li>
  );
};

const ProjectNavbar: FC<{ handlerFilterCategory: Function; active: string }> = (
  props
) => {
  // const [activeItem, setActiveItem] = useState();

  return (
    <div className="px-3 py-2 space-x-3 overflow-x-auto list-none flex">
      <NavItem selectedCategory="all" {...props} />
      <NavItem selectedCategory="Painting" {...props} />
      <NavItem selectedCategory="Piano" {...props} />
      <NavItem selectedCategory="Handcraft" {...props} />
    </div>
  );
};

export default ProjectNavbar;
