import { Route, Router, Routes } from '@solidjs/router';
import type { Component } from 'solid-js';
import Home from './pages/users/Home';
import About from './pages/users/About';
import Contact from './pages/users/Contact';
import Team from './pages/users/Team';
import Login from './pages/users/Login';
import Register from './pages/users/Register';
import PrivacyPolicy from './pages/users/PrivacyPolicy';
import ComplaintPolicy from './pages/users/ComplaintPolicy';
import ForgotPassword from './pages/users/ForgotPassword';
import PageNotFound from './pages/PageNotFound';

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/our_team" component={Team} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy_policy" component={PrivacyPolicy} />
      <Route path="/complaints-policy" component={ComplaintPolicy} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/forgot_password" component={ForgotPassword} />
      <Route path="*" component={PageNotFound} />
    </Routes>
  );
};

export default App;
