import './App.css';
import Navbar from './components/navbar/Navbar';
import { Router } from '@reach/router';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Press from './pages/press/Press';
import Contact from './pages/contact/contact';
import NoMatch from './components/no-match/NoMatch';
import LiveEvents from './pages/live-events/LiveEvents';
import Video from './pages/video/Video';
import ArtExhibits from './pages/art-exhibits/ArtExhibits';

/*
  About the app structure:
  Components directory: Use for reusable components. Ex. Navbar
  Pages directory:  Use for the pages that are impored here.
        You can create folders in this directory for pages and components that are
        only used in that screen. (If used in other places, use component directory instead)
  Projects directory: Pages sub-directory for project pages. 
  Images directory: 
        For new images and home page images. (Let's try to keep this folder small)
        For all the images on the projects pages,
            source images directly like so:  <img src="http://macedonianarts.org/images/2004_7.jpg" />
*/

const App = () => (
  <>
    <Navbar />
    <Router>
      <Home path="/" />
      <About path="/about" />
      <Press path="/press" />
      <Video path="/video" />
      <LiveEvents path="/live-events" />
      <ArtExhibits path="/art-exhibits" />
      <Contact path="/contact" />
      <NoMatch default/>
    </Router>
  </>
);

export default App;
