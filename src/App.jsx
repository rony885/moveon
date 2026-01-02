import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Loader from "./components/Loader";
import PageDirection from "./components/PageDirection";
import Header from "./components/Header/Header";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import CategoryMenu from "./components/CategoryMenu";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <div className="boxed_wrapper ltr">
          {/* <Loader /> */}
          <PageDirection />
          <Header />
          <MobileMenu />
          <CategoryMenu />
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
