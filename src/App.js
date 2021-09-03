import './App.css';
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


// Importing Router
import {
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route path='/' component={ Index } exact /> */}
        {/* <Route path='/about' component={ About } /> */}
      </Switch>

      <Contact />
    </div>
  );
}

export default App;
