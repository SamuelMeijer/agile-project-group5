import './App.css';

// Importing Router
import {
  Switch,
  Route
} from "react-router-dom";

import Faq from './components/Faq/Faq';

function App() {
  return (
    <div>
      
      <Switch>
        {/* <Route path='/' component={ Index } exact /> */}
        {/* <Route path='/about' component={ About } /> */}
      </Switch>

      <Faq />
    </div>
  );
}

export default App;
