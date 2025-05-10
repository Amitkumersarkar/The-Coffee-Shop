// import { Outlet } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";

const MainLayouts = () => {

    return (
        <div className="w-11/12 mx-auto">
            {/* Navbar Section*/}
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-232px)] py-12 container mx-auto px-8">
                {/* Dynamic content here */}
                <Outlet></Outlet>
            </div>
            {/* Footer Section*/}
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;