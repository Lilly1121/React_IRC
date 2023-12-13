import Nav from "./Components/Nav";
import './Assests/css/nav.css';
import Home from "./Components/Home";
import Footer from "./Components/Footer";
// import Img1 from './Assests/css/img/new.jpg';

function App()
{
  return(
 <>
 <Nav/>
  <div class="navbar">

  {/* <nav>     
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#contact">Contact</a>
    <a href="signup.html">Sign Up</a>
    <a href="login.html">Login</a>
</nav> */}

   
<div className="slider">
  <img src='https://images.unsplash.com/photo-1698402911529-64fdcca42d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDExODUyMzJ8&ixlib=rb-4.0.3&q=80&w=400' alt=''/>
  <img src='https://images.unsplash.com/photo-1695834917465-513b31b8171d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDExODUyNTh8&ixlib=rb-4.0.3&q=80&w=400' alt=''/>
  <img src='https://images.unsplash.com/photo-1694721804143-7c611fde4b22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDExODUyNzV8&ixlib=rb-4.0.3&q=80&w=400' alt=''/>
  <img src='https://images.unsplash.com/photo-1698308246030-abf29756d39b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDExODUyNzV8&ixlib=rb-4.0.3&q=80&w=400' alt=''/>
  <img src='https://images.unsplash.com/photo-1699117900546-bf2e36687e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDExODUyNzV8&ixlib=rb-4.0.3&q=80&w=400' alt=''/>
  <img src='https://images.unsplash.com/photo-1699694927495-4b8da5df6ce5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDExODUyNzV8&ixlib=rb-4.0.3&q=80&w=400' alt=''/>
  <img src='https://images.unsplash.com/photo-1699264971363-8e71bb67daad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDExODUzNDd8&ixlib=rb-4.0.3&q=80&w=400' alt=''/>
  <img src='https://images.unsplash.com/photo-1699354511301-ec6be76db29f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDExODUzNDd8&ixlib=rb-4.0.3&q=80&w=400' alt=''/>

  </div>
 </div>
 <Home/>
 <Footer/>
 </>
  );
}
export default App;