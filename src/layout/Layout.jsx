import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Center from "../components/Center/Center";
import "./Layout.scss";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Center>
        <Outlet />
      </Center>
      <Footer />
    </div>
  );
}
