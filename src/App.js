import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Blogs from './Components/Blogs/Blogs';
import Details from './Components/Details/Details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/details/:_id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
