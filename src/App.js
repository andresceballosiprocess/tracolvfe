import './App.css';
import Home from './components/Home/Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
