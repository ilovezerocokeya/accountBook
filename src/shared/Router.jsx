import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";


const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detail" element={<Detail />} />
          <Route path="detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default Router;
