import './App.css';

import About from './components/About/About'; 
import Index from "./components/Index/Index";

// Importing Router
import {
  Switch,
  Route
} from "react-router-dom";

import Faq from './components/Faq/Faq';

function App() {
  return (
      <div>
        <About />
        <Index />
        <Switch>
            {/* <Route path='/' component={ Index } exact /> */}
            {/* <Route path='/about' component={ About } /> */}
        </Switch>
      </div>
  );
}

export default App;