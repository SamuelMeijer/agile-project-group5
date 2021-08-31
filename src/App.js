import './App.css';
import About from './components/About/About'; 
import Header from './components/Header/Header';

// Importing Router
import {
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
      <Switch>
        {/* <Route path='/' component={ Index } exact /> */}
        {/* <Route path='/about' component={ About } /> */}
      </Switch>
  );
}

export default App;
