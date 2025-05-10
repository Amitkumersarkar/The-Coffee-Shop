// import { Outlet } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";

const MainLayouts = () => {

    return (
        <div>
            {/* Navbar Section*/}
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-232px)] py-12">
                {/* Dynamic content here */}
                <Outlet></Outlet>
            </div>
            {/* Footer Section*/}
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;