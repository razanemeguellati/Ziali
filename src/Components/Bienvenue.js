import earth from "../images/earth.png"
const Bienvenue = () => {
    return ( 
    <div id="Home" className="flex flex-col lg:flex-row space-y-5 h-[500px] lg:h-screen w-full justify-center items-center">
      <div>
        <p className=" w-[80%] text-3xl">
             Bienvenu sur <b className="text-blue ">Ziali</b> <br />
             <b >Platforme </b>  de  <br />
             Signalement <b className="text-[#19A7CE] ">FIC</b>
        </p>
        <p className="w-[80%] text-[11px] "> <b className="text-blue">F</b>uites d'eau , <b className="text-blue">I</b>ncendies , <b className="text-blue" >C</b>atastrophes naturelles</p>
      </div>


        <img src={earth}  className=" w-[60%] lg:w-[40%] " alt="earth"  />

    </div> );
}
 
export default Bienvenue;