import './App.css';

import Header from './components/Header/Header';
import Index from './components/Index/Index';
import About from './components/About/About';
import Faq from './components/faq/Faq';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


// Importing Router
import {
  Switch,
  Route
} from "react-router-dom";

import Faq from './components/Faq/Faq';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/' component={ Index } exact />
        <Route path='/about' component={ About } />
        <Route path='/faq' component={ Faq } />
        <Route path='/contact' component={ Contact } />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;