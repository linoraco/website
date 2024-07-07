import React, { useRef, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import axios from "axios";
import fotokadis from "../../assets/img/kadis.png";
import bupati from "../../assets/img/bupati.png";
import KetuaKoni from "../../assets/img/newKoni.png";
import Bgdispora from "../../assets/img/foto10.jpeg";

// data dummy
// import Beritapemuda from "../../helper/beritapemuda.json";
// import Beritaolahraga from "../../helper/beritaolahraga.json";
// import galeri from "../../helper/galeri.json";
// import Program from "../../helper/program.json";
// import Programolahraga from "../../helper/programolahraga.json";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import NavbarHome from "../../components/ComponenRespon/NavbarHome";
import Config from "../../config/config.js";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [dataOlahraga, setDataOlahraga] = useState([]);
  const [program, setProgram] = useState([]);
  const [programOlahraga, setProgramOlahraga] = useState([]);
  const [galeris, setGaleri] = useState([]);
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  const section5 = useRef();
  const [isHovered, setHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [days, setDays] = useState(15);
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(24);
  const [seconds, setSeconds] = useState(28);
  const [currentTime, setCurrentTime] = useState("");

  const getCurrentTime = () => {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString();
    setCurrentTime(formattedTime);
  };

  // Fungsi untuk mengupdate nilai countdown
  const updateCountdown = () => {
    // Get the current date and time
    const now = new Date().getTime();

    // Set the date and time of the countdown
    const countdownDate = new Date("2023-12-31T23:59:59").getTime();

    // Calculate the time remaining
    const timeRemaining = countdownDate - now;

    // Calculate days, hours, minutes, and seconds
    const newDays = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const newHours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const newMinutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const newSeconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Update the state with the new values
    setDays(newDays);
    setHours(newHours);
    setMinutes(newMinutes);
    setSeconds(newSeconds);
  };

  const goToNextSlide = () =>
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galeris.length);
  const goToPrevSlide = () =>
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + galeris.length) % galeris.length
    );

  // useEffect(() => {
  //   const autoSlideInterval = setInterval(goToNextSlide, 5000); // Auto slide every 5 seconds

  //   return () => clearInterval(autoSlideInterval);
  // }, []); // Run only once when the component is mounted

  const getBerita = async () => {
    try {
      const response = await axios.get(`${Config.ipPUBLIC}/berita`);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.data);
    }
  };

  const getBeritaOlahraga = async () => {
    try {
      const response = await axios.get(`${Config.ipPUBLIC}/beritaolahraga`);
      setDataOlahraga(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.data);
    }
  };

  const getProgram = async () => {
    try {
      const response = await axios.get(`${Config.ipPUBLIC}/program`);
      setProgram(response.data);
      console.log(response.program);
    } catch (error) {
      console.log(error.program);
    }
  };

  const getProgramOlahraga = async () => {
    try {
      const response = await axios.get(`${Config.ipPUBLIC}/programolahraga`);
      setProgramOlahraga(response.data);
      console.log(response.program);
    } catch (error) {
      console.log(error.program);
    }
  };

  const getGaleri = async () => {
    try {
      const response = await axios.get(`${Config.ipPUBLIC}/galeri`);
      setGaleri(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.galeri);
    }
  };

  const scrollHandler = (elmRef) => {
    console.log(elmRef);
    window.scrollTo({ top: elmRef.current.offsetTop, behavior: "smooth" });
  };

  useEffect(() => {
    getBerita();
    getProgram();
    getGaleri();
    getBeritaOlahraga();
    getProgramOlahraga();
  }, []);

  useEffect(() => {
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Membersihkan interval setelah komponen di-unmount
    return () => clearInterval(countdownInterval);
  }, []);

  useEffect(() => {
    // Panggil getCurrentTime saat komponen pertama kali dimuat
    getCurrentTime();

    // Atur interval untuk memperbarui waktu setiap detik
    const intervalId = setInterval(getCurrentTime, 1000);
    // Bersihkan interval saat komponen akan dibongkar
    return () => clearInterval(intervalId);
  }, []); // Penambahan dependensi kosong agar useEffect hanya dipanggil sekali

  return (
    <div
      style={{ backgroundImage: `url(${Bgdispora})` }}
      className="flex-col items-center justify-center bg-auto bg-center bg-fixed  "
    >
      {/* <!-- navbar --> */}
      <NavbarHome />

      {/* <!-- navbar end --> */}
      <div className=" flex-col  ">
        {/* <!-- content --> */}
        <div className="lg:mx-10">
          <h1 className="xl:text-3xl rounded-t-md text-xs min-[380px]:text-sm sm:text-lg md:text-xl lg:text-2xl text-white bg-red-600/80 pt-10   justify-center  font-serif text-center ">
            DINAS PEMUDA DAN OLAHRAGA <br />
            <span className="flex justify-center mt-3">
              {" "}
              KABUPATEN MINAHASA SELATAN
            </span>
          </h1>
          <div className="w-full ">
            <div className="flex justify-between max-lg:flex-col max-lg:items-center bg-red-600/80 rounded-b-lg  py-11">
              <div className="lg:ml-16">
                <img
                  className="w-[380px] mx-auto h-[230px] min-[359px]:w-[380px] min-[359px]:h-[260px] sm:w-[380px] sm:h-[280px] md:w-[470px] md:h-[300px] lg:w-[430px] lg:h-[300px]   rounded-2xl "
                  src={bupati}
                  alt=""
                />
                <div className="flex justify-center items-center mx-auto">
                  <div className="mt-[-50px] h-[43px] bg-red-700 text-white font-bold text-center py-2 px-2 rounded-md ">
                    <h1 className="text-[8px] min-[359px]:text-[9px] lg:text-[10px] font-bold ">
                      FRANGKY DONNY WONGKAR, SH.
                    </h1>
                    <p className="text-[7px] sm:text-[8px] lg:text-[9px] ">
                      BUPATI MINAHASA SELATAN
                    </p>
                  </div>
                  <div className="mt-[-50px] h-[43px]  bg-red-700 text-white font-bold text-center py-2 px-2 rounded-md">
                    <h1 className="text-[8px] min-[359px]:text-[9px] lg:text-[10px]  font-bold    ">
                      PDT. PETRA YANI REMBANG
                    </h1>
                    <p className="text-[7px] sm:text-[8px] lg:text-[9px] ">
                      WAKIL BUPATI MINAHASA SELATAN
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:mr-20">
                <img
                  className="w-[200px] h-[200px] sm:w-[200px]  sm:h-[230px] md:w-[200px]  md:h-[243px] lg:w-[220px]  lg:h-[254px]  rounded-2xl "
                  src={KetuaKoni}
                  alt=""
                />
                <div className="flex items-center justify-center">
                  <div className=" bg-red-700  h-[43px] text-white items-center font-bold text-center py-2 px-2 rounded-md">
                    <h1 className="text-[9px]  lg:text-[10px]">
                      FRANGKY DONNY WONGKAR, SH.
                    </h1>
                    <p className="text-[7px] sm:text-[8px] lg:text-[9px]">
                      KETUA KONI MINSEL
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              ref={section1}
              className=" font-semibold font-mono mr-11 mt-11"
            >
              <div className="grid grid-flow-col gap-1 text-center auto-cols-max justify-end mr-5 mt-5">
                <div
                  className="flex  flex-col text-lg font-mono font-semibold mb-10 rounded-xl py-10 px-4 text-white max-md:textarea-md"
                  px-4
                >
                  {currentTime}
                </div>
              </div>
            </div>
            {/* Hero */}
            <div className="flex flex-row item-center justify-center ml ">
              <Swiper
                breakpoints={{
                  340: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                  },
                  515: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                  },
                  700: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                  },
                }}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="max-w-[60%] md:max-w-[50%] sm:max-w-[90%] min-[380px]:max-w-[90%] lg:max-w-[90%] "
              >
                {data.map((item) => (
                  <SwiperSlide key={item.judul_berita}>
                    <Link to={`/tampilan-berita/:id`}>
                      <div className="flex flex-col gap-6  mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] sm:h-[250px] sm:w-[215px] md:h-[270px] md:w-[220px]  lg:h-[340px] lg:w-[290px] xl:h-[400px] xl:w-[350px] overflow-hidden cursor-pointer">
                        <div
                          className="absolute inset-0 bg-cover bg-center "
                          style={{
                            backgroundImage: `url(${Config.ipPUBLIC}${item.gambar})`,
                          }}
                        />
                        <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50 duration-200" />
                        <div className="relative flex flex-col gap-3">
                          <h1 className="text-xl lg:text-2xl">
                            {item.judul_berita}{" "}
                          </h1>
                          <p className="lg:text-[18px]">
                            {item.tanggal_berita}{" "}
                          </p>
                          {/* <p className="lg:text-[18px]">{item.isi_berita} </p> */}
                        </div>
                        <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        <div className="carousel flex justify-center md:w-[800px]   mx-auto mt-[180px]">
          <div id="slide1" className="carousel-item relative w-full ">
            <Link to={"/all-galeri"} className="w-full">
              <img
                src={`${Config.ipPUBLIC}${galeris[currentIndex]?.gambar}`}
                alt={`slide-${currentIndex}`}
                className="relative inset-0 w-full md:h-[600px] bg-cover bg-center duration-300 rounded-xl"
              />
            </Link>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <button
                onClick={goToPrevSlide}
                className="btn btn-circle bg-white/50 hover:bg-white"
              >
                ❮
              </button>
              <button
                onClick={goToNextSlide}
                className="btn btn-circle bg-white/50 hover:bg-white"
              >
                ❯
              </button>
            </div>
          </div>
        </div>
        {/* Hero end */}
        <br />
        <br />
        <br />
        <br />
        {/* <!-- Berita & Pengumuman Kepemudaan --> */}
        <div className="p-5 bg-red-600/50 rounded-xl lg:mx-10 ">
          <div className=" pt-7" ref={section2}>
            <p className="font-semibold text-center text-sm min-[450px]:text-[15px] sm:text-lg md:text-xl lg:text-2xl  text-white mt-11">
              Berita & Pengumuman Bidang Kepemudaan
            </p>
          </div>
          <br />
          <hr className="mx-28 shadow-xl 2xl:hidden" />
          <div className="grid  grid-cols-1 min-[570px]:grid-cols-2  md:grid-cols-2  sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 place-items-center my-10">
            {data.slice(0, 3).map((item) => (
              <Link
                to={`/tampilan-berita/${item.id}`}
                className="card w-[200px] h-[280px] min-[360px]:w-[250px] min-[360px]:h-[300px]  xl:w-[350px] xl:h-[500px] lg:w-[300px] lg:h-[450px] md:w-72 md:h-[380px] sm:w-64 sm:h-[330px]  bg-base-100 shadow-xl my-4"
              >
                <figure>
                  <img
                    className="hover:scale-125 duration-300"
                    src={`${Config.ipPUBLIC}${item.gambar}`}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body pt-2 lg:pt-5 items-center bg-white rounded-b-2xl">
                  <h2 className="card-title text-center flex-col text-[13px] lg:text-[17px] sm:text-[15px] md:text-[16px] ">
                    {item.judul_berita.slice(0, 30)}
                  </h2>
                  <div className="badge badge-secondary text-center text-[10px] lg:text-[13px] sm:text-[13px] md:text-[13px] xl:text-[15px]">
                    {item.tanggal_berita}
                  </div>
                  <p className="text-[11px] md:text-[13px] lg:text-[15]  xl:text-[15px] text-justify">
                    {item.isi_berita.slice(0, 35)}....
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center items-center mr-10">
            <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 text-white duration-300 rounded-xl border py-2 px-4">
              <Link to={"/all-berita"}>See More..</Link>
            </button>
          </div>
        </div>
        {/* <!-- Berita & Pengumuman Kepemudaan end --> */}
        {/* <!-- Berita & Pengumuman Olahraga --> */}
        <div className="p-5  bg-red-600/50 rounded-xl mt-10 lg:mx-10">
          <div className=" pt-7" ref={section2}>
            <p className="font-semibold text-center text-sm min-[450px]:text-[15px] sm:text-lg md:text-xl lg:text-2xl text-white ">
              Berita & Pengumuman Bidang Olahraga
            </p>
          </div>
          <br />
          <hr className="mx-28 shadow-xl" />
          <div className="grid grid-cols-1 min-[570px]:grid-cols-2  md:grid-cols-2  sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3  place-items-center my-10">
            {dataOlahraga.slice(0, 3).map((beritas) => (
              <Link
                key={beritas && beritas?.id}
                to={`/tampilan-berita-olahraga/${beritas.id}`}
                className="card w-[200px] h-[280px] min-[360px]:w-[250px] min-[360px]:h-[300px]  xl:w-[350px] xl:h-[500px] lg:w-[300px] lg:h-[450px] md:w-72 md:h-[380px] sm:w-64 sm:h-[330px] bg-base-100 shadow-xl my-4"
              >
                <figure>
                  <img
                    className="hover:scale-125 duration-300"
                    src={`${Config.ipPUBLIC}${
                      beritas && beritas.gambar_program_olahraga
                    }`}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body pt-2 lg:pt-5  bg-white rounded-b-2xl">
                  <h2 className="card-title text-center flex-col text-[13px] lg:text-[17px] sm:text-[15px] md:text-[16px] ">
                    {beritas && beritas.judul_berita_olahraga}
                    <div className="badge badge-secondary text-center text-[10px] lg:text-[13px] sm:text-[13px] md:text-[13px] xl:text-[15px]">
                      {beritas && beritas.tanggal_berita_olahraga}
                    </div>
                  </h2>
                  <p className="text-[11px] md:text-[13px] lg:text-[15]  xl:text-[15px] text-justify">
                    {beritas && beritas.isi_berita_olahraga.slice(0, 30)}....
                  </p>
                  <div className="card-actions justify-end"></div>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center items-center mr-10">
            <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 text-white duration-300 rounded-xl border py-2 px-4">
              <Link to={"/all-berita-olahraga"}>See More..</Link>
            </button>
          </div>
        </div>
        {/* <!-- Berita & Pengumuman Olahraga end --> */}

        {/* <!-- Program --> */}
        <div className="flex justify-center mt-11">
          <p className="text-xl text-white font-bold">PROGRAM DINAS</p>
        </div>
        <div ref={section3} className="flex-col mt-20 lg:mx-10">
          {/* Program Pemuda */}
          <div className="flex-col items-start bg-red-600/50 py-10 rounded-xl ">
            <div>
              <h1 className="flex mx-28 text-center text-sm min-[450px]:text-[15px] sm:text-lg md:text-xl lg:text-2xl font-semibold text-white">
                Program Kepemudaan
              </h1>
            </div>
            <hr className="mx-28 mt-2 shadow-xl" />
            <div className="grid  grid-cols-1   min-[570px]:grid-cols-2 lg:grid-cols-2  place-items-center my-10 ">
              {program.slice(0, 4).map((programs) => (
                <Link
                  to={`/tampilan-program/${program.id}`}
                  className="card lg:card-side  w-[200px] h-[280px] min-[360px]:w-[250px] min-[360px]:h-[300px]  xl:w-[600px] xl:h-[250px] lg:w-[500px] lg:h-[220px] md:w-72 md:h-[380px] sm:w-64 sm:h-[330px] bg-white mt-11 shadow-xl"
                >
                  <figure>
                    <img
                      className="lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] hover:scale-125 duration-300"
                      src={`${Config.ipPUBLIC}${programs.gambar}`}
                      alt="Album"
                    />
                  </figure>
                  <div className="card-body ">
                    <h2 className="card-title flex-col text-center text-[13px] lg:text-[17px] sm:text-[15px] md:text-[16px] ">
                      {programs.nama_program}
                    </h2>
                    <p className="text-center text-[13px] lg:text-[16px] sm:text-[14px] md:text-[15px] xl:text-[16px]">
                      Author: {programs.nama_pembuat_program}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex  items-center justify-center mt-14">
              <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 text-white duration-300 rounded-xl border py-2 px-4">
                <Link to={"/all-program"}>See More..</Link>
              </button>
            </div>
          </div>
          {/* Program Pemuda END */}
          {/* Program Olahraga */}
          <div className="mt-8 bg-red-600/50 py-10 rounded-xl">
            <div>
              <h1 className="text-2xl max-md:text-xl ml-28 text-white font-semibold">
                Program Olahraga
              </h1>
            </div>
            <hr className="mx-28 mt-2 shadow-xl" />
            <div className="grid  grid-cols-1   min-[570px]:grid-cols-2 lg:grid-cols-2  place-items-center my-10">
              {programOlahraga.slice(0, 4).map((programs) => (
                <div className="card lg:card-side  w-[200px] h-[280px] min-[360px]:w-[250px] min-[360px]:h-[300px]  xl:w-[600px] xl:h-[250px] lg:w-[500px] lg:h-[220px] md:w-72 md:h-[380px] sm:w-64 sm:h-[330px] bg-white mt-11 shadow-xl">
                  <figure>
                    <img
                      className="lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] hover:scale-125 duration-300"
                      src={`${Config.ipPUBLIC}${programs.gambar_program_olahraga}`}
                      alt="Album"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title flex-col text-center text-[13px] lg:text-[17px] sm:text-[15px] md:text-[16px] ">
                      {programs.nama_program_olahraga}
                    </h2>
                    <p className="text-center text-[13px] lg:text-[16px] sm:text-[14px] md:text-[15px] xl:text-[16px]">
                      {programs.nama_pembuat_program_olahraga}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center mt-12">
              <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 text-white duration-300 rounded-xl border py-2 px-4">
                <Link to={"/all-program-olahraga"}>See More..</Link>
              </button>
            </div>
          </div>
          {/* Program Olahraga END */}
        </div>
        {/* <!-- Program end --> */}

        {/* <!-- Galeri start --> */}
        <div className="bg-red-600/50 py-10 rounded-xl mt-20 lg:mx-10">
          <div ref={section4}>
            <h1 className="text-3xl max-md:text-xl ml-24 font-semibold text-white">
              Galeri
            </h1>
          </div>
          <div className="flex-col max-md:flex-col item-center justify-center ml-4">
            <Swiper
              breakpoints={{
                340: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                700: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
              }}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="max-w-[60%] md:max-w-[90%] sm:max-w-[90%] min-[380px]:max-w-[90%] lg:max-w-[90%] "
            >
              {galeris.map((galeri) => (
                <SwiperSlide key={`${Config.ipPUBLIC}${galeri.gambar}`}>
                  <div>
                    <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] sm:h-[250px] sm:w-[215px] md:h-[270px] md:w-[220px]  lg:h-[340px] lg:w-[290px] xl:h-[400px] xl:w-[350px] overflow-hidden cursor-pointer">
                      <div
                        className="absolute inset-0 bg-cover bg-center hover:scale-125 duration-300"
                        style={{
                          backgroundImage: `url(${Config.ipPUBLIC}${galeri.gambar})`,
                        }}
                      />

                      <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex items-center justify-center mr-10">
              <button className=" max-md:justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 text-white duration-300 border rounded-xl py-2 px-4">
                <Link to={"/all-galeri"}>See More..</Link>
              </button>
            </div>
          </div>
        </div>
        {/* <!-- Geleri End --> */}
        <br />
        <br />
        <br />

        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      {/* <!-- footer --> */}
      <Footer />
      {/* <!-- footer end --> */}
    </div>
  );
};

export default HomePage;
