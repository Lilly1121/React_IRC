import Nav from "./Components/Nav";
import './Assests/css/nav.css';
import Home from "./Components/Home";
import Footer from "./Components/Footer";

import Img1 from './Assests/css/img/bg.jpg';
function App()
{
  return(
 <>
  <Nav/>
  <div class="navbar">
    <img src={Img1} alt="myimage"/>
  <p>
   My nav
  </p>
 
 </div>
 <Footer/>
 <Home/>
 </>

  );
}
export default App;