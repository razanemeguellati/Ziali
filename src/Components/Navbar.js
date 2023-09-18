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
<div className='sticky z-10 w-full top-0 '>
<div className='relative w-full '>
            <header className='absolute z-12  w-full  '>
    <div>
    <img className='lg:w-[90px] lg:h-[90px] lg:my-2 w-[55px] h-[55px] ' src={logo} alt="" />
    <h1 className='logofont lg:text-3xl font-bold text-blue'> Ziali </h1>
    </div>

  <nav ref={navRef}  className=' Btns px-5 mx-[10px] ml-auto mr-auto  '>
  <a className=' relative p-[10px] ml-[20px] ' href="/#Home"> Acceuil </a> 
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

         </div>
</div>
       

    );
}
 
export default Navbar;