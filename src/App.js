import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => (
  <Router>
    <Navbar />
    <Route exact path="/" component={About} />
    <Route path="/discover" component={Discover} />
    <Footer />
  </Router>
);
export default App;
