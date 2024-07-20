import React from "react";
import { UpdateFollower } from "react-mouse-follower";

const Button = () => {
  return (
    <section className="py-12 text-center bg-[#151c24]">
      <div className="container">
        <div className="bg-gradient-to-t from-[#FF7F50] to-[#e33343]/70 text-white rounded-3xl p-8 hover:scale-105 duration-500 hover:shadow-2xl ">
          <UpdateFollower
            mouseOptions={{
              backgroundColor: "white",
              zIndex: 9999,
              followSpeed: 0.5,
              mixBlendMode: "difference",
              scale: 5,
            }}
          >
            <p className="uppercase font-bebasNeue font-bold text-4xl max-w-[700px] mx-auto leading-normal">
              Discover full collection
            </p>
          </UpdateFollower>
        </div>
      </div>
    </section>
  );
};

export default Button;
