import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import WishListPage from "./pages/WishListPage";
import ContactUsPage from "./pages/ContactUsPage";
import BlogPage from "./pages/BlogPage";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/shop" component={ShopPage}></Route>
          <Route exact path="/wishlist" component={WishListPage}></Route>
          <Route exact path="/contact" component={ContactUsPage}></Route>
          <Route exact path="/blog" component={BlogPage}></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
