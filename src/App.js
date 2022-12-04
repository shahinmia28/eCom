import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Products from "./Products";
import Cart from "./Cart";
import SingleProduct from "./SingleProduct";
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const theme = {
    colors: {
      heading: "#18181d",
      text: "#1d1d1dcc",
      white: "#ffffff",
      black: "#212529",
      helper: "#8490ff",
      bg: "#f6f8fa",
      footer_bg: "#0a1435",
      btn: "#6254f3",
      hr: "#ffffff",
      gradient: "linear-gradient(0deg, #8490ff) 0%, #62bdfc 100%",
      shadow: "#00000005 0px 1px 3px 0px, #1b1f2326 0px, 0px, 0px, 1px",
      shadowSupport: "#00000026 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
