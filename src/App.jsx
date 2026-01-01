import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Loader from "./components/Loader";
import PageDirection from "./components/PageDirection";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <div className="boxed_wrapper ltr">
          {/* <Loader /> */}
          <PageDirection />
          <Header />
          <Routes>
            {/* <Route path="/home" element={<Home />}></Route> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
