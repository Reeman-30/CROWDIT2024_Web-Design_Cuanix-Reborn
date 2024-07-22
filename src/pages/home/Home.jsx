import React from "react";
import WelcomeScreen from "./widgets/WelcomeScreen";
import Benefits from "./widgets/Benefits";
import Testimonials from "./widgets/Testimonials";
import Layout from "../../components/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="container">
        <WelcomeScreen />
        <Benefits />
        <Testimonials />
      </div>
    </Layout>
  );
};

export default Home;
