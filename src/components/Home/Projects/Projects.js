import { motion } from "framer-motion";
import React, { useState } from "react";
import { projects } from "../../../utils/data";
import "./Projects.css";
import SwiperProjects from "./SwiperProjects";

const scaleVariants ={
  whileInView:{
    // scale:[0,1],
    x: [50, 0],
    opacity:[0,1],
    transition:{
      duration:0.7,
      ease:"easeInOut"
    }
  }
}

const Projects = () => {
  const [toggle, setToggle] = useState(1);
  const toggleTap = (index) => {
    setToggle(index);
    // console.log("55",toggle)
  };
  return (
    <div className="projects-section">
      <div className="projects-right">
        <motion.h1
          // whileInView={{ y: [100, 0], opacity: [0, 1] }}
          // transition={{ duration: 0.7 }}
          variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        >
          مشاريع رؤية 2030
        </motion.h1>
        <motion.div
          // whileInView={{ y: [100, 0], opacity: [0, 1] }}
          // transition={{ duration: 0.5 }}
          variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
          className="cities"
        >
          <motion.div
            className={toggle === 1 ? "tabs tabs-active" : "tabs"}
            onClick={() => toggleTap(1)}
          >
            العاصمة
          </motion.div>
          <motion.div
            className={toggle === 2 ? "tabs tabs-active" : "tabs"}
            onClick={() => toggleTap(2)}
          >
            الجلالة
          </motion.div>
          <motion.div
            className={toggle === 3 ? "tabs tabs-active" : "tabs"}
            onClick={() => toggleTap(3)}
          >
            العلمين
          </motion.div>
        </motion.div>
      </div>
      <div className="projects-left">
        {/* {console.log("20",projects[0].capital)} */}
        <div
          className={
            toggle === 1
              ? "content-project content-project-active"
              : "content-project"
          }
        >
          <SwiperProjects data={projects[0].capital} />
        </div>
        <div
          className={
            toggle === 2
              ? "content-project content-project-active"
              : "content-project"
          }
        >
          <SwiperProjects data={projects[1].alamin} />
        </div>
        <div
          className={
            toggle === 3
              ? "content-project content-project-active"
              : "content-project"
          }
        >
          <SwiperProjects data={projects[2].redSea} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
