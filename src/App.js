import { BrowserRouter as Browser, Route, Switch } from 'react-router-dom';
import './App.css';
import ApiFetch from './components/ApiFetch';


function App() {
  return (
    <div className="App">
      <Browser>
        <Switch>
          
          <Route exact path="/" component={ApiFetch}/>
        </Switch>
      </Browser>
    </div>
  );
}

export default App;
