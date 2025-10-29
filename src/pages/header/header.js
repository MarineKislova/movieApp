import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "../home/home";
import mainLogo from "../../assets/icons/icons8-movieLogo-48.png";

function Header() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/home">{mainLogo} MovieApp</Link>
      </header>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Header;
