import './App.css';
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
         
          <Footer />
      </div>
  );
}

export default App;
