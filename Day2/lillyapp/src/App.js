
import './Assets/css/Style.css' 
import './Assets/css/nav.css'
//giving the import to know that the css file is been there 
function App() {
  return(
    <div>
      <nav>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#contact">Contact</a>
    <a href="signup.html">Sign Up</a>
    <a href="login.html">Login</a>

</nav>
       <form class="login-form">
            <h2>Login</h2>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required/>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required/>

            <button type="submit">Login</button>
           
                <a href="#forgot-password">Forgot Password?</a>
      
              
        </form>

    </div>
  )
}
export default App;