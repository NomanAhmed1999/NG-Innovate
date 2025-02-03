// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from './pages/home';
import Contact from "./pages/contact";
import About from "./pages/about";
import Service from "./pages/service";


const App = () => {

// Routing
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About /> } />
          <Route path="contact" element={<Contact />} />
          <Route path="service" element={<Service />} />
          <Route path="*" element={<h1>No page Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;