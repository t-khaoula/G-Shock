import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technology from "./components/Technology";
import { UpdateFollower } from "react-mouse-follower";
import Banner from "./components/Banner";
import Button from "./components/Button";
import News from "./components/News";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "black",
          zIndex: 999,
          followSpeed: 1.5,
        }}
      >
        <Navbar />
        <Hero />
        <Technology />
        <Banner />
        <Button />
        <News />
        <Footer />
      </UpdateFollower>
    </main>
  );
};

export default App;
