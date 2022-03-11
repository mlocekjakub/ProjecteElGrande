
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import './App.css';
import WelcomePage from "./components/WelcomePage/WelcomePage";
import ProfilePage from "./components/profilePage/ProfilePage"
import SportEventsPage from "./components/sportEventsPage/SportEventsPage";
import EventForm from "./components/Event/EventForm";
import RegisterLoginPage from "./components/RegisterLoginPage/RegisterLoginPage";
import EventPage from "./components/Event/EventPage";
import CalendarPage from "./components/CalendarPage/CalendarPage";
import Settings from "./components/Settings/Settings";



function App() {
    
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={< WelcomePage />}/>
            <Route path="home" element={<WelcomePage />}/>
            <Route path="calendar" element={<CalendarPage />}/>
            <Route path="profile" element={<ProfilePage />}/>
            <Route path="register" element={<RegisterLoginPage action="register"/>}/>
            <Route path="login" element={<RegisterLoginPage action="login"/>}/>
            <Route path="event/:id" element={<EventPage />}/>
            <Route path="event/create" element={<EventForm />} />
            <Route path="list-of-events" element={<SportEventsPage />} />
            <Route path="Settings" element={<Settings />} />
        </Route>
      </Routes>
  );
}
export default App;
