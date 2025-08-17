import { Routes, Route, Link } from "react-router-dom";
import TermsPage from "./pages/TermsPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  console.log("App component is rendering");

  return (
    <div className="app">
      <main className="main">
        <Routes>
          <Route path="/" element={<TermsPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
