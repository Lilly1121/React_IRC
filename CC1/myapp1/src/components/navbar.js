// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [active, setActive] = useState('nav__menu');
  const [icon, setIcon] = useState('nav__toggler');

  const navToggle = () => {
    setActive((prev) => (prev === 'nav_menu' ? 'navmenu navactive' : 'nav_menu'));

    // Icon Toggler
    setIcon((prev) => (prev === 'nav_toggler' ? 'navtoggler toggle' : 'nav_toggler'));
  };

  return (
    <nav className="nav">
      
      <Link to="/" className="nav__brand">
        <img src=
        
"https://www.bing.com/th?id=OIP.BrvR9-atH0KR2dbpeW0wxAHaF7&w=150&h=120&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"></img>      </Link>
      <ul className={active}>
        <li className="nav__item">
          <Link to="/" className="nav__link">
            Home
          </Link>
        </li>
        
        <li className="nav__item">
          <Link to="/login" className="nav__link">
            Login
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/signup" className="nav__link">
            Signup
          </Link>
        </li>
        {/* Add other links as needed */}
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

 export default Navbar;
// // Navbar.js
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './navbar.css';

// function Navbar() {
//   const [active, setActive] = useState('nav__menu');
//   const [icon, setIcon] = useState('nav__toggler');

//   const navToggle = () => {
//     setActive((prev) => (prev === 'nav_menu' ? 'navmenu navactive' : 'nav_menu'));

//     // Icon Toggler
//     setIcon((prev) => (prev === 'nav_toggler' ? 'navtoggler toggle' : 'nav_toggler'));
//   };

//   return (
//     <div className="gallery">
//       {/* Your gallery code here */}
//       <div class="gallery_line">
//     <img src="https://picsum.photos/300/200?random=0"/>
//     <img src="https://picsum.photos/200/300?random=1"/>
//     <img src="https://picsum.photos/300/200?random=2"/>
//     <img src="https://picsum.photos/300/200?random=3"/>
//     <img src="https://picsum.photos/200/300?random=4"/>
//     <img src="https://picsum.photos/300/200?random=5"/>
//     <img src="https://picsum.photos/300/200?random=0"/>
//     <img src="https://picsum.photos/200/300?random=1"/>
//     <img src="https://picsum.photos/300/200?random=2"/>
//     <img src="https://picsum.photos/300/200?random=3"/>
//     <img src="https://picsum.photos/200/300?random=4"/>
//     <img src="https://picsum.photos/300/200?random=5"/>
//   </div>
//   <div class="gallery_line">
//     <img src="https://picsum.photos/200/300?random=6"/>
//     <img src="https://picsum.photos/300/200?random=7"/>
//     <img src="https://picsum.photos/200/300?random=8"/>
//     <img src="https://picsum.photos/300/200?random=9"/>
//     <img src="https://picsum.photos/300/200?random=10"/>
//     <img src="https://picsum.photos/300/200?random=11"/>
//     <img src="https://picsum.photos/200/300?random=6"/>
//     <img src="https://picsum.photos/300/200?random=7"/>
//     <img src="https://picsum.photos/200/300?random=8"/>
//     <img src="https://picsum.photos/300/200?random=9"/>
//     <img src="https://picsum.photos/300/200?random=10"/>
//     <img src="https://picsum.photos/300/200?random=11"/>
//   </div>
//   <div class="gallery_line">
//     <img src="https://picsum.photos/200/300?random=12"/>
//     <img src="https://picsum.photos/300/200?random=13"/>
//     <img src="https://picsum.photos/300/200?random=14"/>
//     <img src="https://picsum.photos/200/300?random=15"/>
//     <img src="https://picsum.photos/300/200?random=16"/>
//     <img src="https://picsum.photos/300/200?random=17"/>
//     <img src="https://picsum.photos/200/300?random=12"/>
//     <img src="https://picsum.photos/300/200?random=13"/>
//     <img src="https://picsum.photos/300/200?random=14"/>
//     <img src="https://picsum.photos/200/300?random=15"/>
//     <img src="https://picsum.photos/300/200?random=16"/>
//     <img src="https://picsum.photos/300/200?random=17"/>
//   </div>
//       <nav className="nav">
//         <Link to="/" className="nav__brand">
//           <img
//             src="https://www.bing.com/th?id=OIP.BrvR9-atH0KR2dbpeW0wxAHaF7&w=150&h=120&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
//             alt="Brand Logo"
//           />
//         </Link>
//         <ul className={active}>
//           <li className="nav__item">
//             <Link to="/" className="nav__link">
//               Home
//             </Link>
//           </li>
//           <li className="nav__item">
//             <Link to="/login" className="nav__link">
//               Login
//             </Link>
//           </li>
//           <li className="nav__item">
//             <Link to="/signup" className="nav__link">
//               Signup
//             </Link>
//           </li>
//           {/* Add other links as needed */}
//         </ul>
//         <div onClick={navToggle} className={icon}>
//           <div className="line1"></div>
//           <div className="line2"></div>
//           <div className="line3"></div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;
