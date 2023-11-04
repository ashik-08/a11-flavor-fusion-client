import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

const MainLayout = () => {
  return (
    <section>
      <NavBar></NavBar>
      <div className="container mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default MainLayout;
