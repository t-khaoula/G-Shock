import React from "react";
import technologyImage1 from "/img/hammer.png";
import technologyImage2 from "/img/target.png";
import technologyImage3 from "/img/sandclock.png";
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";

const technologyData = [
  {
    id: 1,
    title: "Toughness",
    icon: technologyImage1,
    description: "Pursuit of absolute strength",
    delay: 0.5,
  },
  {
    id: 2,
    title: "Accuracy",
    icon: technologyImage2,
    description: "The challenge of absolute precision",
    delay: 0.7,
  },
  {
    id: 3,
    title: "Usability",
    icon: technologyImage3,
    description: "Improved reliability and practicality",
    delay: 0.9,
  },
];

export const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 70,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  };
};

const Technology = () => {
  return (
    <section className="bg-gray-100 font-bebasNeue pt-8 pb-16">
      <div className="container py-3">
        <motion.h2
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="show"
          className="text-3xl font-bold text-center mb-10"
        >
          Technology
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {technologyData.map((data) => (
            <UpdateFollower
              mouseOptions={{
                backgroundColor: "#000",
                zIndex: 9999,
                followSpeed: 0.5,
                scale: 5,
                rotate: -720,
                mixBlendMode: "darken",
                backgroundElement: (
                  <div>
                    <img src={data.icon} />
                  </div>
                ),
              }}
            >
              <motion.div
                variants={fadeUp(data.delay)}
                initial="hidden"
                whileInView="show"
                key={data.id}
                className="bg-white gap-4 max-w-[300px] flex-col flex items-center justify-center p-5 mx-auto shadow-lg rounded-xl "
              >
                <img
                  src={data.icon}
                  alt={data.title}
                  className="w-[100px] h-[100px] mb-4"
                />
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold font-bebasNeue">
                    {data.title}
                  </h3>
                  <p className="text-sm font-publicSans">{data.description}</p>
                </div>
              </motion.div>
            </UpdateFollower>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
