import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Login from './components/Login';
import Signup from './components/Signup';

const Home = () => <div><center><br></br><br></br><br>
</br><br></br><br></br><br></br><br></br><h1 >
"Embark on a Seamless Journey to Vehicle Service Excellence!!!</h1></center></div>;

const App = () => {
  return (
    <Router>
      {/* <div> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Add other routes if needed */}
        </Routes>
      {/* </div> */}
    </Router>
  );
};

export default App;
