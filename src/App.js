//*Routing Pages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//*route pages
import Home from "./pages/Home";
import About from "./pages/About";
//*Auth
import { AuthProvider } from "./contexts/AuthContext";
import Signup from "./components/Signup";
import Login from "./components/Login";


function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
