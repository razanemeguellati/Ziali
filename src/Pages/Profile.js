import Scard from "../Components/SCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import pp from "../images/waterman.jpg"
import settings from "../images/setting.svg"
import {Link} from "react-router-dom" 
import SCard from "../Components/SCard";
import Footer from "../Components/Footer" ; 

import axios from 'axios';
import { useState, useEffect } from "react";

const Profile = (props) => {
    /*const Signalement = [
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
      ] */ 

      //const [data, setData] = useState({}); 

     /* useEffect(() =>
      {
        const apiUrl = `http://127.0.0.1:8000/api/user/getUserSignalements/${userEmail}`;
        // Make a GET request to the Laravel backend
        axios.get(apiUrl)
            .then((response) => {
                console.log("hiii") ; 
                setSignalement(response.data);
                console.log(Signalement); 
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
      }, []);*/


    const auth = true ; 
    const userPic = props.userPic ; 
    const name = props.name ; 
    const wilaya = 'wilaya' ; 
    const commune = props.commmune ; 

    const [Signalement , setSignalement] = useState([]) ;
    
    /* Function that fetches approved Signalements   */
    const userEmail = "kl_meguellati@esi.dz" ;   
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/user/getSignalements/${userEmail}`)
          .then((res) => {
            return res.json();
        })
          .then((data) => {
            setSignalement(data);
          })
          .catch((err) => console.log(err));
      }, []);
    
    return (    
    <div className="flex flex-col justify-center items-center pt-24">
        <section id="Infos" className="flex flex-col justify-center items-center space-y-6 w-[80%]">
       
        <div className= " relative w-full h-[170px] bg-green bg-opacity-25 rounded-3xl flex flex-col items-center ">
        
        <img src={pp} className="absolute -top-16 w-28 h-28  object-cover rounded-full shadow-xl" alt="" />

            <div className="w-full pt-16 px-10 flex flex-col items-left space-y-3 font-semibold text-xs">
                <p> Email   :{userEmail} </p>
                <p> Wilaya  :{wilaya} </p>
                <p> Commune :{commune } </p>
            </div>
       </div>

        <Link to="/Modifier" className="w-full">
        <div className="flex flex-row justify-left items-center space-x-5 w-full rounded-2xl h-[55px] bg-green bg-opacity-25 px-10 font-semibold ">
                    <img src={settings} alt="" />
                    <p> Modifier </p>
                </div>
        </Link>
       
        </section>


        <section id="Signalement" className="pt-10 ">
        <h6 className="text-xs font-semibold p-4 "> Vos Signalements : </h6>
        
        <div className="w-[100%] grid grid-cols-1 lg:grid-cols-3 gap-1">  
                {Signalement.map((SS) =>
                 /* SS stands for single singalement*/
                    (<div className="mb-5" key={SS.id}>
                      
                    <Link to={`/Actualite/${SS.id}`}>
                     <SCard SS={SS}> </SCard>               
                    </Link>

                </div>
                )) }
       </div>
        </section>

        <Footer></Footer>
        
    </div>  ); }
 
export default Profile;