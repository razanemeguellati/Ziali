import { Link } from 'react-router-dom' ;  
import { useRef } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../images/ziali.png"

const Navbar = () => {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };
  
    return (
         
<header className='sticky z-10 top-0 '>
    <div>
    <img className='lg:w-[100px] w-[55px] h-[55px] lg:h-[100px] ml-0' src={logo} alt="" />
    <h1> Ziali </h1>
    </div>

<nav ref={navRef}  className=' Btns px-5 mx-[10px] ml-auto mr-auto  '>
  <a className=' relative p-[10px] ml-[20px] ' href="/#Home"> Acceuil </a> 
  <a className=' relative p-[10px] ml-[20px] ' href="/#Contact"> Contact </a>
  <Link className=' relative p-[10px] ml-[20px] '  to="/Actualite"> Actualité </Link> 
  <Link className=' relative p-[10px] ml-[20px] '  to="/Signaler"> Signaler </Link> 
  <Link className=' relative p-[10px] ml-[20px] '  to="/Profile"> Profile </Link> 
 
   <button  className="nav-btn nav-close-btn"  onClick={showNavbar}>
                    <FaTimes />
   </button>
   
</nav>

    <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
    </button>

</header>
    );
}
 
export default Navbar;