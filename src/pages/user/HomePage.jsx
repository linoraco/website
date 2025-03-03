import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import NavbarHome from "../../components/ComponenRespon/NavbarHome";
import Config from "../../config/config.js";
import Footer from "../../components/Footer";
import bupati from "../../assets/img/bupati.png";
import KetuaKoni from "../../assets/img/newKoni.png";
import Bgdispora from "../../assets/img/foto10.jpeg";
import BgAdmin from "../../assets/img/bgnew.jpg";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [dataOlahraga, setDataOlahraga] = useState([]);
  const [program, setProgram] = useState([]);
  const [programOlahraga, setProgramOlahraga] = useState([]);
  const [galeris, setGaleri] = useState([]);
  const section1 = useRef();
  const [isHovered, setHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [days, setDays] = useState(15);
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(24);
  const [seconds, setSeconds] = useState(28);
  const [currentTime, setCurrentTime] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  const getCurrentTime = () => {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString();
    setCurrentTime(formattedTime);
  };

  // Function to update countdown values
  const updateCountdown = () => {
    const now = new Date().getTime();
    const countdownDate = new Date("2023-12-31T23:59:59").getTime();
    const timeRemaining = countdownDate - now;
    const newDays = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const newHours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const newMinutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const newSeconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    setDays(newDays);
    setHours(newHours);
    setMinutes(newMinutes);
    setSeconds(newSeconds);
  };

  const getBerita = async () => {
    try {
      const response = await axios.get(`${Config.ipPUBLIC}/berita`);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getBeritaOlahraga = async () => {
    try {
      const response = await axios.get(`${Config.ipPUBLIC}/beritaolahraga`);
      setDataOlahraga(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProgram = async () => {
    try {
      const response = await axios.get(`${Config.ipPUBLIC}/program`);
      setProgram(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProgramOlahraga = async () => {
    try {
      const response = await axios.get(`${Config.ipPUBLIC}/programolahraga`);
      setProgramOlahraga(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getGaleri = async () => {
    try {
      const response = await axios.get(`${Config.ipPUBLIC}/galeri`);
      setGaleri(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const scrollHandler = (elmRef) => {
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
    return () => clearInterval(countdownInterval);
  }, []);

  useEffect(() => {
    getCurrentTime();
    const intervalId = setInterval(getCurrentTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galeris.length);
    }, 3000); // Ganti slide setiap 3 detik

    return () => clearInterval(interval);
  }, [galeris.length]);

  return (
    <div
      style={{ backgroundImage: `url(${Bgdispora})` }}
      className="flex-col items-center justify-center bg-auto bg-center bg-fixed  "
    >
      {/* <!-- navbar --> */}
      <NavbarHome />

      {/* <!-- navbar end --> */}
      <div className="flex-col ">
        {/* <!-- content --> */}
        <div className="lg:mx-10 2xl:mx-[10%] bg-red-600/95 rounded-xl hero__text">
          <h1 className="xl:text-3xl  rounded-t-md text-xs min-[380px]:text-sm sm:text-lg md:text-xl lg:text-2xl text-white pt-10   justify-center  font-serif text-center ">
            DINAS PEMUDA DAN OLAHRAGA <br />
            <span className="flex justify-center mt-3">
              {" "}
              KABUPATEN MINAHASA SELATAN
            </span>
          </h1>
          <div className="w-full ">
            <div className="flex justify-between max-lg:flex-col max-lg:items-center  rounded-b-lg  py-11">
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
          </div>
        </div>

        <div className="bg-black/50 lg:mx-10 2xl:mx-[10%] animate-fadeIn duration-500 rounded-xl my-20">
          <div className="grid grid-flow-col gap-1 text-center auto-cols-max justify-end mr-5 mt-5">
            <div className="flex flex-col text-lg font-mono font-semibold mb-10 rounded-xl py-10 px-4 text-white max-md:textarea-md">
              {currentTime}
            </div>
          </div>
          {/* Hero */}
          <div className="flex flex-row items-center justify-center sm:px-[10%]">
            <Swiper
              breakpoints={{
                340: { slidesPerView: 1, spaceBetween: 15 },
                515: { slidesPerView: 2, spaceBetween: 15 },
                700: { slidesPerView: 3, spaceBetween: 15 },
              }}
              freeMode={true}
              pagination={{ clickable: true }}
              modules={[FreeMode, Pagination]}
              className=""
            >
              {data.map((item) => (
                <SwiperSlide key={item.judul_berita}>
                  <Link to={`/tampilan-berita/:id`}>
                    <div className="flex flex-col mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-80 overflow-hidden cursor-pointer">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${`${Config.ipPUBLIC}/images/${item.gambar}`})`,
                        }}
                      />
                      <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50 duration-200" />
                      <div className="relative flex flex-col gap-3">
                        <h1 className="text-xl lg:text-2xl">
                          {item.judul_berita}
                        </h1>
                        <p className="lg:text-[18px]">{item.tanggal_berita}</p>
                      </div>
                      <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="carousel  flex justify-center md:mx-[5%] lg:mx-[10%]  h-[400px]   relative overflow-hidden mb-12">
          {galeris.map((galeri, index) => (
            <div
              key={`${Config.ipPUBLIC}/galeri/${galeri.gambar}`}
              id={`slide${index + 1}`}
              className={`carousel-item absolute w-full h-full mx-[10%] transition-opacity duration-1000 ease-in-out ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={`${Config.ipPUBLIC}/galeri/${galeri.gambar}`}
                className="w-full h-full object-cover"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
        {/* Hero end */}

        {/* <!-- Berita & Pengumuman  --> */}
        <div
          style={{ backgroundImage: `url(${BgAdmin})` }}
          className=" bg-white bg-bottom  bg-auto bg-fixed lg:px-10 2xl:px-[10%]"
        >
          <div className="pt-7">
            <p className="font-semibold text-center text-sm min-[450px]:text-[15px] sm:text-lg md:text-xl lg:text-2xl  text-black mt-11">
              Berita & Pengumuman Bidang Kepemudaan
            </p>
          </div>
          <br />
          <div className="border-t-2 border-black mx-[5%]"></div>
          <div className="grid  grid-cols-1 min-[570px]:grid-cols-2  md:grid-cols-2  sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 place-items-center my-10">
            {data.slice(0, 3).map((item) => (
              <Link
                to={`/tampilan-berita/${item.id}`}
                className="card w-[200px] h-[280px] min-[360px]:w-[250px] min-[360px]:h-[300px]  xl:w-[350px] xl:h-[500px] lg:w-[300px] lg:h-[450px] md:w-72 md:h-[380px] sm:w-64 sm:h-[330px]  bg-base-100 shadow-xl my-4"
              >
                <figure>
                  <img
                    className="hover:scale-125 duration-300"
                    src={`${Config.ipPUBLIC}/images/${item.gambar}`}
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
            <button className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-600 text-black duration-300 rounded-xl border py-2 px-4">
              <Link to={"/all-berita"}>See More..</Link>
            </button>
          </div>

          <div className="mt-10">
            <div className=" pt-7">
              <p className="font-semibold text-center text-sm min-[450px]:text-[15px] sm:text-lg md:text-xl lg:text-2xl text-black ">
                Berita & Pengumuman Bidang Olahraga
              </p>
            </div>
            <br />
            <div className=" border-t-2 border-black mx-[5%]"></div>
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
                      src={`${Config.ipPUBLIC}/images/${
                        beritas && beritas.gambar_berita_olahraga
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
              <button className="transition  ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-600 text-black duration-300 rounded-xl border py-2 px-4">
                <Link to={"/all-berita-olahraga"}>See More..</Link>
              </button>
            </div>
          </div>
        </div>
        {/* <!-- Berita & Pengumuman  end --> */}

        {/* <!-- Program --> */}

        <div className="flex justify-center mt-11 lg:mx-10 2xl:mx-[10%]">
          <p className="text-xl text-white font-bold">PROGRAM DINAS</p>
        </div>
        <div className="flex-col mt-20  lg:mx-10 2xl:mx-[10%]">
          {/* Program Pemuda */}
          <div className="flex-col items-start bg-black/50 py-10 rounded-xl ">
            <div>
              <h1 className="flex mx-28 text-center text-sm min-[450px]:text-[15px] sm:text-lg md:text-xl lg:text-2xl font-semibold text-white">
                Program Kepemudaan
              </h1>
            </div>
            <hr className="mx-28 mt-2 shadow-xl" />
            <div className="grid  grid-cols-1   min-[570px]:grid-cols-2 lg:grid-cols-2  place-items-center my-10 ">
              {program.slice(0, 4).map((programs) => (
                <Link
                  to={`/tampilan-program/${programs.id}`}
                  className="card lg:card-side  w-[200px] h-[280px] min-[360px]:w-[250px] min-[360px]:h-[300px]  xl:w-[600px] xl:h-[250px] lg:w-[500px] lg:h-[220px] md:w-72 md:h-[380px] sm:w-64 sm:h-[330px] bg-white mt-11 shadow-xl"
                >
                  <figure>
                    <img
                      className="lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] hover:scale-125 duration-300"
                      src={`${Config.ipPUBLIC}/images/${programs.gambar_program}`}
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
          <div className="mt-8 bg-black/50  py-10 rounded-xl">
            <div>
              <h1 className="text-2xl max-md:text-xl ml-28 text-white font-semibold">
                Program Olahraga
              </h1>
            </div>
            <hr className="mx-28 mt-2 shadow-xl" />
            <div className="grid  grid-cols-1   min-[570px]:grid-cols-2 lg:grid-cols-2  place-items-center my-10">
              {programOlahraga.slice(0, 4).map((programs) => (
                <Link
                  to={`/tampilan-program-olahraga/${programs.id} `}
                  className="card lg:card-side  w-[200px] h-[280px] min-[360px]:w-[250px] min-[360px]:h-[300px]  xl:w-[600px] xl:h-[250px] lg:w-[500px] lg:h-[220px] md:w-72 md:h-[380px] sm:w-64 sm:h-[330px] bg-white mt-11 shadow-xl"
                >
                  <figure>
                    <img
                      className="lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] hover:scale-125 duration-300"
                      src={`${Config.ipPUBLIC}/images/${programs.gambar_program_olahraga}`}
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
                </Link>
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
        <div className="bg-black/50 lg:mx-10 2xl:mx-[10%] animate-fadeIn duration-500 rounded-xl my-20">
          <div className="py-10 ">
            <div className="flex justify-start">
              <h1 className="text-2xl max-md:text-xl ml-28 text-white font-semibold">
                Galeri
              </h1>
            </div>
            <div className="border-t-2 border-white mx-[8%] "></div>
          </div>
          {/* Hero */}
          <div className="flex flex-row items-center justify-center sm:px-[10%]">
            <Swiper
              breakpoints={{
                340: { slidesPerView: 1, spaceBetween: 15 },
                515: { slidesPerView: 2, spaceBetween: 15 },
                700: { slidesPerView: 3, spaceBetween: 15 },
              }}
              freeMode={true}
              pagination={{ clickable: true }}
              modules={[FreeMode, Pagination]}
              className=""
            >
              {galeris.map((galeri) => (
                <SwiperSlide
                  key={`${`${Config.ipPUBLIC}/galeri/${galeri.gambar}`}`}
                >
                  <Link to={`/tampilan-berita/:id`}>
                    <div className="flex flex-col mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-80 overflow-hidden cursor-pointer">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${`${Config.ipPUBLIC}/galeri/${galeri.gambar}`})`,
                        }}
                      />
                      <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50 duration-200" />

                      <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {/* <!-- Geleri End --> */}
      </div>
      {/* <!-- footer --> */}
      <Footer />
      {/* <!-- footer end --> */}
    </div>
  );
};

export default HomePage;
