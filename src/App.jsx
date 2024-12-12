import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/ui/Layout";
import Home from "./components/page/Homepage/Home";
import ErrorPage from "./components/ui/ErrorPage";
import Drink from "./components/page/Drinkpage/Drink";
import Club from "./components/page/Clubpage/Club";

import Cart from "./components/page/profilepage/Cart";
import { ContextBox } from "./components/ui/ContextBox";

function App() {
  return (
    <>
      <ContextBox>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/drink" element={<Drink />} />
              <Route path="/club" element={<Club />} />
              <Route path="/shopingcart" element={<Cart />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ContextBox>
    </>
  );
}

export default App;
