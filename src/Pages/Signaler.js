import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import { MapContainer, TileLayer, useMap, useMapEvents , Marker , Popup } from 'react-leaflet';
import Leaflet from 'leaflet';
import {Icon} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from "axios" ; 
import Wilayas from "../Data/Wilayas.json" ; 
import Communes from "../Data/Communes.json" ; 
import flagicon from "../images/flag.png" ; 

const Signaler = () => {
  /* Needed states */
    const[nature , setNature] = useState('') ; 
    const[wilaya , setWilaya] = useState('') ; 
    const[commune, setCommune] = useState('') ; 
    const[description, setDescription] = useState('') ; 
    const[owner, setOwner] = useState('kl_meguellati@esi.dz') ; 
    const[latitude, setLatitude] = useState(36.752887) ; 
    const[longitude, setLongitude] = useState(3.042048) ;
    const[photo, setPhoto] = useState('photo') ;
    const[localisation, setlocalisation] = useState('fthis') ;
    const[location, setLocation] = useState('fthiiis') ;
 
    useEffect(()=>{ setLatitude(currLocation.latitude); 
    setLongitude(currLocation.longtitude); } , [])
    /* POST Request Function */
    const handleSubmit = (event) => { 
      event.preventDefault();
     
     // Wilayas.map( (w) => { if(wilaya===w.name){setWilaya(w.code)} }) ; 
      console.log("is this here appearing") ; 
      const probleme = { nature , wilaya , commune, description , owner , latitude, longitude, photo , localisation, location };    

      const requestOptions = {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(probleme)
      } 

      console.log("Is this even firing") ; 
      console.log("Are these undefined" , probleme) ; 
  
      fetch('http://127.0.0.1:8000/api/saveSignalement', requestOptions)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP Error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log('Response data:', data);
        // You can add further handling here if needed
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        // Handle the error and possibly provide feedback to the user
      });
  };
  

   /* Geolocation states */ 
    const [currLocationJs, setCurrLocationJs] = useState({ latitude: 36.752887, longtitude: 3.042048 });
    const [MapCurrLocation, setMapCurrLocation] = useState({ latitude: 36.752887, longtitude: 3.042048 });
    const [currLocation, setCurrLocation] = useState({ latitude: 36.752887, longtitude: 3.042048 });

   /* Function to get geolocation(position) of the user */
    const getLocationJs = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      const latitude = position.coords.latitude ; 
      const longtitude = position.coords.longitude ; 
      setCurrLocationJs({latitude : latitude , longtitude: longtitude});
      
    
    });
  };
  
  /* Function that fires when the user click on the : "utiliser ma position" button  */
    function handleCurrPositionJs()
    {   getLocationJs(); 
        const latitude = currLocationJs.latitude ; 
        const longtitude = currLocationJs.longtitude ; 
        setCurrLocation({latitude : latitude , longtitude: longtitude}) ;   
        alert( " Votre position a été enregistrer " ) ;  
    }
  
   // useEffect(()=>{ setCurrLocation(currLocationJs) ; } , [currLocationJs])
   // useEffect(()=>{console.log(" Js ", currLocationJs)} , [currLocationJs])
   // useEffect(()=>{console.log(" Loc", currLocation)} , [currLocation])

   /* Function that fires when the user click on the : "choisir sur la map" button  */
    function handleCurrPositionMap()
    {   setCurrLocation(MapCurrLocation) ; 
        alert( " la position que vouz avez choisi a été enregistrée " ) ;    
    }
        
    const customIcon = new Icon({
      iconUrl: require("../images/wrong.png"),
      className : " shadow-3xl rounded-full " ,
      iconSize: [38, 38] // size of the icon
    });

   const [MarkerClicked , setMarkerClicked] = useState(false) ; 

    /* UpdateMap : Component function to be put inside Tilelayer  */
    const UpdateMap= () => {
        const map = useMap();
       
        useMapEvents({
            click: (e) => {  
             const latitude  = e.latlng.lat ;
             const longtitude = e.latlng.lng ; 
             setMarkerClicked(true);
             setMapCurrLocation({latitude : latitude , longtitude: longtitude}) ; 
           
            }       
        });
    }

       
    return ( 
    <div className=" mt-6 lg:mt-0 flex flex-col justify-center items-center space-y-2 " >
        <h1 className=" text-2xl font-bold " > Signaler un <b className="text-blue">problème</b>  </h1>
        <p className="text-[0.75rem] text-black opacity-40"> Veuillez remplir ces champs et valider le signalement  </p>

    <form action={handleSubmit} method="POST" className="w-full flex flex-col justify-center items-start space-y-3 pt-5 pb-10 lg:ml-14">
      <div id="nature-div" className="flex flex-row w-full pl-10 space-x-4 justify-left " >  
         <p className="text-[0.8rem] lg:text-[1rem]"> Nature du problème : </p>
         <div className="flex flex-col lg:flex-row lg:justify-around w-[60%] ">
             <div className="flex flex-row items-center justify-left space-x-2">
                 <input required type="radio" name="nature" value="Fuite d'eau" id="type1" onChange ={(e)=> setNature(e.target.value)}  />
                 <label For="type1" className="text-blue text-[0.8rem] lg:text-[1rem]" > Fuite d'eau </label>  
             </div>
 
             <div className="flex flex-row items-center justify-left space-x-2">
               <input required type="radio" name="nature" value="Incendie" id="type2" onChange ={(e)=> setNature(e.target.value)}   />
               <label For="type2" className="text-red text-[0.8rem] lg:text-[1rem]"> Incendie </label>
             </div> 
 
             <div className="flex flex-row items-center justify-left space-x-2">
             <input required type="radio" name="nature" value="Autre problème" id="type3" onChange ={(e)=> setNature(e.target.value)}   />
             <label For="type3" className="text-green text-[0.8rem] lg:text-[1rem]"> Autre problème </label>
             </div>       
         </div>
      </div>
 
     <div className="flex flex-col lg:flex-row gap-3 w-[50%] ">
     <div id="wilaya-div" className="flex flex-row w-full  px-10 space-x-8 justify-between items-center lg:justify-start">

      <label For="type1" className=" text-[0.85rem] lg:text-[1rem]"> Wilaya: {wilaya} </label>  
 
      <input required list='wilayas' name='wilaya' placeholder='Wilaya' className='md:w-[140px] lg:w-[200px] w-40 h-8 p-2 border-2 border-green rounded-full text-xs' value={wilaya} 
      onChange ={(e)=> setWilaya(e.target.value)}
      />
   
     <datalist id='wilayas'>
     {Wilayas.map ((w) => {
       return (
        <option value={w.name } className='w-full'/>

     )})}

   </datalist>
 
    </div>
 
      
    <div id="commune-div"  className="flex flex-row w-full px-10 space-x-8  justify-between items-center lg:justify-start" >
      <label For="type1" className="text-[0.85rem] lg:text-[1rem]" > Commune:  </label>  
 
      <input required list='Communes' name='commune' placeholder='commune' className='md:w-[140px] lg:w-[200px] w-40 h-8 p-2 border-2 border-green rounded-full text-xs' value={commune}  onChange ={(e)=> setCommune(e.target.value)}  />
   
     <datalist id='Communes'>
         {Communes.map((cmn) =>(
          <option value={cmn.name} className='w-full'/>
         ))}
     </datalist>
 
    </div>
  </div>
   

<div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start pt-5 lg:gap-20 w-full">
<div id="Map-div"  className="lg:order-2 flex flex-col  px-3 justify-center items-center lg:w-[55%]" >
        <div className="asbolute z-10 w-[90%] lg:w-[100%] h-[300px] lg:h-[400px] shadow-xl rounded-2xl ">

     <MapContainer
         className=" h-full w-full rounded-2xl "
         center={[currLocation.latitude , currLocation.longtitude]}
         zoom={13}
         >   
         <TileLayer
         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         />
        <UpdateMap />
        { MarkerClicked &&  <Marker position={[currLocation.latitude , currLocation.longtitude]} icon={customIcon} ></Marker>}
     </MapContainer>

        </div>
        <div className="flex flex-row gap-2 px-4 py-7 ">

         <button onClick={handleCurrPositionJs}
         className=" btn3 h-10 px-4 text-xs text-white bg-blue rounded-full "
         > utiliser ma position </button>

        <button onClick={handleCurrPositionMap}
         className=" btn3 h-10 px-4 text-xs text-white bg-blue rounded-full "
         > Choisir sur la carte </button> 

         </div>

     
      

    </div>

    <div className=" flex flex-col items-center lg:space-y-3 space-y-5  ">
        <div className="w-[80%] p-4 border-2 border-green rounded-xl lg:border-none ">
            <h1 className="font-semibold "> Vos Coordonnées : </h1>
            <p> Latitude: {currLocation.latitude}</p>
            <p> Longitude: {currLocation.longtitude}</p>
        </div>

      <div id="Photos-div" className="w-full flex flex-col px-7 justify-center items-left space-y-1">
      <p className="px-2"> Ajouter des photos : </p>
      </div>

      <div id="commentaire-div" className="w-full flex flex-col px-7 justify-center items-left space-y-1">
          <label For="commentaire" className="px-2"> Ajouter un commentaire : </label>
          <textarea required name="commentaire " id="" cols="30" rows="2" onChange={(e)=> setDescription(e.target.value)}  
          className = "border-2 border-green rounded-2xl p-4 lg:p-5 lg:w-full lg:h-40" ></textarea>
      </div>

    <div className='flex flex-col space-y-4 lg:space-x-5 lg:flex-row w-full items-center justify-center '>

        <input type='submit' id='submit' className='cards w-0 h-0'/>
        <label for="submit" className='submit-button cards py-2 px-14 w-fit flex justify-center items-center gap-2 cursor-pointer hover:scale-110 bg-green rounded-full text-black font-semibold shadow-xl shadow-lightgris' >
         <span>Valider</span>
        </label>

        <button className="cards py-2 px-12 w-fit flex justify-center items-center gap-2 cursor-pointer hover:scale-110 bg-red rounded-full text-black font-semibold shadow-xl shadow-lightgris"> Annuler </button>
           
     </div>
    </div>
</div>
   
  
    </form>
   
   
   <Footer></Footer>
    </div> 
    
  
    
    );
}
 
export default Signaler;