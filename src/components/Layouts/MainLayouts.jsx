// import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";

const MainLayouts = () => {

    return (
        <div>
            {/* Navbar */}
            <Navbar></Navbar>
            {/* Dynamic section */}
            <div className="min-h-[]">

            </div>
            {/* <Outlet></Outlet> */}
            {/* Footer */}
            <Footer></Footer>


        </div>
    );
};

export default MainLayouts;