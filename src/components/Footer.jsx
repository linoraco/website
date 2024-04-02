import React from "react";
import { Link } from "react-router-dom";
import Disporabgd9 from "../assets/img/dispora bgD9.png";
import Facebook from "../../src/assets/img/🦆 icon _facebook_.png";
import Instagram from "../../src/assets/img/🦆 icon _instagram_.png";
import Whatshapp from "../../src/assets/img/🦆 icon _whatsapp_.png";
const footer = () => {
  return (
    <>
      {/* <!-- footer --> */}
      <div className="h-[520px] sm:h-[350px] lg:h-[250px] bg-[#D9D9D9] ">
        <div className="grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 items-center place-items-start ml-10 ">
          <div className="flex mt-5 ">
            <img
              className="h-[90px] sm:h-[100px] xl:h-[120px]"
              src={Disporabgd9}
              alt=""
            />
          </div>
          <div className="flex mt-4  lg:ml-10">
            <button>
              <Link to={"/"}>
                <img className="h-8  xl:h-10  px-2" src={Instagram} alt="" />
              </Link>
            </button>
            <button>
              <Link to={"/"}>
                <img className="h-8 w-13 xl:h-10  px-2" src={Facebook} alt="" />
              </Link>
            </button>
            <Link to={"/"}>
              <img className="h-8 w-13 xl:h-10  px-2" src={Whatshapp} alt="" />
            </Link>
          </div>
          <div className="flex flex-col sm:ml-10  items-start ">
            <h1 className="text-lg xl:text-[19px] py-1 pt-5  font-semibold">
              Tentang Kami
            </h1>
            <button className="text-sm py-1 xl:text-[15px]">
              <Link to={"/visi-misi"}>Visi Misi</Link>
            </button>
            <button className="text-sm py-1 xl:text-[15px]">
              <Link to={"/tupoksi"}>Tupoksi</Link>
            </button>
            <button className="text-sm py-1 xl:text-[15px]">
              <Link to={"/struktur-dinas"}>Struktur Dinas</Link>
            </button>
          </div>
          <div className="flex flex-col items-start">
            <h1 className="text-lg xl:text-[19px] py-1 pt-5  font-semibold">
              Kontak
            </h1>
            <button className="text-sm py-1 xl:text-[15px]">
              <p>(012) 12345678</p>
            </button>
            <button className="text-sm py-1 xl:text-[15px]">
              <p>Jln. Trans Sulawesi, Amurang</p>
            </button>
            <button className="text-sm py-1 xl:text-[15px]">
              <p>disporaminsel@gmail.com</p>
            </button>
          </div>
        </div>
        <div className="">
          <h1 className="text-sm text-center mt-10 lg:mt-20">
            Copyright © 2024 Dinas Pemuda Dan Olahraga Minahasa Selatan.
          </h1>
        </div>
      </div>
      {/* <!-- footer end --> */}
    </>
  );
};

export default footer;
