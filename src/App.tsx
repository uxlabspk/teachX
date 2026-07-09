import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Features from "./pages/Features";
import Testimonials from "./pages/Testimonials";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import VerifyEmail from "./pages/VerifyEmail";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing page with nav and footer */}
        <Route
          path="/"
          element={
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <div className="flex-1">
                <Landing />
              </div>
              <Footer />
            </div>
          }
        />

        {/* Pages with nav and footer */}
        <Route
          path="/features"
          element={
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <div className="flex-1">
                <Features />
              </div>
              <Footer />
            </div>
          }
        />
        <Route
          path="/testimonials"
          element={
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <div className="flex-1">
                <Testimonials />
              </div>
              <Footer />
            </div>
          }
        />
        <Route
          path="/pricing"
          element={
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <div className="flex-1">
                <Pricing />
              </div>
              <Footer />
            </div>
          }
        />

        {/* Auth pages - no nav/footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
      </Routes>
    </Router>
  );
}

export default App;
