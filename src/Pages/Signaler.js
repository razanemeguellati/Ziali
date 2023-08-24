import { useState } from "react";
import Footer from "../Components/Footer";

const Signaler = () => {
 
    const [inputs, setInputs] = useState({}); 
    
    function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
    }

    function handlesubmit()
    {

    }


   const willayas = [
    {name: "Alger"},
    {name: "Anaba"},
    {name: "Setif"},
    {name: "Oran"},
    {name: "Telemsan"},
    {name: "Jijel"},
    {name: "Alger"},
    {name: "Anaba"},
    {name: "Setif"},
    {name: "Oran"},
    {name: "Telemsan"},
    {name: "Jijel"} , 
    {name: "Anaba"},
    {name: "Setif"},
    {name: "Oran"},
    {name: "Telemsan"},
    {name: "Jijel"}
  ];
    return ( 
    
    <div className=" mt-6 flex flex-col justify-center items-center space-y-2" >
        <h1 className=" text-2xl font-bold " > Signaler un <b className="text-blue">problème</b>  </h1>
        <p className="text-[0.75rem] text-black opacity-40"> Veuillez remplir ces champs et valider le signalement  </p>

    <form action={handlesubmit} className="w-full flex flex-col space-y-3 py-5">
    <div id="nature-div" className="flex flex-row w-full pl-10 space-x-4 justify-left " >  
         <p className="text-[0.85rem]"> Nature du problème : </p>
         <div className="flex flex-col ">
             <div>
                 <input required type="radio" name="type" value="Fuite eau" id="type1"  />
                 <label For="type1" className="text-blue text-[0.8rem] " > Fuite d'eau </label>  
             </div>
 
             <div>
               <input required type="radio" name="type" value="Incendie" id="type2"  />
               <label For="type2" className="text-red text-[0.8rem] "> Incendie </label>
             </div> 
 
             <div>
             <input required type="radio" name="type" value="Autre problème" id="type3"  />
             <label For="type3" className="text-green text-[0.8rem] "> Autre problème </label>
                
             </div>       
         </div>
             
 
             
     </div>
 
     <div className="flex flex-col gap-3">
     <div id="wilaya-div"  className="flex flex-row w-full  px-10 space-x-8 justify-between items-center" >
      <label For="type1" className=" text-[0.85rem] " > Wilaya:  </label>  
 
      <input required list='wilayas' name='willaya' placeholder='Willaya' className='md:w-[140px] lg:w-[200px] w-40 h-8 p-2 border-2 border-green rounded-full text-xs' value={inputs.willaya || ""} onChange={handleChange}/>
   
   <datalist id='wilayas'>
     {willayas.map((willaya) =>(
       <option value={willaya.name} className='w-full'/>
     ))}
   </datalist>
 
    </div>
 
      
    <div id="commune-div"  className="flex flex-row w-full px-10 space-x-8     justify-between items-center" >
      <label For="type1" className=" text-[0.85rem] " > Commune:  </label>  
 
      <input required list='wilayas' name='willaya' placeholder='commune' className='md:w-[140px] lg:w-[200px] w-40 h-8 p-2 border-2 border-green rounded-full text-xs' value={inputs.willaya || ""} onChange={handleChange}/>
   
     <datalist id='wilayas'>
         {willayas.map((willaya) =>(
         <option value={willaya.name} className='w-full'/>
         ))}
     </datalist>
 
 
    </div>
     </div>
   


    <div id="Map-div"  className=" flex flex-col py-7 px-3 justify-center items-center" >
        <div className="w-[90%] h-[300px] bg-green ">
            
        </div>
        <p className="text-[0.7rem]"> cliquez sur la carte pour changer votre position </p>

    </div>

    <div>
    <div id="commentaire-div" className=" flex flex-col w-full  px-7 justify-center items-left space-y-2">
        <label For="commentaire"> Ajouter un commentaire : </label>
        <textarea name="commentaire" id="" cols="30" rows="5" 
        className = " border-2 border-green rounded-2xl p-4" ></textarea>
    </div>

    <div className='flex flex-col space-y-4 lg:flex-row w-full items-center justify-center '>

        <input type='submit' id='submit' className='w-0 h-0'/>
        
        <label for="submit" className='submit-button py-2 px-9 w-fit flex justify-center items-center gap-2 cursor-pointer hover:scale-110 bg-green rounded-full text-black font-semibold shadow-xl shadow-lightgris' >
         <span>Valider</span>
        </label>

        <button className=" py-2 px-8 w-fit flex justify-center items-center gap-2 cursor-pointer hover:scale-110 bg-red rounded-full text-black font-semibold shadow-xl shadow-lightgris"> Annuler </button>
           
     </div>
</div>
  
    </form>
   
    
    
   

   
   <Footer></Footer>
    </div> 
    
  
    
    );
}
 
export default Signaler;