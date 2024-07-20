import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";

const navbarMenu = [
  {
    id: 1,
    title: "History of G-Shock",
    link: "#",
  },
  {
    id: 2,
    title: "Technology",
    link: "#",
  },
  {
    id: 3,
    title: "G-Snap",
    link: "#",
  },
  {
    id: 4,
    title: "Store",
    link: "#",
  },
  {
    id: 5,
    title: "Support",
    link: "#",
  },
];
const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="container flex justify-between items-center py-4 bg-white"
    >
      {/* Logo section */}
      <div>
        <a href="/">
          <img className="logo" src="/img/G-Shock-logo.svg" alt="logo" />
        </a>
      </div>
      {/* Menu items */}
      <div className="hidden lg:block">
        <ul className="flex justify-start items-center gap-4">
          {navbarMenu.map((item) => (
            <li key={item.id}>
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 999,
                  followSpeed: 1.5,
                  scale: 5,
                  mixBlendMode: "difference",
                }}
              >
                <a
                  className="inline-block text-2xl py-2 px-3 uppercase font-bebasNeue"
                  href={item.link}
                >
                  {item.title}
                </a>
              </UpdateFollower>
            </li>
          ))}
          <div className="flex items-center gap-1">
            <UpdateFollower
              mouseOptions={{
                backgroundColor: "white",
                zIndex: 999,
                followSpeed: 1.5,
                scale: 5,
                mixBlendMode: "difference",
              }}
            >
              {/* <button className="text-2xl ms-14">
                <CiSearch />
              </button>
              <button className="text-2xl">
                <CiShoppingCart />
              </button> */}
            </UpdateFollower>
          </div>
        </ul>
      </div>
      {/* Mobile menu section */}
      <div className="lg:hidden">
        <MdMenu className="text-4xl" />
      </div>
    </motion.nav>
  );
};

export default Navbar;
