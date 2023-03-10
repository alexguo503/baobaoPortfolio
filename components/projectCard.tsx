// 这个文件不能用 ctrl+s 做 prettier 代码格式美化会报错?

import { FC } from "react";
import Image from "next/image";

import { Project } from "../pages/api/data";

import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../Ui/animations";

const ProjectCard: FC<{
  project: Project;
  showDetail: string | null;
  setShowDetail: (id: null | string) => void;
}> = ({
  project: {
    id,
    name,
    image_path,
  },
  showDetail,
  setShowDetail,
}) => {
  return (
    <>
      <div className="relative flex flex-col items-center">
        <Image
          src={image_path}
          alt={name}
          width={300}
          height={150}
          className="cursor-pointer rounded-md"
          onClick={() => setShowDetail(id)}
        />
        <p className="my-2 text-center font-bold text-gray-800 dark:text-white">{name}</p>
      </div>

      {showDetail === id && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 place-content-start grid z-20">
              <motion.div className="fixed top-0 left-0 w-full h-full z-10 grid place-content-center" variants={fadeInUp}  onClick={() => setShowDetail(null)}>
                <Image
                  src={image_path}
                  alt={name}
                  width={1000}
                  height={600}
                  className="rounded-md"
                />
              </motion.div>
          </div>
      )}
    </>
  );
};

export default ProjectCard;
