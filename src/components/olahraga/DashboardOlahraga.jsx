import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";

import Copyofdispora from "../../assets/img/Copy of Dispora (1) 1.png";

const DashboardOlahraga = () => {
  return (
    <>
      <div>
        <Header />
      </div>

      {/* content */}
      <div
        className="grid  grid-cols-2  place-items-center place-content-center gap-4 my-10
        py-30 mx-10"
      >
        <button className="">
          <Link to={"/add-berita-olahraga"}>
            <img src={Copyofdispora} alt="" />
            <p className="text-sm min-[319px]:text-xs sm:text-lg  lg:text-xl text-center mt-1 w-auto  font-semibold">
              Berita dan Pengumuman Olahraga
            </p>
          </Link>
        </button>

        <button className="">
          <Link to={"/add-program-olahraga"}>
            <img src={Copyofdispora} alt="" />
            <p className="text-sm min-[319px]:text-xs sm:text-lg  lg:text-xl text-center mt-1 w-auto  font-semibold">
              Program Olahraga
            </p>
          </Link>
        </button>
        <button className="">
          <Link to={"/surat-kerja-olahraga"}>
            <img src={Copyofdispora} alt="" />
            <p className="text-sm min-[319px]:text-xs sm:text-lg  lg:text-xl text-center mt-1 w-auto  font-semibold">
              Surat Olahraga
            </p>
          </Link>
        </button>
      </div>
      {/* content end */}
    </>
  );
};

export default DashboardOlahraga;
