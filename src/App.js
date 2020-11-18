import './App.css';
import Navbar from './components/navbar/Navbar';
import { Router } from '@reach/router';
import Home from './pages/home/Home';
import Projects from './pages/projects-page/Projects';
import About from './pages/about/About';
import NoMatch from './components/no-match/NoMatch';

/*
  About the app structure:
  Components directory: Use for reusable components. Ex. Navbar
  Pages directory:  Use for the pages that are imported here.
        You can create folders in this directory for pages and components that are
        only used in that screen. (If used in other places, use component directory instead)
  Projects directory: Pages sub-directory for project pages. 
  Images directory: 
        For new images and home page images. (Let's try to keep this folder small)
        For all the images on the projects pages,
            source images directly like so:  <img src="http://macedonianarts.org/images/2004_7.jpg" />
*/

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Home path="/" />
        <About path="/about" />
        <NoMatch default/>
        <Projects path="/projects" />
      </Router>
    </>
  );
}

export default App;
