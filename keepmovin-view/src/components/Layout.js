import Navbar from "./Navbar";
// import Footer from "./Footer";
import {Outlet} from "react-router-dom";
import Footer from "./Footer";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {changeIsLogged} from "../features/IsLogged";
import axios from "axios";
import {changeEventsJoined} from "../features/EventsJoined";

export default function Layout() {
    
    const dispatch = useDispatch();
    
    const [updateEvents, setUpdateEvents] = useState(false);
    
    useEffect(() => {
        if (localStorage["session"]) {
            dispatch(changeIsLogged(true))
        }
        else {
            dispatch(changeIsLogged(false))
        }
    });
    
    setInterval(() => {
        axios
            .get('/api/Event/status-update')
    }, 180000)
    
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}
