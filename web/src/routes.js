import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Post from './pages/Post';
import Candidatos from './pages/Candidatos';
import Candidato from './pages/Candidato';
import Sobre from './pages/Sobre';
import Contact from './pages/Contact';
import Warning from './pages/Warning';

export default function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/blog/:post_id" exact component={Post} />
        <Route path="/candidatos" exact component={Candidatos} />
        <Route path="/candidatos/:name_candidate" exact component={Candidato} />
        <Route path="/sobre" exact component={Sobre} />
        <Route path="/contato" exact component={Contact} />
        <Route path="*" component={Warning} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
