
import About from "./assets/components/About";
import Contact from "./assets/components/Contact";
import Home from "./assets/components/Home";
import Navbar from "./assets/components/Navbar";
import Portfolio from "./assets/components/Portfolio";
import Skills from "./assets/components/Skills";

import SocialLinks from "./assets/components/SocialLink";



function App() {
  return (
<div className="">
 <Navbar></Navbar>
 <Home></Home>
<About></About>
<Portfolio></Portfolio>
<Skills></Skills>
<Contact></Contact>

<SocialLinks> </SocialLinks>
</div>
  );
}

export default App;
