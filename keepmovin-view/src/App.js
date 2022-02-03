
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import './App.css';
import WelcomePage from "./components/WelcomePage/WelcomePage";
import RegisterForm from "./components/Register/RegisterForm";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={< WelcomePage />}/>
              <Route path="home" element={<WelcomePage />} />
              <Route path="register" element={<RegisterForm />} />           
        </Route>
      </Routes>
  );
}
export default App;
