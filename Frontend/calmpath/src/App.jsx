import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/dashboard.jsx";
import MoodTracker from "./pages/moodtracker.jsx";
import MoodHistory from "./pages/moodhistory.jsx";
import Journal from "./pages/journal.jsx";
import Profile from "./pages/profile.jsx";
import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";
import MindGames from "./pages/mindgames.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* CORE APP */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/mood-tracker" element={<MoodTracker />} />
        <Route path="/mood-history" element={<MoodHistory />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/profile" element={<Profile />} />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* MIND GAMES */}
        <Route path="/mind-games" element={<h1>Mind Games Test</h1>} />

      </Routes>
    </Router>
  );
}

export default App;
