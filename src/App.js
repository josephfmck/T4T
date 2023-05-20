//*Routing Pages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//*route pages
import Home from "./pages/Home";
import About from "./pages/About";
import Signup from "./components/Signup";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
