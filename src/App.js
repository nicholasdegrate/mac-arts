import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import NoMatch from './components/shared/NoMatch';
import Projects from './components/projects/Projects'
import About from './components/about/About';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/about' component={About} />
        <Route component={NoMatch} />

      </Switch>
    </>
  );
}

export default App;
