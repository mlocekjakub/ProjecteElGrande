import * as React from 'react';
import "./Navbar.css";
import "../index.css"
import Notifications from "./NavbarComponents/Notifications";
import Profile from "./NavbarComponents/Profile";
import Home from "./NavbarComponents/Home";
import Searchbar from "./NavbarComponents/Searchbar";
import Logo from "./NavbarComponents/Logo";
import Calendar from "./NavbarComponents/Calendar";
import SignIn from "./NavbarComponents/SignIn";
import {useDispatch, useSelector} from "react-redux";
import burgerIcon from "../Images/icon-hamburger.svg"
import closeIcon from "../Images/icon-close.svg"
import {useEffect, useRef, useState} from "react";
import MobileCalendar from "./NavbarComponents/MobileComponents/MobileCalendar";
import MobileProfile from "./NavbarComponents/MobileComponents/MobileProfile";
import MobileNotifications from "./NavbarComponents/MobileComponents/MobileNotifications";
import MobileHome from "./NavbarComponents/MobileComponents/MobileHome";
import SearchIcon from "@mui/icons-material/Search";
import {changeSearchPhrase} from "../features/SearchPhraseNav";
import axios from "axios";


export default function Navbar() {
    
    const isUserLogged = useSelector((state) => state.isLogged.value)
    
    const theme = useSelector((state) => state.theme.value)
    
    const [mobileMenuExpanded, setMobileMenuExpanded] = useState(false);
    
    const [searchMenuExpanded, setSearchMenuExpanded] = useState(false)

    const typedInput = useSelector((state) => state.searchNav.value)

    const [eventsFound, setEventsFound] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        if (typedInput !== '') {
            axios
                .get(`/api/Event/input/${typedInput}`)
                .then(response => {
                    setEventsFound(response.data)

                })
        }
    }, [typedInput])

    const [windowSize, setWindowSize] = useState(null)

    useEffect(() => {
        const handleResize = () => {
            setWindowSize(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const mobileMenuRef = useRef(null);

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (
                mobileMenuExpanded
                && mobileMenuRef.current
                && !mobileMenuRef.current.contains(e.target)) {
                setMobileMenuExpanded(false)
            }
        };
        document.addEventListener("mousedown", checkIfClickedOutside);
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [mobileMenuExpanded]);
    
    return (
        <>
            <header data-theme={theme}>
                <div className="logo-search">
                    <Logo />
                    <Searchbar />
                </div>
                <nav>
                    <div className="nav__links">
                        <Home />
                        {isUserLogged && <Calendar />}
                        {isUserLogged && <Notifications />}
                        {isUserLogged ? <Profile /> : <SignIn />}
                    </div>
                    <button className="search-mobile-menu">
                        <input type="text" 
                               className={`mobile-search-txt-header
                               ${searchMenuExpanded && windowSize < 768 && 'mobile-search-menu-active'}`} 
                               placeholder="Search for event.."
                               required
                               value = {typedInput}
                               onChange = {(e) => { dispatch(changeSearchPhrase(e.target.value)) }
                               }
                        />
                        <SearchIcon 
                            className="mobile-header-search-icon" 
                            onClick={() => setSearchMenuExpanded(!searchMenuExpanded)}/>
                    </button>
                    <button className="burger-menu" 
                            onClick={() => setMobileMenuExpanded(!mobileMenuExpanded)}>
                        <img src={(mobileMenuExpanded && windowSize < 768) ? closeIcon : burgerIcon} alt='burgerIcon' />
                    </button>
                </nav>
            </header>
            <div ref={mobileMenuRef} className={`mobile-menu-expanded 
            ${(mobileMenuExpanded && windowSize < 768) ? 'mobile-menu-active' : 'mobile-menu-inactive'}`}>
                {isUserLogged ? <MobileProfile /> : <SignIn theme={theme} windowSize={windowSize}/>}
                {isUserLogged && <MobileNotifications />}
                {isUserLogged && <MobileCalendar />}
                <MobileHome windowSize={windowSize}/>
            </div>
        </>
    );
}

