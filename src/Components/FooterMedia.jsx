// import React from 'react'
// import './Foter.css'
// import { Link } from 'react-router-dom'
// export default function FooterMedia() {
//   return (
//     <>
//          <div className='ftr-fixed-botom'>
//                 <div className="container">
//                     <div className='d-flex m-n-b-f-f-b'>
//                         <Link to="/" className='m-n-b-f-f-b-box bomsed'>
//                         <i class="fa-solid fa-house fw-bold mycolor"></i>
//                             {/* <img  src="https://i.ibb.co/42zLtYN/Group-23649.png" alt="" /> */}
//                             <p>Home</p>
//                         </Link>
//                         <Link to='/claims' className='m-n-b-f-f-b-box'>
//                         <i class="fa-regular fa-flag"></i>
//                             {/* <img src="https://i.ibb.co/h1ZJq82/Group-23583.png" alt="" /> */}
//                             <p>Claims</p>
//                         </Link>
//                         <Link to='/policies' className='m-n-b-f-f-b-box bomsed-yop'>
//                             <img style={{width:'50px',height:'50px'}} src="https://i.ibb.co/2ZC0g0z/Group-23580.png" alt="" />
//                             <p>Policies</p>
//                         </Link>
//                         <Link to='/account' className='m-n-b-f-f-b-box'>
//                         <i class="fa-regular fa-user "></i>
//                             {/* <img src="https://i.ibb.co/NmtGNpx/Group-23574.png" alt="" /> */}
//                             <p>Account</p>
//                         </Link>
//                         <Link to='./help' className='m-n-b-f-f-b-box'>
//                         <i class="fa-regular fa-circle-question"></i>
//                         {/* <i class="fa-solid fa-circle-question fw-bold "></i> */}
//                             {/* <img src="https://i.ibb.co/MPkQvkc/Group-23575.png" alt="" /> */}
//                             <p>Help</p>
//                         </Link>
//                     </div>
//                 </div>
//             </div>        
//     </>
//   )
// }





























import React from 'react';
import './Foter.css';
import { Link, useLocation } from 'react-router-dom';

export default function FooterMedia() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div className="ftr-fixed-botom">
        <div className="container">
          <div className="d-flex m-n-b-f-f-b">
            <Link
              to="/"
              className={`m-n-b-f-f-b-box ${isActive('/') ? 'active' : ''}`}
            >
              <i className="fa-solid fa-house fw-bold "></i>
              <p>Home</p>
            </Link>
            <Link
              to="/claims"
              className={`m-n-b-f-f-b-box ${isActive('/claims') ? 'active' : ''}`}
            >
              <i className="fa-regular fa-flag"></i>
              <p>Claims</p>
            </Link>
            <Link
              to="/policies"
              className={`m-n-b-f-f-b-box bomsed-yop ${isActive('/policies') ? 'active' : ''}`}
            >
              <img
                style={{ width: '50px', height: '50px',borderRadius:'8px' }}
                src="https://i.ibb.co/qJ7YnpQ/0bc82fa4-5fa0-4cee-aad6-88a0a0678edb.jpg"
                alt=""
              />
              {/* <img
                style={{ width: '50px', height: '50px' }}
                src="https://i.ibb.co/2ZC0g0z/Group-23580.png"
                alt=""
              /> */}
              <p>Policies</p>
            </Link>
            <Link
              to="/account"
              className={`m-n-b-f-f-b-box ${isActive('/account') ? 'active' : ''}`}
            >
              <i className="fa-regular fa-user"></i>
              <p>Account</p>
            </Link>
            <Link
              to="/help"
              className={`m-n-b-f-f-b-box ${isActive('/help') ? 'active' : ''}`}
            >
              <i className="fa-regular fa-circle-question"></i>
              <p>Help</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
