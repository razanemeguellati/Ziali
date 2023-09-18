import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import RightArrow from '../images/right.png' ; 
import LeftArrow from '../images/left.png' ; 
import { useEffect, useRef, useState } from "react";

import img1 from "../images/fireman.jpeg"
import img2 from "../images/waterman.jpg"
import img3 from "../images/fireman2.jpeg"

import {Link } from "react-router-dom"

const Join = () => {
    const Pics = 
    [ {id:1 , 
      pic:img1} , 

      {id:2 , 
      pic:img2} ,

      {id:3 , 
      pic:img3} ]
       
    
    const swiperRef = useRef(null);

    return (
 <div id="Joinus" className="relative  w-full h-[400px] flex flex-row lg:flex-col justify-center items-center  lg:h-[520px] ">
  
       
        <div className="bg-sky pt-8 lg:pt-16 flex flex-col items-center justify-center space-y-10 w-[90%] h-[100%] lg:w-[80%]  rounded-tl-[55px] lg:rounded-tl-[180px] rounded-br-[55px] lg:rounded-br-[180px] lg:gap-6 ">

        <div className="flex flex-col items-center justify-center space-y-5 lg:flex-row  px-auto ">

                <div className="lg:order-2 flex flex-col justify-center items-center space-y-3 px-4  ">
                <p className="font-bold text-2xl lg:text-4xl">  Rejoignez-Nous ! </p>
                <p className=" text-sm font-medium lg:text-xl lg:w-[80%] "> <center> dans notre mission pour sauver notre pays du désastres en un clic ! </center> </p>
                </div>
                <Link to="/Signaler" className="w-[100%] pl-5">
                <button className="btn2 lg:order-1 w-[80%]  h-[50px] lg:w-[350px] lg:h-[80px] ml-5 hover:shadow-xl bg-blue rounded-full text-white font-semibold lg:text-lg lg:font-medium lg:ml-24">
                  Signaler un problème !  
                </button>
                </Link>
        </div>
       
 
        <div className="flex flex-row justify-center items-center w-[100%]">
                <div
                    onClick={() => {
                        swiperRef.current.swiper.slidePrev();
                    }}
                    className="cursor-pointer "
                    >
                    <img src={LeftArrow} className="w-[20px] h-[20px] lg:w-[40px] lg:h-[40px] shadow-2xl rounded-full " alt="" />
                </div>

      <div className="w-[60%] lg:w-[80%]">
         <Swiper
                            ref={swiperRef}
                            spaceBetween={1}
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
                  
                      <div
                        className="scale-100 lg:scale-75  p-2 lg:p-1"
                      >
                      <img  className=" rounded-lg w-[100%] " src={img1} alt="" />
                      </div>
                                        
                  </SwiperSlide>

                  <SwiperSlide>
                  
                      <div
                        className="scale-100 lg:scale-75  p-2 lg:p-1"
                      >
                      <img  className="w-[100%]" src={img1} alt="" />
                      </div>
                  
                    
                  </SwiperSlide>

                  <SwiperSlide>
                     <div
                        className="scale-100 lg:scale-75 p-2 lg:p-1"
                      >
                      <img  className="w-[100%]" src={img1} alt="" />
                      </div>
                                    
                  </SwiperSlide>
                         

     </Swiper>
     </div>

                <div
                    onClick={() => {
                        swiperRef.current.swiper.slideNext();
                    }}
                    className="cursor-pointer "
                    >
                    <img src={RightArrow} className="w-[20px] h-[20px] lg:w-[40px] lg:h-[40px] shadow-2xl rounded-full" alt="" />
                </div>
        </div>
       

        </div>
    </div> );
}
 
export default Join;