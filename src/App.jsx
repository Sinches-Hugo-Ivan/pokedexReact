import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Pokedex from "./components/Pokedex";
import Home from "./components/Home";
import Item from "./components/Item";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Confi from "./components/Confi";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/pokedex/:id" element={<Item />} />
            <Route path="/confi" element={<Confi />} />
          </Route>
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
