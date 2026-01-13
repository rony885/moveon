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
import ScrolltoTop from "./components/ScrolltoTop";
import Product from "./pages/Product/Product";
import NotFound from "./components/NotFound";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleCategory = () => setCategoryOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);
  const closeCategory = () => setCategoryOpen(false);

  // // 🔥 ADD / REMOVE BODY CLASS
  // useEffect(() => {
  //   if (menuOpen) {
  //     document.body.classList.add("mobile-menu-visible");
  //   } else {
  //     document.body.classList.remove("mobile-menu-visible");
  //   }
  // }, [menuOpen]);

  // 🔥 MOBILE MENU BODY CLASS
  useEffect(() => {
    document.body.classList.toggle("mobile-menu-visible", menuOpen);
  }, [menuOpen]);

  // 🔥 CATEGORY MENU BODY CLASS
  useEffect(() => {
    document.body.classList.toggle("category-visible", categoryOpen);
  }, [categoryOpen]);

  return (
    <div className="">
      <BrowserRouter>
        <div className="boxed_wrapper ltr">
          {/* <Loader /> */}
          <PageDirection />
          <Header toggleMenu={toggleMenu} toggleCategory={toggleCategory} />
          <MobileMenu menuOpen={menuOpen} closeMenu={closeMenu} />
          <CategoryMenu
            categoryOpen={categoryOpen}
            closeCategory={closeCategory}
          />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/shop" element={<Product />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <Footer />
          <ScrolltoTop />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
