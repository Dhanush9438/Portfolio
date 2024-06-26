import About from "./components/About";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Certifications />
      <Skills />
      <Contact />
      <SocialLinks />

    </div>
  );
}

export default App;
