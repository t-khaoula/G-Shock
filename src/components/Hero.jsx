import React from "react";
import watch1 from "/img/image1.webp";
import watch1v2 from "/img/image1-2.webp";
import watch2 from "/img/image2.webp";
import watch2v2 from "/img/image2-2.webp";
import watch3 from "/img/image3-1.webp";
import watch3v2 from "/img/image3-2.webp";
import { UpdateFollower } from "react-mouse-follower";
import { AnimatePresence, easeInOut, motion } from "framer-motion";

const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.5,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.5,
      transition: {
        duration: 0.2,
        delay: delay,
        ease: easeInOut,
      },
    },
  };
};

const watchData = [
  {
    id: 1,
    image: watch1,
    descImage: watch1v2,
    title: "B3000DN-1A",
    description:
      "This premium timepiece from the MTG-B3000 series seamlessly combines sophisticated design with G-Shock's renowned durability. Featuring a sleek stainless steel case, advanced solar-powered technology, and Bluetooth connectivity for precise timekeeping.",
    price: "$1,140",
    bgColor: "#0891ac",
  },

  {
    id: 2,
    image: watch2,
    descImage: watch2v2,
    title: "B3000BD-1A2JF",
    description:
      "This premium timepiece from the MTG-B3000 series seamlessly combines sophisticated design with G-Shock's renowned durability. Featuring a sleek stainless steel case, advanced solar-powered technology, and Bluetooth connectivity for precise timekeeping.",
    price: "$946",
    bgColor: "#184632",
  },

  {
    id: 3,
    image: watch3,
    descImage: watch3v2,
    title: "B3000-1AJF",
    description:
      "This premium timepiece from the MTG-B3000 series seamlessly combines sophisticated design with G-Shock's renowned durability. Featuring a sleek stainless steel case, advanced solar-powered technology, and Bluetooth connectivity for precise timekeeping.",
    price: "$843",
    bgColor: "#850101",
  },
];

const Hero = () => {
  const [activeData, setActiveData] = React.useState(watchData[0]);
  const handleActiveData = (data) => {
    setActiveData(data);
  };
  return (
    <section className="bg-white">
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
        {/* Text section */}
        <div className="order-2 md:order-1 flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]">
          <div className="space-y-5 text-center md:text-left md:block flex flex-col justify-center items-center">
            <div key={activeData.id} className="cursor-default">
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "#fff",
                    zIndex: 9999,
                    folllowSpeed: 0.5,
                    rotate: -720,
                    mixBlendMode: "difference",
                    scale: 5,
                  }}
                >
                  <motion.h1
                    variants={fadeUp(0.4)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="text-secondary text-3xl lg:text-6xl mb-5 font-bold font-publicSans"
                  >
                    MT-G <br />
                    {activeData.title}
                  </motion.h1>
                </UpdateFollower>
              </AnimatePresence>
              <AnimatePresence>
                <motion.p
                  variants={fadeUp(0.3)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="text-sm leading-loose font-publicSans text-secondary"
                >
                  {activeData.description}
                </motion.p>
              </AnimatePresence>
            </div>
            <div className="w-fit">
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: activeData.bgColor,
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -720,
                    scale: 5,
                    backgroundElement: (
                      <div>
                        <img src={activeData.image} className="w-2" />
                      </div>
                    ),
                  }}
                >
                  <motion.button
                    key={activeData.id}
                    variants={fadeUp(0.2)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    style={{ backgroundColor: activeData.bgColor }}
                    className="px-4 py-2 inline-block font-normal rounded-sm text-white font-bebasNeue"
                  >
                    Buy Now
                  </motion.button>
                </UpdateFollower>
              </AnimatePresence>
            </div>
            {/* Others text */}
            <div className="flex items-center justify-center md:justify-start gap-5 !mt-16">
              <div className="w-20 h-[1px] bg-black"></div>
              <p className="uppercase text-lg font-bebasNeue">Discover More</p>
              <div className="w-20 h-[1px] bg-black"></div>
              <div></div>
            </div>

            {/* Others list */}
            <div className="grid md:grid-cols-5 md:max-w-none gap-5 grid-cols-3 max-w-[300px] m-auto">
              {watchData.map((item) => {
                return (
                  <UpdateFollower
                    mouseOptions={{
                      backgroundColor: item.bgColor,
                      zIndex: 9999,
                      followSpeed: 0.5,
                      scale: 5,
                      text: "View Details",
                      textFontSize: "3px",
                    }}
                  >
                    <div onClick={() => handleActiveData(item)} key={item.id}>
                      <img
                        src={item.descImage}
                        className="md:w-[200px] cursor-pointer w-[100px]"
                        alt="watch image"
                      />
                      {item.id === activeData.id && (
                        <div className="flex justify-center w-full">
                          <div className="h-1 w-8 mt-3 mr-1 bg-[#BBBCD0] rounded-sm"></div>
                        </div>
                      )}
                    </div>
                  </UpdateFollower>
                );
              })}
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="order-1 md:order-2 flex flex-col justify-center items-center md:mt-0 mt-24">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeData.id}
              initial={{ opacity: 0, scale: 0.9, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: easeInOut }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 100,
                transition: {
                  duration: 0.2,
                },
              }}
              src={activeData.image}
              alt="watch image"
            />
          </AnimatePresence>
          <img className="ml-8 mt-5" src="/img/shadow.svg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
