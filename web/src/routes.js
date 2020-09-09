import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from './components/Footer';

// import Home from "./pages/Home";
import Warning from './pages/Warning';
import Blog from './pages/Blog';
import Post from './pages/Post';

export default function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/" exact component={Blog} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/blog/:post_id" exact component={Post} />
        <Route path="/" component={Warning} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
