import earth from "../images/earth.png"
const Bienvenue = () => {
    return ( 
    <div id="Home" className="flex flex-col lg:flex-row space-y-5 w-full h-[500px] lg:h-screen justify-center items-center lg:w-full lg:px-28 lg:justify-center lg:space-x-5  ">
    
      <div className=" w-[80%] lg:pb-16 " >
        <p className="hidden lg:block text-heavygris"> - Guide</p>

        <p className=" w-[100%] text-3xl lg:text-[3.5rem] lg:leading-[4.5rem] ">
             Bienvenu sur <b className="text-blue ">Ziali</b> <br />
             <b >Platforme </b>  de  <br />
             Signalement <b className="text-[#19A7CE] ">FIC</b>
        </p>

        <p className="w-[80%] text-[11px] lg:text-[25px] "> <b className="text-blue">F</b>uites d'eau , <b className="text-blue">I</b>ncendies , <b className="text-blue" >C</b>atastrophes naturelles</p>
      </div>

        <img src={earth}  className=" w-[60%] lg:w-[520px] " alt="earth"  />

    </div> );
}
 
export default Bienvenue;