import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Layout from "./components/ui/Layout";
import Home from "./components/page/Homepage/Home";
import ErrorPage from "./components/ui/ErrorPage";
import Drink from "./components/page/Drinkpage/Drink";
import Club from "./components/page/Clubpage/Club";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/drink" element={<Drink />} />
            <Route path="/club" element={<Club />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
