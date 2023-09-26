/* eslint-disable jsx-a11y/img-redundant-alt */
import img from "../images/fireman2.jpeg"
function Scard (props) {
const SS = props.SS 

  return ( 
    <div className="relative cards ">
      <div className="absolute flex justify-center items-center right-10 lg:right-20 bottom-20  w-14 h-14 bg-red rounded-full bg-opacity-10 z-1">
      <div className="relative  flex justify-center items-center w-10 h-10 bg-red rounded-full bg-opacity-25 z-12">
      <div className="relative w-6 h-6 bg-red rounded-full z-12">
      </div>
      </div>
      </div>

    <div className=" m-2 flex flex-row border-sky border-[0.2rem] shadow-sm h-[110px] w-[310px] rounded-2xl py-2 px-5 space-x-5 items-center justify-left hover:shadow-xl hover:shadow-lightgris">
    
    <img className="w-[80px] h-[75px] rounded-lg " src={img} alt="image"/>
     <div className="flex flex-col ">
       <h1 className="text-sm"> Type</h1>
       <p className=" text-black text-[11px] opacity-50 ">
        
       Wilaya : {SS.designation}
       <br />
       commune : {SS.commune}
       <br />
       Etat : {SS.etat}
         </p>
      
     </div>
     
   </div> 

    </div>
   );
}
 
export default Scard;