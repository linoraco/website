import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";

import BgAdmin from "../../assets/img/bgnew.jpg";
import BeritaLogo from "../../assets/img/newspaper.png";
import ProgramLogo from "../../assets/img/checklist.png";
import BeasiswaLogo from "../../assets/img/education.png";
import GaleriLogo from "../../assets/img/image-galery.png";
import SuratLogo from "../../assets/img/mail.png";

const DashboardKadis = () => {
  return (
    <>
      <div>
        <Header />
      </div>

      {/* content */}

      <div
        style={{ backgroundImage: `url(${BgAdmin})` }}
        className="grid bg-auto  bg-center bg-fixed  grid-cols-1 xl:grid-cols-3 lg;grid-cols-3  md:grid-cols-2 sm:grid-cols-2 place-items-center place-content-center gap-4 py-10
        py-30 "
      >
        <button className="px-20 py-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <Link to={"/add-berita-kadis"}>
            <img src={BeritaLogo} alt="" />{" "}
            <p className="text-sm min-[319px]:text-xs sm:text-lg  lg:text-xl text-center mt-1 w-auto  font-semibold">
              Berita dan Pengumuman Pemuda
            </p>
          </Link>
        </button>

        <button className="px-20 py-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <Link to={"/add-berita-olahraga-kadis"}>
            <img src={BeritaLogo} alt="" />{" "}
            <p className="text-sm min-[319px]:text-xs sm:text-lg  lg:text-xl text-center mt-1 w-auto  font-semibold">
              Berita dan Pengumuman Olahraga
            </p>
          </Link>
        </button>

        <button className="px-20 py-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <Link to={"/add-program-kadis"}>
            <img src={ProgramLogo} alt="" />{" "}
            <p className="text-sm min-[319px]:text-xs sm:text-lg  lg:text-xl text-center mt-1 w-auto  font-semibold">
              Program Pemuda
            </p>
          </Link>
        </button>

        <button className="px-20 py-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <Link to={"/add-program-olahraga-kadis"}>
            <img src={ProgramLogo} alt="" />
            <p className="text-sm min-[319px]:text-xs sm:text-lg  lg:text-xl text-center mt-1 w-auto  font-semibold">
              Program Olahraga
            </p>
          </Link>
        </button>

        <button className="px-20 py-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <Link to={"/data-pendaftar-kadis"}>
            <img src={BeasiswaLogo} alt="" />{" "}
            <p className="text-sm min-[319px]:text-xs sm:text-lg  lg:text-xl text-center mt-1 w-auto  font-semibold">
              Program Beasiswa
            </p>
          </Link>
        </button>
        <button className="px-20 py-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <Link to={"/add-galeri-kadis"}>
            <img src={GaleriLogo} alt="" />{" "}
            <p className="text-sm min-[319px]:text-xs sm:text-lg  lg:text-xl text-center mt-1 w-auto  font-semibold">
              Galeri Dinas
            </p>
          </Link>
        </button>

        {/* <button className="px-20 py-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <Link to={"/surat-kerja-kadis"}>
            <img src={SuratLogo} alt="" />{" "}
            <p className="text-sm min-[319px]:text-xs sm:text-lg  lg:text-xl text-center mt-1 w-auto  font-semibold">
              Surat Bidang Kerja Kadis{" "}
            </p>
          </Link>
        </button>
        <button className="px-20 py-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <Link to={"/surat-kerja-sekretariat"}>
            <img src={SuratLogo} alt="" />{" "}
            <p className="text-sm min-[319px]:text-xs sm:text-lg  lg:text-xl text-center mt-1 w-auto  font-semibold">
              Surat Bidang Kerja Sekretariat{" "}
            </p>
          </Link>
        </button>
        <button className="px-20 py-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <Link to={"/surat-kerja-olahraga-kadis"}>
            <img src={SuratLogo} alt="" />
            <p className="text-sm min-[319px]:text-xs sm:text-lg  lg:text-xl text-center mt-1 w-auto  font-semibold">
              Surat Bidang Kerja Olahraga{" "}
            </p>
          </Link>
        </button>
        <button className="px-20 py-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <Link to={"/surat-kerja-pemuda-kadis"}>
            <img src={SuratLogo} alt="" />{" "}
            <p className="text-sm min-[319px]:text-xs sm:text-lg  lg:text-xl text-center mt-1 w-auto  font-semibold">
              Surat Bidang Kerja Pemuda{" "}
            </p>
          </Link>
        </button> */}
      </div>

      {/* content end */}
    </>
  );
};

export default DashboardKadis;
