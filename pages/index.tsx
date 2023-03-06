import { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import { services } from "./api/data";
import ServiceCard from "../components/serviceCard";

import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "../Ui/animations";

const Home: NextPage = () => {
  return (
    <motion.div
      className="flex flex-col px-6 pt-1 flex-grow "
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      
      exit="exit"
    >
      <h6 className="my-3 font-semibold">
        <pre>
          - 2015年 出生 中国 上海市 <br />
          - 2019年 参加YAMAHA钢琴学习班 <br />
          - 2020年 就读 万源协和双语小学 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;创作首部连环画
          小心心玄玄上学记 <br />
          - 2021年 发布首个纯手工作品 - 包包的小屋 <br />
          - 2022年 参加YAMAHA发表会 独立完成公众钢琴独奏 <br />
        </pre>
      </h6>
      <div
        className="p-4 mt-5 bg-gray-300 dark:bg-dark-100 rounded-b-2xl flex-grow"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wider">技能</h4>

        <div className="flex">
          <motion.div
            className="grid gap-9 my-3 mx-3 md:grid-cols-2"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            {services.map((service) => (
              // eslint-disable-next-line react/jsx-key
              <motion.div
                variants={fadeInUp}
                key={service.title}
                className="bg-gray-100 p-2 py-2 h-32 dark:bg-dark-200 rounded-lg col-span-2 md:col-span-1"
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
