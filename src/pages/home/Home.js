import React from "react";
import "./_home.scss"
import Carousels from "./components/Carousels";
import Comingsone from "./components/Comingsone";
import Tabs from "./components/Tabs";
import Video from "./components/Video";
export const Home = () => {
  return (
    <>
      <Carousels/>
      <Comingsone/>
      <Tabs/>
      <Video/>
    </>
  );
};
// import { motion, useScroll } from "framer-motion"

// export const CircleIndicator = () => {
//   const { scrollYProgress } = useScroll()

//   return (
//     <motion.path
//       d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
//       style={{ pathLength: scrollYProgress }}
//     />
//   )
// }