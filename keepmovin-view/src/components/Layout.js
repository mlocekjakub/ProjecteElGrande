import Navbar from "./Navbar";
// import Footer from "./Footer";
import {Outlet} from "react-router-dom";
import Footer from "./Footer";

export default function Layout() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer/>
        </div>
    );
}
