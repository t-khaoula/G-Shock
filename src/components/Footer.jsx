import React from "react";
import fbIcon from "/img/fb_icon.png";
import youtubeIcon from "/img/youtube_icon.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#151c24] pt-12 pb-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Footer links */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-xl font-bebasNeue">Products</h2>
            <div>
              <ul className="text-sm space-y-2 font-publicSans">
                <li>Products</li>
                <li>Women</li>
                <li>New Products</li>
                <li>Catalog</li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6"
          >
            {" "}
            <h2 className="text-xl font-bebasNeue">Brand</h2>
            <div>
              <ul className="text-sm space-y-2 font-publicSans">
                <li>G-SHOCK - Concept</li>
                <li>TECHNOLOGY</li>
                <li>G-SHOCK WORLD</li>
                <li>TEAM G-SHOCK</li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-xl font-bebasNeue">Links</h2>
            <div>
              <ul className="text-sm space-y-2 font-publicSans">
                <li>Store</li>
              </ul>
            </div>
          </motion.div>
          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="space-y-6"
          >
            {" "}
            <h2 className="text-xl font-bebasNeue">Follow Us</h2>
            <div className="flex items-center gap-3">
              <img
                src={fbIcon}
                className="max-w-10 hover:scale-110 duration-300"
                alt="facebook"
              />
              <img
                src={youtubeIcon}
                className="max-w-10 hover:scale-110 duration-300"
                alt="youtube"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
