import React from "react";
import Routers from "../../routes/Routers";
import Footer from "../Footer/Footer";
import Header from "../Header";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Routers />
      <Footer />
    </div>
  );
};

export default Layout;
