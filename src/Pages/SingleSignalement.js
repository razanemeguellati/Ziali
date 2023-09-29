import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import RightArrow from "../images/right.png";
import LeftArrow from "../images/left.png";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Icon } from "leaflet";

import img1 from "../images/fireman.jpeg";
import img2 from "../images/waterman.jpg";
import img3 from "../images/fireman2.jpeg";

import Footer from "../Components/Footer";

import {
  MapContainer,
  TileLayer,
  useMap,
  useMapEvents,
  Marker,
  Popup,
} from "react-leaflet";

const SS = () => {
  const [currLocation, setCurrLocation] = useState({
    latitude: 36.752887,
    longtitude: 3.042048,
  });

  const Pics = [
    { id: 1, pic: img1 },

    { id: 2, pic: img2 },

    { id: 3, pic: img3 },
  ];

  const swiperRef = useRef(null);

  const { id } = useParams();
  const [Signalement, setSignalement] = useState({});

  const customIcon = new Icon({
    iconUrl: require("../images/wrong.png"),
    className: "shadow-3xl rounded-full",
    iconSize: [38, 38], // size of the icon
  });

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/getSignalement/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSignalement(data);
        setCurrLocation({latitude: data.latitude ,longtitude:data.longitude})
      })
      .catch((err) => console.log(err));
  }, []);

  // fetching the infos of the id in the params

  return (
    <section className=" mt-4 flex flex-col justify-center items-center space-y-2 ">
      <h1 className="text-3xl font-bold lg:p-6">
        {" "}
        <b className="text-blue"> Fil</b> d’Actualité{" "}
      </h1>

      <div className="lg:w-full lg:flex lg:flex-row lg:px-16 lg:py-2 justify-start item-center">
        <section className="w-full flex flex-col space-y-2 items-left py-2 pr-8 lg:px-8 lg:w-[45%]  ">
          <div className="flex flex-row space-x-3">
            <p className="text-black text-sm font-semibold lg:text-lg ">
              
              Nature du problème :
            </p>
            <div className="flex flex-row items-center justify-center  space-x-3">
              <div className=" h-2 w-2 rounded-full bg-red "></div>
              <p className="text-black text-xs opacity-75 lg:text-[0.9rem]">
                  {Signalement.nature}
              </p>
            </div>
          </div>

          <div className="flex flex-row space-x-3">
            <p className="text-black text-sm font-semibold lg:text-lg">
               Etat :
            </p>
            <div className="flex flex-row items-center justify-center  space-x-3">
              <div className=" h-2 w-2 rounded-full bg-green "></div>
              <p className="text-black text-xs opacity-75 lg:text-[0.9rem]">
                {"Rétabli"}
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-start items-center  space-x-3">
            <p className="text-black text-sm font-semibold lg:text-lg">
               Wilaya :
            </p>
            <p className="text-black text-xs  opacity-75 lg:text-[0.9rem]">
              {Signalement.wilaya}
            </p>
          </div>

          <div className="flex flex-row justify-start items-center space-x-3">
            <p className="text-black text-sm font-semibold lg:text-lg">
               Commune :
            </p>
            <p className="text-black text-xs opacity-75 lg:text-[0.9rem]">
              {Signalement.commune}
            </p>
          </div>

          <div className="flex flex-col space-y-2 items-left">
            <p className="text-black text-sm font-semibold lg:text-lg">
              {" "}
              Commentaire :{" "}
            </p>
            <p className="text-black text-xs opacity-75 lg:text-[0.9rem]">
              {" "}
              {Signalement.description}{" "}
            </p>
          </div>
        </section>

        <section
          id="map-section"
          className="flex flex-row justify-center items-center py-8 lg:py-2 lg:w-[55%] "
        >
          <div className="w-[95%] lg:w-[90%] h-64 lg:h-72 bg-green rounded-2xl shadow-xl  ">
            <MapContainer
              className=" h-full w-full rounded-2xl  "
              center={[currLocation.latitude, currLocation.longtitude]}
              zoom={13}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <Marker
                position={[currLocation.latitude, currLocation.longtitude]}
                icon={customIcon}
              >
                {" "}
              </Marker>
            </MapContainer>
          </div>
        </section>
      </div>

      <div className="flex flex-row items-left jsutify-left w-[80%] lg:w-[90%] lg:px-8">
        <h1 className="p-0 "> Photos : </h1>
      </div>

      <div
        id="swiper-div"
        className="flex flex-row justify-center items-center w-[100%] pb-14"
      >
        <div
          onClick={() => {
            swiperRef.current.swiper.slidePrev();
          }}
          className="cursor-pointer "
        >
          <img
            src={LeftArrow}
            className="w-[25px] h-[25px] shadow-xl shadow-heavygris rounded-full"
            alt=""
          />
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
                <div className="scale-100 lg:scale-75  p-2 lg:p-1">
                  <img className=" rounded-lg w-[100%]" src={img1} alt="" />
                </div>
              )}
            </SwiperSlide>

            <SwiperSlide>
              {({ isActive, isNext, isPrev }) => (
                <div className="scale-100 lg:scale-75  p-2 lg:p-1">
                  <img className=" rounded-lg w-[100%]" src={img1} alt="" />
                </div>
              )}
            </SwiperSlide>

            <SwiperSlide>
              {({ isActive, isNext, isPrev }) => (
                <div className="scale-100 lg:scale-75  p-2 lg:p-1">
                  <img className=" rounded-lg w-[100%]" src={img1} alt="" />
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
          <img
            src={RightArrow}
            className="w-[25px] h-[25px] shadow-xl shadow-heavygris  rounded-full "
            alt=""
          />
        </div>
      </div>

      <Footer></Footer>
    </section>
  );
};

export default SS;
