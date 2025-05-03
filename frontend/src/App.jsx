import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/homePage";
import LandingPage from "./pages/landingPage";
import AuthPage from "./pages/authPage";
import Dashboard from "./pages/dashboard";
import ReportPage from "./pages/reportPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />

        {/* Protected Pages */}
        <Route path="/landingPage" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/report/:id" element={<ReportPage />} />

        {/* Fallback: Any unknown URL */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
