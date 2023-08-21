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
import Careers from './pages/users/Careers';
import Profile from './pages/client/Profile';
import Accounts from './pages/client/Accounts';
import Settings from './pages/client/Settings';
import Notifications from './pages/client/Notifications';
import Messages from './pages/client/Messages';
import Protected from './routes/protected';

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/our_team" component={Team} />
      <Route path="/careers" component={Careers} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy_policy" component={PrivacyPolicy} />
      <Route path="/complaints-policy" component={ComplaintPolicy} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/forgot_password" component={ForgotPassword} />
      <Route path="" component={Protected}>
        <Route path="/profile" component={Profile} />
        <Route path="/accounts" component={Accounts} />
        <Route path="/Settings" component={Settings} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/messages" component={Messages} />
      </Route>
      <Route path="*" component={PageNotFound} />
    </Routes>
  );
};

export default App;
