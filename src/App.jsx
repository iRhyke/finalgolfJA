import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./Layout";
import Home from "./pages/Home";
import Facility from "./pages/Facility";
import Simulator from "./pages/Simulator";
import Pricing from "./pages/Pricing";
import Access from "./pages/Access";
import Faq from "./pages/Faq";
import Trial from "./pages/Trial";
import Contact from "./pages/Contact";
import Tokushoho from "./pages/Tokushoho";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

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
          <Route path="/facility" element={<Facility />} />
          <Route path="/simulator" element={<Simulator />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/access" element={<Access />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/trial" element={<Trial />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tokushoho" element={<Tokushoho />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/equipment" element={<Navigate to="/facility" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}