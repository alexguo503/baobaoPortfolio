import React, { useState } from "react";

import { Category, projects as allProjects } from "./api/data";

import ProjectCard from "../components/projectCard";
import ProjectNavbar from "../components/projectNavbar";

import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "../Ui/animations";

import Masonry from "react-masonry-css";

const Projects = () => {
  const [selectedProjects, setSelectedProjects] = useState(allProjects);
  const [active, setActive] = useState("all");

  const breakpointColumnsObj = {
    default: 3,
    900: 2,
    500: 1,
  };

  const [showDetail, setShowDetail] = useState<string | null>(null);

  const handlerFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setSelectedProjects(allProjects);
      setActive(category);
      return;
    }

    const newArray = allProjects.filter((project) =>
      project.category.includes(category)
    );
    setSelectedProjects(newArray);
    setActive(category);
  };

  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="px-5 py-2 overflow-y-scroll" style={{ height: "65vh" }}>
        <ProjectNavbar
          handlerFilterCategory={handlerFilterCategory}
          active={active}
        />

        {/* className for the container, columnClassName for each generated column  */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-4"
          columnClassName=''
        >
          {selectedProjects.map((project) => (
            <motion.div
              variants={fadeInUp}
              key={project.name}
              className="align-middle pt-6 bg-gray-50 dark:bg-dark-200 rounded-lg"
            >
              <ProjectCard
                project={project}
                showDetail={showDetail}
                setShowDetail={setShowDetail}
              />
            </motion.div>
          ))}
        </Masonry>
      </div>
    </motion.div>
  );
};

export default Projects;
