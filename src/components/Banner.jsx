import React from "react";
import image_main from "/img/LED.avif";
import { easeInOut, motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";
import { fadeUp } from "./Technology";

const Banner = () => {
  return (
    <section className="bg-[#151c24]">
      <div className=" container pt-24 pb-8 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 gap-10">
        {/* Image section */}
        <motion.img
          initial={{ opacity: 0, x: -100, rotate: -180 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          src={image_main}
          alt=""
          className="w-[300px] md:w-[450px] "
        />
        {/* Text section */}
        <div className="flex flex-col justify-center">
          <div className="text-white text-center md:text-left space-y-4 lg:max-w-[500px]">
            <motion.h2
              variants={fadeUp(0.7)}
              initial="hidden"
              whileInView="show"
              className="text-3xl lg:text-4xl font-semibold font-bebasNeue"
            >
              Iconic Styles
            </motion.h2>
            <motion.p
              variants={fadeUp(0.9)}
              initial="hidden"
              whileInView="show"
              className="font-publicSans"
            >
              The popularity of G-SHOCK increased sharply in the mid-1980s, worn
              initially by skateboarders for their robustness before gaining
              prominence in street culture and becoming an integral piece of
              wristwear in the world of music, fashion and sports, as well as
              the artistic landscape of urban culture. Our iconic case designs
              have continued to evolve over the years, and still inspire today’s
              contemporary designs.
            </motion.p>
            <UpdateFollower
              mouseOptions={{
                backgroundColor: "#151C24",
                zIndex: 9999,
                followSpeed: 0.5,
                mixBlendMode: "difference",
                scale: 5,
              }}
            >
              <motion.button
                variants={fadeUp(1)}
                initial="hidden"
                whileInView="show"
                className="border-2 border-[#e33343] text-[#e33343] px-6 py-2 rounder-md hover:bg-[#e33343] hover:text-white"
              >
                Shop Now
              </motion.button>
            </UpdateFollower>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
