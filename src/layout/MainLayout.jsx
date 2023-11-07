import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

const MainLayout = () => {
  return (
    <section>
      <NavBar></NavBar>
      <div className="container mx-auto px-1 2xl:px-0">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default MainLayout;
