import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar"
import FavouritesMovies from "./pages/FavouritesMovies";

import ContactUs from "./pages/ContactUs";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Router>
      <div>
      <Navbar/>
       
        <Route path="/" exact component={HomePage} />
        <Route path="/favourites" component={FavouritesMovies} />
        
        <Route path="/contact" component={ContactUs} />
      </div>

    </Router>
  );
};

export default App;
