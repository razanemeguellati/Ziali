import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import RightArrow from '../images/right.png' ; 
import LeftArrow from '../images/left.png' ; 
import { useEffect, useRef, useState } from "react"; 
import { useParams } from "react-router-dom";

import img1 from "../images/fireman.jpeg"
import img2 from "../images/waterman.jpg"
import img3 from "../images/fireman2.jpeg"


import Footer from "../Components/Footer"

const SS = () => {
    const Pics = 
    [ {id:1 , 
      pic:img1} , 

      {id:2 , 
      pic:img2} ,

      {id:3 , 
      pic:img3} ]
           
    const swiperRef = useRef(null);
    
    const {id}= useParams() ;
    const [Signalement,setSignalement] = useState({});

    useEffect(() => {
      fetch(`http://127.0.0.1:8000/api/getSignalement/${id}`)
      .then((res) => {return res.json();})
      .then((data)=> {setSignalement(data)} )
      .catch((err) => console.log(err))
     },[]);
  
  
    // fetching the infos of the id in the params 
    
    return (
     
<section className=" mt-4 flex flex-col justify-center items-center space-y-2 ">
  
    <h1 className="text-3xl font-bold lg:p-6"> <b className="text-blue"> Fil</b>  d’Actualité </h1>

    <div className="lg:w-full lg:flex lg:flex-row lg:px-16 lg:py-2 justify-start item-center" >
        <section className="w-full flex flex-col space-y-2 items-left py-2 px-8 lg:w-[45%] ">
            <div className="flex flex-row space-x-3">
            <p className="text-black text-sm font-semibold "> Nature du problème : </p>
            <div className="flex flex-row items-center justify-center  space-x-3">
                    <div className=" h-2 w-2 rounded-full bg-red "></div>
                   <p className="text-black text-xs opacity-75"> {Signalement.nature} </p> 
            </div>
            </div>

            <div className="flex flex-row space-x-3">
            <p className="text-black text-sm font-semibold"> Etat : </p>
            <div className="flex flex-row items-center justify-center  space-x-3">
                    <div className=" h-2 w-2 rounded-full bg-green "></div>
                   <p className="text-black text-xs opacity-75"> {"Rétabli"} </p> 
            </div>
            </div>

            <div className="flex flex-row space-x-3">
                  <p className="text-black text-sm font-semibold"> Wilaya : </p>
                  <p className="text-black text-xs  opacity-75"> {Signalement.wilaya} </p> 
            </div>

            <div className="flex flex-row space-x-3">
                  <p className="text-black text-sm font-semibold"> Commune : </p>
                  <p className="text-black text-xs opacity-75"> {Signalement.commune} </p> 
            </div>

            <div className="flex flex-col space-y-2 items-left">
                  <p className="text-black text-sm font-semibold"> Commentaire : </p>
                  <p className="text-black text-xs opacity-75"> {Signalement.description} </p> 
            </div>

         </section>

         <section id='map-section' className="flex flex-row justify-center items-center py-8 lg:py-2 lg:w-[55%] ">
                <div className="w-[80%] lg:w-[90%] h-64 bg-green rounded-lg  shadow-2xl ">

                </div>
         </section>

    </div>


    <div className="flex flex-row items-left jsutify-left w-[80%] lg:w-[90%] lg:px-8">
        <h1 className="p-0 "> Photos :  </h1> 
    </div>
   

    <div id="swiper-div" className="flex flex-row justify-center items-center w-[100%] pb-14">
         
                <div
                    onClick={() => {
                        swiperRef.current.swiper.slidePrev();
                    }}
                    className="cursor-pointer "
                    >
                    <img src={LeftArrow} className="w-[25px] h-[25px] shadow-xl shadow-heavygris rounded-full   " alt="" />
                </div>

                <div className="w-[70%]">
                  <Swiper
                           ref={swiperRef}
                           spaceBetween={3}
                           breakpoints={{
                           640: {
                           slidesPerView: 1,
                           },
                           700: {
                           slidesPerView: 2,
                           },
                           1024: {
                           slidesPerView: 3,
                           },
                           }}
                            >
                                     
                            <SwiperSlide>
                              {({ isActive, isNext, isPrev }) => (
                                <div
                                  className="scale-100 lg:scale-75  p-2 lg:p-1"
                                >
                                <img  className=" rounded-lg w-[100%]" src={img1} alt="" />
                                </div>
                              )}
                              
                            </SwiperSlide>

                            <SwiperSlide>
                              {({ isActive, isNext, isPrev }) => (
                                <div
                                  className="scale-100 lg:scale-75  p-2 lg:p-1"
                                >
                                <img  className="w-[100%]" src={img1} alt="" />
                                </div>
                              )}
                              
                            </SwiperSlide>
                                  

                  </Swiper>
                </div>

                <div
                    onClick={() => {
                        swiperRef.current.swiper.slideNext();
                    }}
                    className="cursor-pointer "
                    >
                    <img src={RightArrow} className="w-[25px] h-[25px] shadow-xl shadow-heavygris  rounded-full " alt="" />
                </div>
    </div>
       
    <Footer ></Footer>

</section>
    );
}
 
export default SS;