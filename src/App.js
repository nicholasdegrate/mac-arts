import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import NoMatch from './components/shared/NoMatch';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={NoMatch} />
      </Switch>
    </>
  );
}

export default App;
