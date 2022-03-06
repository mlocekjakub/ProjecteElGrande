
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import './App.css';
import WelcomePage from "./components/WelcomePage/WelcomePage";
import ProfilePage from "./components/profilePage/ProfilePage"
import SportEventsPage from "./components/sportEventsPage/SportEventsPage";
import RegisterForm from "./components/Register/RegisterForm";
import EventForm from "./components/Event/EventForm";
import LoginForm from "./components/Login/LoginForm";
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
            <Route path="register" element={<RegisterForm />} />
            <Route path="login" element={<LoginForm />}/>
            <Route path="event/:id" element={<EventPage />}/>
            <Route path="event/create" element={<EventForm />} />
              <Route path="list-of-events" element={<SportEventsPage />} />
              <Route path="Settings" element={<Settings />} />
        </Route>
      </Routes>
  );
}
export default App;
