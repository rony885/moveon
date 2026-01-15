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
import ProductDetailsInfo from "./pages/ProductDetails/ProductDetailsInfo";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Profile from "./pages/Authentication/Profile";
import Login from "./pages/Authentication/Login";
import Registration from "./pages/Authentication/Registration";
import About from "./pages/About/About";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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

  // 🔥 Global Loader
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // ✅ EARLY RETURN for Loader
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="">
      <BrowserRouter>
        <div className="boxed_wrapper ltr">
          {/* {isLoading ? (
            <Loader />
          ) : (
            <> */}
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
            <Route path="/about" element={<About />}></Route>
            <Route path="/shop" element={<Product />}></Route>
            <Route
              path="/shop-details"
              element={<ProductDetailsInfo />}
            ></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/blog-details" element={<BlogDetails />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route path="/account" element={<Profile />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/sign-up" element={<Registration />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <Footer />
          <ScrolltoTop />
          {/* </>
          )} */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
