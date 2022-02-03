import WelcomePageTitle from "./components/WelcomePage/WelcomePageTitle";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import './App.css';
import WelcomePage from "./components/WelcomePage/WelcomePage";
import ProfilePage from "./components/profilePage/ProfilePage"

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={< WelcomePage />}/>
            <Route path="home" element={<WelcomePage />}/>
            <Route path="profile" element={<ProfilePage />}/>
        </Route>
      </Routes>
  );
}
export default App;
