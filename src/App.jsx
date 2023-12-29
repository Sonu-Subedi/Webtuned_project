import Header from "./components/Header";
import "../src/assets/sass/style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Pages from "./components/pages/Pages";
import Shop from "./components/pages/Shop";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import Carousel from "./components/Layout";
import Topbar from "./components/Topbar";
import Mainheader from "./components/Mainheader";
import Content from "./components/Content";
import ProductList from "./components/Products";
import TestimonialSection from "./components/Testimonial";
import ScrollToTop from "./components/ScrollToTop";
import TrendingProducts from "./components/TrendingProducts";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Topbar />
        <Mainheader />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Carousel />
        <Content />
        <ProductList />
        <TrendingProducts />
        <TestimonialSection />
        <Footer />
        <ScrollToTop />
      </BrowserRouter>
    </div>
  );
};

export default App;
