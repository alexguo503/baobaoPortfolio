import React, { useState } from "react";

import { Category, projects as allProjects } from "./api/data";

import ProjectCard from "../components/projectCard";
import ProjectNavbar from "../components/projectNavbar";

import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "../Ui/animations";

const Projects = () => {
  const [selectedProjects, setSelectedProjects] = useState(allProjects);
  const [active, setActive] = useState("all");

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

        <motion.div
          className="relative grid grid-cols-12 gap-4 my-3"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {selectedProjects.map((project) => (
            <motion.div
              variants={fadeInUp}
              key={project.name}
              className="col-span-12 align-middle pt-6 bg-gray-50 dark:bg-dark-200 rounded-lg sm:col-span-12 lg:col-span-4"
            >
              <ProjectCard
                project={project}
                showDetail={showDetail}
                setShowDetail={setShowDetail}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
