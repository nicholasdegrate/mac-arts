import { Router } from '@reach/router';
import { ChakraProvider } from '@chakra-ui/react';

// style
import './styles/App.css';

//components
import Navbar from './components/layout/Navbar';
import customTheme from './Theme';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Press from './pages/press/Press';
import Contact from './pages/contact';
import NoMatch from './components/statusCode/404';
import LiveEvents from './pages/live-events/LiveEvents';
import Video from './pages/video/Video';
import Audio from './pages/audio/Audio'
import ArtExhibits from './pages/art-exhibits/ArtExhibits';
import Education from './pages/education/Education';
import Footer from './components/layout/Footer'

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

const App = () => (
  <ChakraProvider theme={customTheme} resetCSS={true}>
    <Navbar />
    <Router>
      <Home path="/" />
      <About path="/about" />
      <Press path="/press" />
      <Video path="/video" />
      <Audio path="/audio"/>
      <LiveEvents path="/live-events" />
      <ArtExhibits path="/art-exhibits" />
      <Education path="/education" />
      <Contact path="/contact" />
      <NoMatch default/>
    </Router>
    <Footer />
  </ChakraProvider>
);

export default App;
