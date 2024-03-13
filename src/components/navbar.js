import { BsPerson, BsCart2, BsSearch } from 'react-icons/bs';
import {BiLogOut} from 'react-icons/bi'
import {NavLink} from 'react-router-dom';
import './navbar.css'

function Navbar()
{ 
  const styleNavLink=({isActive})=>{
    return {
      color:isActive?"var(--primaryColor)":"gray",
      borderBottom: isActive?"var(--primaryColor) 2px solid":"none",
    }
  }
   return (    
   <nav className="navbar navbar-expand-lg navbar-light bg-light p-2">
   <NavLink className="navbar-brand p-1" to="#">
     Fast Service Travel
   </NavLink>
         <button
             className="navbar-toggler"
             type="button"
             data-bs-toggle="collapse"
             data-bs-target="#navbarNav"
             aria-controls="navbarNav"
             aria-expanded="false"
             aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
         </button>
   <div className="collapse navbar-collapse" id="navbarNav">
     <ul className="navbar-nav d-flex flex-row col mx-5 justify-content-center gap-4 ">
      
     <li className="nav-item mx-2">     
        <NavLink className="nav-link" style={styleNavLink} to="/navbar">
          Home
        </NavLink>
      </li>
       <li className="nav-item mx-2">
         <NavLink className="nav-link" style={styleNavLink} to="/products">
           Visa
         </NavLink>
       </li>
       <li className="nav-item mx-2">
         <NavLink className="nav-link" style={styleNavLink} to="/orders">
           Flight Tickets
         </NavLink>
       </li>
       <li className="nav-item mx-2">      
         <NavLink className="nav-link" style={styleNavLink} to="/agents/manage">
          Tours
        </NavLink>
      </li>
      <li className="nav-item mx-2">
        <NavLink className="nav-link" style={styleNavLink} to="/orders/manage">
          Our Clients
        </NavLink>
      </li>
       <li className="nav-item mx-2">
         <NavLink className="nav-link" style={styleNavLink} to="/contact">
           About Us
         </NavLink>
       </li>
       <li className="nav-item mx-2">
         <NavLink className="nav-link" style={styleNavLink} to="/contact">
           Contact Us
         </NavLink>
       </li>
       <div className="avatarContainer d-flex gap-3">
          
       </div>
     </ul>
     
   </div>
 </nav>)
}
export default Navbar;