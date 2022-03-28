import Navbar from "./Navbar";
// import Footer from "./Footer";
import {Outlet} from "react-router-dom";
import Footer from "./Footer";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeIsLogged} from "../features/IsLogged";
import axios from "axios";
import {changeEventsJoined} from "../features/EventsJoined";
import {changeTheme} from "../features/Theme";

export default function Layout() {
    
    const dispatch = useDispatch();
    
    const [updateEvents, setUpdateEvents] = useState(false);
    
    const theme = useSelector((state) => state.theme.value);
    
    useEffect(() => {
        if (localStorage["session"]) {
            dispatch(changeIsLogged(true))
        }
        else {
            dispatch(changeIsLogged(false))
        }
    });
    
    useEffect(() => {
        const bodyBg = document.querySelector('#body')
        if (localStorage["theme"]) {
            dispatch(changeTheme('dark'))
            bodyBg.style.background = '#0E0E10'
        }
        else {
            dispatch(changeTheme('light'))
            bodyBg.style.background = '#EDEFF1'
        }
    });
    
    
    setInterval(() => {
        axios
            .get('/api/Event/status-update')
    }, 180000)
    
    
    return (
        <div data-theme={theme}>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}
