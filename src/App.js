//*Routing Pages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//*route pages
import Home from "./pages/Home";
import About from "./pages/About";
import Lend from "./pages/Lend";
import Rent from "./pages/Rent";
//*Auth
import { AuthProvider } from "./contexts/AuthContext";
//*Global Context
import { GlobalContextProvider } from "./contexts/GlobalContext";
//*DB
import { DBProvider } from "./contexts/DBContext";
//*Storage
import { StorageProvider } from "./contexts/StorageContext";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import PrivateRoute from "./components/PrivateRoute";
import UpdateProfile from "./components/UpdateProfile";

function App() {
  return (
    <Router>
      <GlobalContextProvider>
        <AuthProvider>
          <DBProvider>
            <StorageProvider>
              <Routes>
                <Route path="/update-profile" element={<PrivateRoute />}>
                  <Route path="/update-profile" element={<UpdateProfile />} />
                </Route>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/rent" element={<PrivateRoute />}>
                  <Route path="/rent" element={<Rent />} />
                </Route>
                <Route path="/lend" element={<PrivateRoute />}>
                  <Route path="/lend" element={<Lend />} />
                </Route>
              </Routes>
            </StorageProvider>
          </DBProvider>
        </AuthProvider>
      </GlobalContextProvider>
    </Router>
  );
}

export default App;
