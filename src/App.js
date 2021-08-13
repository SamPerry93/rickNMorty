import { BrowserRouter as Browser, Route, Switch } from 'react-router-dom';
import './App.css';
import Api from './components/Api';
import Character from './components/Character.js';
function App() {
  return (
    <div className="App">
      <Browser>
        <Switch>
          <Route exact path="/" component={Api}/>
          <Route path="/second" component={Character}/>
        </Switch>
      </Browser>
    </div>
  );
}

export default App;
