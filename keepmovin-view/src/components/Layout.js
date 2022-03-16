import Navbar from "./Navbar";
// import Footer from "./Footer";
import {Outlet} from "react-router-dom";
import Footer from "./Footer";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {changeIsLogged} from "../features/IsLogged";

export default function Layout() {
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (localStorage["session"]) {
            dispatch(changeIsLogged(true))
        }
        else {
            dispatch(changeIsLogged(false))
        }
    });
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer/>
        </div>
    );
}
