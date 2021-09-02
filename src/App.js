import './App.css';
import Index from "./components/Index/Index";

// Importing Router
import {
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
      <div>
        <Index />
        <Switch>
            {/* <Route path='/' component={ Index } exact /> */}
            {/* <Route path='/about' component={ About } /> */}
        </Switch>
      </div>
  );
}

export default App;
