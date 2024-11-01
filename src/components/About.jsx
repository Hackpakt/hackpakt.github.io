import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, developer, title, icon, github, portfolio }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={developer}
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center truncate'>
          {developer}
        </h3>
        <p className='text-gray-300 text-[14px] text-center'>{title}</p>

        {/* Add GitHub and Portfolio buttons */}
        <div className='flex flex-row gap-2 mt-4'>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className='violet-gradient text-white py-2 px-4 rounded'
          >
            GitHub
          </a>
          <a
            href={portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className='violet-gradient text-white py-2 px-4 rounded'
          >
            Portfolio
          </a>
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        A dynamic team of tech enthusiasts passionate about innovative problem-solving.
        We specialize in development, design, and project execution, blending diverse skills 
        to deliver impactful solutions. With a commitment to collaboration and learning, 
        Hack-PAKT is dedicated to creating meaningful, cutting-edge tech that makes a difference.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");