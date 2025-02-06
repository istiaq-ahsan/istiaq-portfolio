import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import ParticlesComponent from "../components/ParticlesComponent";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen mt-[88px]">
        <div className="absolute inset-0 -z-10">
          <ParticlesComponent id="banner-particles" />
        </div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
