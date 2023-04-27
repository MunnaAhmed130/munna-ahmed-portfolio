// import { cameraEssential, travelAgency } from "../assets";
import {
  css3,
  express,
  express2,
  firebase,
  html5,
  javascript,
  mongodb,
  react,
  tailwindCSS,
} from "../../assets/icons";

const navLinks = [
  {
    id: "/",
    title: "Home",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const skills = [
  { icon: javascript, title: "JavaScript" },
  { icon: css3, title: "CSS3" },
  { icon: html5, title: "HTML5" },
  { icon: tailwindCSS, title: "Tailwind CSS" },
  { icon: react, title: "ReactJS" },
  { icon: express2, title: "ExpressJS" },
  { icon: firebase, title: "Firebase" },
  { icon: mongodb, title: "MongoDB" },
];

// const projects = [
//   {
//     _id: 1,
//        "project_img": {
//   "src": "https://i.ibb.co/By4bRvR/camera-essentials-cropped-resized.png",
//   "blurHash": "L297w[o#00Mx00kC~pMyIoV@?bRi"
// },
//     project_demo_1: "https://i.ibb.co/ryvjR8m/project1-demo1.png",
//     project_demo_2: "https://i.ibb.co/LYRhwSV/project1-demo2.png",
//     project_demo_3: "https://i.ibb.co/4sX2CBG/project1-demo3.png",
//     title: "Camera Essentials",
//     tags: [
//       { name: "React", color: "" },
//       { name: "mongodb", color: "" },
//       { name: "firebase", color: "" },
//       { name: "", color: "" },
//     ],
//     client_repo:
//       "https://github.com/MunnaAhmed130/camera-essentials-website-client-side",
//     server_repo:
//       "https://github.com/MunnaAhmed130/camera-essentials-website-server-side",
//     live_link: "https://camera-essentials.web.app/",
//     p_1: "It is a niche camera selling website with users and admin dashboard, CRUD operation, and user  Authentication System.",
//     p_2: "Users can place orders, purchase or delete orders, and review when logged in.",
//     p_3: "Admin can manage all orders, add a new product, or delete products from the database and add a  new admin.",
//     description:
//       "It is a niche camera selling website where they sell all kinds of camera .From analog to digital, compact , stylish, colorful , polaroid etc. you will find all kind of cameras that fit your need.This website helps the user to buy or order camera .",
//   },
//   {
//     _id: 2,
// project_img: {
//   src: "https://i.ibb.co/qB789Vb/travel-agency-cropped-resized.png",
//   blurHash: "LDHo2oaf~WkC00WE4oay%2WCx[fl"
// },
//     project_demo_1: "https://i.ibb.co/Tw402bD/project2-demo1.png",
//     project_demo_2: "https://i.ibb.co/vhNjzpx/project2-demo2.png",
//     project_demo_3: "https://i.ibb.co/HgBBbCV/project2-demo3.png",
//     title: "Travio",
//     tags: [
//       { name: "React", color: "" },
//       { name: "bootstrap", color: "" },
//       { name: "firebase", color: "" },
//     ],
//     client_repo:
//       "https://github.com/MunnaAhmed130/travio-tourism-website-client-side",
//     server_repo:
//       "https://github.com/MunnaAhmed130/travio-tourism-website-server-side",
//     live_link: "https://travel-agency-e968e.web.app/",
//     p_1: "It is a tourism-related website that makes travel safer and more fun. ",
//     p_2: "Users can log in using the Google login system. Users cannot place orders until they log in.",
//     p_3: "After login users can place an order by clicking on the buy now button and delete orders by clicking  the delete button on the My Order page.",
//     description:
//       " It is a tourism-related website that makes travel safer and more fun. Users need to log in to receive various services or plans. user can place order and delete their order if they want to. some pages dont show until the user log in with their account",
//   },
//   {
//     _id: 3,
// "project_img": {
//   "src": "https://i.ibb.co/2j8qfYL/project3-1.png",
//   "blurHash": "LDHo2oaf~WkC00WE4oay%2WCx[fl"
// },
//     project_demo_1: "https://i.ibb.co/5GgVdLH/project-3-demo-1.png",
//     project_demo_2: "https://i.ibb.co/3TvzJfm/project-3-dashboard.png",
//     project_demo_3: "https://i.ibb.co/D9TX7Rt/project-3-demo-3.png",
//     title: "Dental Care",
//     client_repo: "https://github.com/MunnaAhmed130/Bicycle-store-client-side",
//     server_repo: "https://github.com/MunnaAhmed130/Bicycle-store-server-side",
//     live_link: "https://bicycle-store-41d3e.web.app/",
//     p_1: "Bicycle store is a website fully responsive website that helps its clients to choose and buy cycles.",
//     p_2: "User can log in using two different login method.",
//     p_3: "It is a simple website using firebase authentication and dashboard",
//     description:
//       " Dental Care is a website that helps in providing dental health care. It provides various health services such as teeth whitening, wisdom teeth removal and dental emergency . User can contact via mail also.",
//   },
// ];

export { navLinks, skills };
