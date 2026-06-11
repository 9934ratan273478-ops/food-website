import Navbar from "./Layout/Navbar";
import Footer from "./Layout/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Pages from "./pages/Pages";
import Contact from "./pages/Contact";
import BookTable from "./components/BookTable";
import Loginpage from "./components/Loginpage";
import RegisterPage from "./components/Registerpage";
function App() {

  return (
    <>
      <BrowserRouter>
          <Navbar />
          <div style={{marginTop:"120px"}}>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booktable" element={<BookTable />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/register" element={<RegisterPage />} />

          </Routes>
          </div>
          <Footer />
      </BrowserRouter>
    </>
  )
}

export default App