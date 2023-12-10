import './Assets/css/style.html'
import './Assets/css/Style.css' 
import './Assets/css/nav.css'
//giving the import to know that the css file is been there 
function App() {
  return(
    <div>
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