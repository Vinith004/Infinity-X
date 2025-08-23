import "./App.css";
import Header from "./Layouts/header";
import Footer from "./Layouts/footer";
import Sidebar from "./Layouts/sidebar";
import Home from "./Pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Header className="header"/>
      <div className="layout">
        <Sidebar className="sidebar"/>
        <div className="content">
         
            <Routes>
              <Route path="/" element={ <Home />} />
              <Route path="/about" element={<h1>About</h1>} />
              <Route path="/contact" element={<h1>Contact</h1>} />
            </Routes>
          
        </div>
      </div>
      <Footer className="footer"/>
    </div>
  );
}

export default App;
