/* eslint-disable jsx-a11y/img-redundant-alt */
import img from "../images/fireman2.jpeg"
import Wilayas from "../Data/Wilayas.json" ; 
import Communes from "../Data/Communes.json" ; 


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
       <div className="flex flex-row justify-start items-center space-x-3">
          <p className=" text-black text-[11px] opacity-50 ">
          Wilaya : 
          </p>
          { Wilayas.map((wil) => {
            if (wil.id === SS.wilaya) {
             
            return (
              <p key={wil.id} className="text-black text-[12px] opacity-[0.6] ">
                {wil.name}
                
              </p>

            );}
            return null; // If there's no match, you can return null or an empty fragment
          })}

       </div>
      
       <div className="flex flex-row justify-start items-center  space-x-3">
       <p className=" text-black text-[11px] opacity-50 ">
       commune : 
       </p>
         {  Communes.map((comm) => {
            if (comm.post_code === SS.commune) {
              console.log("comm:", SS.commune) ; 
            return (
              <p key={comm.id} className="text-black text-[12px] opacity-[0.6] ">
                {comm.name}
              </p>
            );
            }
            return null; // If there's no match, you can return null or an empty fragment
             })}

       </div>
       <p  className=" text-black text-[11px] opacity-50 " >
       Etat : {SS.state}
       </p>
      
     </div>
     
   </div> 

    </div>
   );
}
 
export default Scard;