import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Loader from "./components/Loader";
import PageDirection from "./components/PageDirection";
import Header from "./components/Header/Header";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import CategoryMenu from "./components/CategoryMenu";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  // 🔥 ADD / REMOVE BODY CLASS
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("mobile-menu-visible");
    } else {
      document.body.classList.remove("mobile-menu-visible");
    }
  }, [menuOpen]);

  return (
    <div className="">
      <BrowserRouter>
        <div className="boxed_wrapper ltr">
          {/* <Loader /> */}
          <PageDirection />
          {/* <Header toggleMenu={toggleMenu} menuOpen={menuOpen} />
          <MobileMenu closeMenu={closeMenu} menuOpen={menuOpen} /> */}
          <Header toggleMenu={toggleMenu} />
          <MobileMenu menuOpen={menuOpen} closeMenu={closeMenu} />
          <CategoryMenu />
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
