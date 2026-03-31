import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./Layout";
import Home from "./pages/Home";
import facility from "./pages/facility";
import simulator from "./pages/simulator";
import pricing from "./pages/pricing";
import access from "./pages/access";
import faq from "./pages/faq";
import trial from "./pages/trial";
import contact from "./pages/contact";
import tokushoho from "./pages/tokushoho";
import privacy from "./pages/privacy";
import terms from "./pages/terms";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/facility" element={<facility />} />
          <Route path="/simulator" element={<simulator />} />
          <Route path="/pricing" element={<pricing />} />
          <Route path="/access" element={<access />} />
          <Route path="/faq" element={<faq />} />
          <Route path="/trial" element={<trial />} />
          <Route path="/contact" element={<contact />} />
          <Route path="/tokushoho" element={<tokushoho />} />
          <Route path="/privacy" element={<privacy />} />
          <Route path="/terms" element={<terms />} />
          <Route path="/equipment" element={<Navigate to="/facility" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}