import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Market from "./pages/Market";
import Tools from "./pages/Tools";
import News from "./pages/News";
import Lessons from "./pages/Lessons";
import Community from "./pages/Community";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/market" element={<Market />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/news" element={<News />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;