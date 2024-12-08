import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Layout from "./components/ui/Layout";
import Home from "./components/page/Homepage/Home";
import ErrorPage from "./components/ui/ErrorPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
