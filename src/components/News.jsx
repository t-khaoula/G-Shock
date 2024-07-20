import React from "react";
import News1 from "/img/news1.avif";
import News2 from "/img/news2.avif";
import News3 from "/img/news3.webp";
import { motion } from "framer-motion";
import { fadeUp } from "./Technology";
import { UpdateFollower } from "react-mouse-follower";

const article = [
  {
    id: 1,
    image: News1,
    title: "MR-G | Nano Technology",
    description:
      "Ultra-precision mold processing achieved with sophisticated original technology",
  },
  {
    id: 2,
    image: News2,
    title: "MR-G | The Mother Factory",
    description:
      "Introducing Yamagata Casio, craftsmanship central for the flagship G-SHOCK line",
  },
  {
    id: 3,
    image: News3,
    title: "GBD-300",
    description:
      "Advanced metrics for enhancing and tracking running performance efficiently",
  },
];

const News = () => {
  return (
    <section className="bg-gray-100 font-bebasNeue pt-10 pb-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-10">Latest News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {article.map((item) => {
            return (
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "black",
                  zIndex: 9999,
                  followSpeed: 1.5,
                  text: "Read",
                  textFontSize: "3px",
                  scale: 5,
                }}
              >
                <div
                  key={item.id}
                  className="flex flex-col items-center justify-center gap-6 p-5 max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:-translate-y-2 duration-300"
                >
                  <img src={item.image} alt={item.title} />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bebasNeue line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="font-publicSans">{item.description}</p>
                  </div>
                </div>
              </UpdateFollower>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default News;
