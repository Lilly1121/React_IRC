import Nav from "./Components/Nav";

import './Assets/Css/Login.css';
import login from "./Pages/login";
import {Link} from 'react-router-dom';
function App() {
    return (
        
        <div class="login-container">
        
        <form class="container">
            <h1>Login</h1>
            <label for="username">USERNAME</label>
            <input type="text" id="username" name="username" required placeholder="Enter your name"/>

            <label for="password">PASSWORD</label>
            <input type="password" id="password" name="password" required placeholder="Enter your password"/>
            <button type="submit">
                Submit
            </button>
            <p>Don't have an account? <a href="#">Register here</a>.</p>


        </form>
    </div>
    
    )
}
export default App;
