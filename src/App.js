//*Routing Pages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//*route pages
import Home from "./pages/Home";
import About from "./pages/About";
import Lend from "./pages/Lend";
//*Auth
import { AuthProvider } from "./contexts/AuthContext";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import PrivateRoute from "./components/PrivateRoute";
import UpdateProfile from "./components/UpdateProfile";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/update-profile" element={<PrivateRoute/>}>
              <Route path="/update-profile" element={<UpdateProfile/>}/>
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
          <Route path="/lend" element={<Lend/>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
