


import axios from 'axios';
import { useState, useEffect } from "react";
import SCard from "../Components/SCard";
import { Link } from 'react-router-dom' ;  
import Wilayas from "../Data/Wilayas.json" ; 
import Communes from "../Data/Communes.json" ;

const FilActualite = () => {
 const Signalement = [
   {
      id:1 , 
      type: "fuite d'eau" , 
      wilaya: "Batna" , 
      commune: "Elmadher", 
      etat: "rétabli"
   } , 

   {
      id:2 , 
      type: "fuite d'eau" , 
      wilaya: "Batna" , 
      commune: "Elmadher", 
      etat: "rétabli"
   }
   , 
   {
      id:3 , 
      type: "fuite d'eau" , 
      wilaya: "Batna" , 
      commune: "Elmadher", 
      etat: "rétabli"
   }
   , 
   {
      id:4 , 
      type: "fuite d'eau" , 
      wilaya: "Batna" , 
      commune: "Elmadher", 
      etat: "rétabli"
   }
 ]
    const[research,setResearch]= useState("") ;
    const [filterState , setfilterState]= useState(false) ;

    const handleFilterb = ()=>
    {   setfilterState(!filterState)  
     }
     const handleFilter = ()=>
     {   setfilterState(!filterState)  
      }


      const [data, setData] = useState([]);

      useEffect(() => {
         const apiUrl = 'http://localhost:8000/api/getData';
         axios.get(apiUrl)
          
              .then((response) => {
               console.log("hiii") ; 
           
                  setData(response.data);
              })
              .catch((error) => {
                  console.error('Error fetching data:', error);
              });
      }, []);
  
  

    return ( 
    
    <div className="w-[100%] m-3 lg:pt-10">

         <section className="flex flex-col justify-center items-center space-y-2">
            <h1 className="text-3xl font-bold"> <b className="text-blue">Fil</b>  d’Actualité </h1>
            <p className="text-xs opacity-50"> Journal de signalement FIC</p>
         <div className=" flex flex-row justify-center items-center space-x-1">
         <input 
         type="text"
         required 
         value={research}
         placeholder='Search' 
         className="w-[70%] lg:w-[620px] h-[40px] px-4 rounded-full  border-green border-2 shadow-lightgris shadow-md"
         onChange ={(e)=> {setResearch(e.target.value); console.log(research);}}  
      />

      
       <button
       onClick={handleFilterb}
       className="btn3 bg-green text-xs shadow-lightgris shadow-md px-4 h-[40px] font-semibold rounded-full"> filtrer </button>

</div>
<p className="text-xs opacity-50"> <center> ces résultats sont filtrés par date , du plus récent au plus ancien </center> </p>

{
   filterState ? 
   <div id="filter_div" className="flex flex-col w-[68%] lg:flex-row justify-evenly  items-end  space-y-3">

   <div className="flex flex-row justify-center items-center space-x-3 ">

      <button
      onClick={handleFilter}
      className="btn3 border-yellow border-2  shadow-lightgris shadow-md px-3 h-[30px] font-semibold rounded-[10px] text-xs"> information </button>
      
      <button
     onClick={handleFilter}
      className="btn3 border-red border-2  shadow-lightgris shadow-md px-3 h-[30px] font-semibold rounded-[10px] text-xs"> Signalé</button>
      
      <button
     onClick={handleFilter}
      className="btn3 border-green border-2  shadow-lightgris shadow-md px-3 h-[30px] font-semibold rounded-[10px] text-xs "> Rétabli</button>
   </div>

   <div className="flex flex-row justify-center items-center space-x-3"> 
     
      <input required list='Communes' name='willaya' placeholder='commune' className='md:w-[140px] lg:w-32 w-32 h-[30px] p-2 border-2 border-green rounded-[10px] text-xs'  onChange={handleFilter}/>
   
      <datalist id='Communes'>
         {Communes.map((cmn) =>(
         <option value={cmn.name} className='w-full'/>
         ))}
      </datalist>

      <input required list='wilayas' name='willaya' placeholder='Willaya' className='md:w-[140px] lg:w-32 w-32 h-[30px] p-2 border-2 border-green rounded-[10px] text-xs' />
         
      <datalist id='wilayas'>
      {Wilayas.map ((willaya) =>(
         <option value={willaya.name} className='w-full'/>
      ))
      }
      </datalist>

    </div>
    

</div> :<></>
}

 
 </section>

 <section id="cards_section" className="flex justify-center items-center mt-6 w-[100%]">
  
    <div className="w-[100%] lg:w-[75%] grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-5">  
       
       
        {data.map((wilaya) => {
          //<li key={wilaya.id}>{wilaya.designation}</li>
          console.log(wilaya.id) ; 
         })}
     

    

        {data.map((SS) =>
        /* SS stands for single singalement*/
        (<div className="mb-5" key={SS.id}>
            <Link to={`/Actualite/${SS.id}`}>
               <SCard SS={SS}> </SCard>               
            </Link>

        </div>
        ))}
    </div>

 </section>
    </div> );
}
 
export default FilActualite;