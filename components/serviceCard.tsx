import { FC } from "react";
import { Service } from "../pages/api/data";

import { motion } from "framer-motion";
import { fadeInUp } from "../Ui/animations";

const ServiceCard: FC<{ service: Service }> = ({
  service: { Icon, about, title },
}) => {
  const createMarkup = () => {
    return {
      __html: about,
    };
  };

  return (
    <div className="flex items-center p-2 space-x-4">
      <Icon className="w-10 h-10 text-pink-300" />
      <motion.div variants={fadeInUp} initial="initial" animate="animate">
        <h4 className="font-bold text-lg">{title}</h4>

        <p dangerouslySetInnerHTML={createMarkup()} className="text-left" />
      </motion.div>
    </div>
  );
};

export default ServiceCard;
