import { Route, Router, Routes } from '@solidjs/router';
import type { Component } from 'solid-js';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Team from './pages/Team';

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/our_team" component={Team} />
      <Route path="/contact" component={Contact} />
    </Routes>
  );
};

export default App;
