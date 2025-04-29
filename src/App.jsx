/** @jsxImportSource react */
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TalkToExpert from "./pages/TalkToExpert";
import IT from "./pages/IT";
import AboutUs from "./pages/AboutUs";
import MeetOurTeam from "./pages/MeetOurTeam";
import ContactUs from "./pages/ContactUs";
import News from "./pages/News";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="talk-to-expert" element={<TalkToExpert />} />
          <Route path="it" element={<IT />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="meet-our-team" element={<MeetOurTeam />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="news" element={<News />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
