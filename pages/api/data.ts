import { IconType } from "react-icons/lib";
import {
  GiMusicalScore,
  GiCookingPot,
  GiPaintBrush,
  GiCalculator,
  GiHand,
} from "react-icons/gi";
import { BsCircleFill } from "react-icons/bs";
import { MdOutlineLanguage } from "react-icons/md";

// define Interface to describes the shape of an object
// 1. IService 对应 {services} type, services 对应 IService[] type
// 2. Icon type 根据导入库设置
export interface Service {
  title: string;
  about: string;
  Icon: IconType;
}

export interface Skill {
  name: string;
  level: string;
  Icon: IconType;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}

export type Category = "Painting" | "Piano" | "Handcraft" | "Cooking";

export const services: Service[] = [
  {
    title: "Painting",
    about:
      "我花費4年時間畫得像拉斐爾，卻用一生時間去追求畫得像孩子&nbsp;&nbsp;  <b> - 毕加索 </b>",
    Icon: GiPaintBrush,
  },
  {
    title: "Piano",
    about:
      "音乐有它自己的诗，这种诗叫做旋律 &nbsp;&nbsp;   <b> - 约书亚·洛根 </b>",
    Icon: GiMusicalScore,
  },
  {
    title: "Math",
    about: "數學是科學的大門和鑰匙 &nbsp;&nbsp;   <b> - 培根 </b>",
    Icon: GiCalculator,
  },
  {
    title: "English",
    about: "There is no royal road to a Language learning ...",
    Icon: MdOutlineLanguage,
  },
  {
    title: "Handcraft",
    about: "手作是一种力量，一种生命的力量",
    Icon: GiHand,
  },
  {
    title: "Cooking",
    about:
      "食谱本身并没有灵魂，不过作为厨师，你要想办法给它创造一个灵魂 &nbsp;&nbsp;  <b> - 托马斯·凯勒 </b>  ",
    Icon: GiCookingPot,
  },
];

export const languages: Skill[] = [
  {
    name: "Python",
    level: "60",
    Icon: GiCookingPot,
  },
  {
    name: "JavaScript",
    level: "70",
    Icon: BsCircleFill,
  },
  {
    name: "React",
    level: "80",
    Icon: BsCircleFill,
  },
  {
    name: "PHP",
    level: "70",
    Icon: BsCircleFill,
  },
];

export const tools: Skill[] = [
  {
    name: "PhotoShop",
    level: "45",
    Icon: GiCookingPot,
  },
  {
    name: "Figma",
    level: "85",
    Icon: BsCircleFill,
  },
  {
    name: "Illustrator",
    level: "60",
    Icon: BsCircleFill,
  },
  {
    name: "After Effects",
    level: "60",
    Icon: BsCircleFill,
  },
];

export const projects: Project[] = [
  {
    id: "1",
    name: "钢琴启蒙",
    description: "2020年 6岁 报名YAMAHA 开始钢琴学习",
    image_path: "/images/piano/钢琴 启蒙.jpg",
    deployed_url: "https://covid-19-tracker-by-sumit.web.app",
    github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
    category: ["Piano"],
    key_techs: [""],
  },
  {
    id: "2",
    name: "钢琴结业 第一学期",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/piano/钢琴 结业1.png",
    deployed_url: "https://covid-19-tracker-by-sumit.web.app",
    github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
    category: ["Piano"],
    key_techs: ["React", "Chart.js"],
  },
  {
    id: "3",
    name: "钢琴结业 第二学期",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/piano/钢琴 结业2.png",
    deployed_url: "https://covid-19-tracker-by-sumit.web.app",
    github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
    category: ["Piano"],
    key_techs: ["React", "Chart.js"],
  },
  {
    id: "4",
    name: "钢琴结业 第四学期",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/piano/钢琴 结业4.png",
    deployed_url: "https://covid-19-tracker-by-sumit.web.app",
    github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
    category: ["Piano"],
    key_techs: ["React", "Chart.js"],
  },
  {
    id: "5",
    name: "送花",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/painting/绘画 送花.png",
    deployed_url: "https://covid-19-tracker-by-sumit.web.app",
    github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
    category: ["Painting"],
    key_techs: ["React", "Chart.js"],
  },
  {
    id: "6",
    name: "吃货",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/painting/绘画 吃货.png",
    deployed_url: "https://covid-19-tracker-by-sumit.web.app",
    github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
    category: ["Painting"],
    key_techs: ["React", "Chart.js"],
  },
  {
    id: "8",
    name: "小心心玄玄上学记",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/painting/绘画 小心心玄玄上学记 绘本.jpg",
    deployed_url: "https://covid-19-tracker-by-sumit.web.app",
    github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
    category: ["Painting"],
    key_techs: ["React", "Chart.js"],
  },
  {
    id: "9",
    name: "小鱼鱼鱼",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/painting/绘画 小鱼鱼鱼.jpg",
    deployed_url: "https://covid-19-tracker-by-sumit.web.app",
    github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
    category: ["Painting"],
    key_techs: ["React", "Chart.js"],
  },
  {
    id: "10",
    name: "数字游戏",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/painting/绘画 数字.jpg",
    deployed_url: "https://covid-19-tracker-by-sumit.web.app",
    github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
    category: ["Painting"],
    key_techs: ["React", "Chart.js"],
  },
  {
    id: "11",
    name: "MJ",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/painting/绘画 MJ.jpg",
    deployed_url: "https://covid-19-tracker-by-sumit.web.app",
    github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
    category: ["Painting"],
    key_techs: ["React", "Chart.js"],
  },
  {
    id: "12",
    name: "拳击场",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/handcraft/手工 拳击场.png",
    deployed_url: "https://covid-19-tracker-by-sumit.web.app",
    github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
    category: ["Handcraft"],
    key_techs: ["React", "Chart.js"],
  },
  {
    id: "13",
    name: "彩甲",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/handcraft/手工 彩甲.jpg",
    deployed_url: "https://covid-19-tracker-by-sumit.web.app",
    github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
    category: ["Handcraft"],
    key_techs: ["React", "Chart.js"],
  },
  {
    id: "14",
    name: "元宵灯笼",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/handcraft/手工 灯笼装饰.jpg",
    deployed_url: "https://covid-19-tracker-by-sumit.web.app",
    github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
    category: ["Handcraft"],
    key_techs: ["React", "Chart.js"],
  },
  {
    id: "15",
    name: "包包的小屋",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/handcraft/手工 梦幻小屋2.png",
    deployed_url: "https://covid-19-tracker-by-sumit.web.app",
    github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
    category: ["Handcraft"],
    key_techs: ["React", "Chart.js"],
  },
  {
    id: "16",
    name: "炒素",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/cooking/烹饪 炒素.png",
    deployed_url: "https://covid-19-tracker-by-sumit.web.app",
    github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
    category: ["Cooking"],
    key_techs: ["React", "Chart.js"],
  },
  {
    id: "17",
    name: "煮饭",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/cooking/烹饪 煮饭.png",
    deployed_url: "https://covid-19-tracker-by-sumit.web.app",
    github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
    category: ["Cooking"],
    key_techs: ["React", "Chart.js"],
  },
  {
    id: "18",
    name: "蛋糕",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/cooking/烹饪 蛋糕.png",
    deployed_url: "https://covid-19-tracker-by-sumit.web.app",
    github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
    category: ["Cooking"],
    key_techs: ["React", "Chart.js"],
  },
];
