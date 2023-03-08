import { FC } from "react";
// import Image from "next/image";

import { Project } from "../pages/api/data";

import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../Ui/animations";

const ProjectCard: FC<{
  project: Project;
  showDetail: string | null;
  setShowDetail: (id: null | string) => void;
}> = ({ project: { id, name, image_path }, showDetail, setShowDetail }) => {
  return (
    <>
      {/* <div className="relative items-center"> */}
        {/* <Image
          src={image_path}
          alt={name}
          width={300}
          height={150}
          className="cursor-pointer rounded-md"
          onClick={() => setShowDetail(id)}
        /> */}

        <motion.img
          className="cursor-pointer rounded-md"
          alt={name}
          src={image_path}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={() => setShowDetail(id)}
        />
        {/* <p className="my-2 text-center font-bold text-gray-800 dark:text-white">
          {name}
        </p> */}
      {/* </div> */}

      {showDetail === id && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 place-content-start grid z-20">
          <motion.div
            className="fixed top-0 left-0 w-full h-full z-10 grid place-content-center"
            variants={fadeInUp}
            onClick={() => setShowDetail(null)}
          >
            {/* <Image
                  src={image_path}
                  alt={name}
                  width={1000}
                  height={600}
                  className="rounded-md"
                /> */}

            <motion.img
              className="cursor-pointer w-full rounded-md"
              alt={name}
              src={image_path}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
