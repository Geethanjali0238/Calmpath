import { BrowserRouter, Routes, Route } from "react-router-dom";

/* AUTH */
import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";

/* MAIN PAGES */
import Dashboard from "./pages/dashboard.jsx";
import MoodTracker from "./pages/moodtracker.jsx";
import MoodHistory from "./pages/moodhistory.jsx";
import Journal from "./pages/journal.jsx";
import Profile from "./pages/profile.jsx";

import MindGames from "./pages/mindgames.jsx";
import Sudoku from "./pages/sudoku.jsx";
import MemoryGame from "./pages/memorygame.jsx";
import Crossword from "./pages/crossword.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* AUTH */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* APP ROUTES */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mood" element={<MoodTracker />} />
        <Route path="/history" element={<MoodHistory />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/mindgames" element={<MindGames />} />
        <Route path="/mindgames/sudoku" element={<Sudoku />} />
        <Route path="/mindgames/memory" element={<MemoryGame />} />
        <Route path="/mindgames/crossword" element={<Crossword />} />
      </Routes>
    </BrowserRouter>
  );
}
