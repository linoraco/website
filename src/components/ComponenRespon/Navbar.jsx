import React, { useState } from "react";
import { Link } from "react-router-dom";
import Disporabgd9 from "../../assets/img/dispora bgD9.png";

import LogoPemkab from "../../assets/img/minsel_300x300.png";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      {/* <!-- navbar --> */}
      <div className="navbar lg:py-4 bg-white px-8 border-b-2 border-red-800">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              onClick={toggleDropdown}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {isDropdownOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white  rounded-box w-52"
              >
                <li className="hover:bg-red-500 rounded-md">
                  <Link to="/">HOME</Link>
                </li>
                <li className="hover:bg-red-500 rounded-md">
                  <details>
                    <summary>PROFIL DINAS</summary>
                    <ul className="p-2  text-sm">
                      <li className="hover:bg-white rounded-md">
                        <Link to={"/sejarah-dinas"}>SEJARAH DINAS</Link>
                      </li>
                      <li className="hover:bg-white rounded-md">
                        <Link to={"/visi-misi"}>VISI MISI</Link>
                      </li>
                      <li className="hover:bg-white rounded-md">
                        <Link to={"/tupoksi"}>TUPOKSI</Link>
                      </li>
                      <li className="hover:bg-white rounded-md">
                        <Link to={"/struktur-dinas"}>STRUKTUR DINAS</Link>
                      </li>
                      <li className="hover:bg-white rounded-md">
                        <Link to={"/renstra"}>RENSTRA</Link>
                      </li>
                      <li className="hover:bg-white rounded-md">
                        <Link to={"/produk-hukum"}>PRODUK HUKUM</Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li className="hover:bg-red-500 rounded-md">
                  <details>
                    <summary>BERITA DAN PENGUMUMAN</summary>
                    <ul className="p-2  text-sm">
                      <li className="hover:bg-white rounded-md">
                        <Link to={"/all-berita-olahraga"}>BIDANG OLAHRAGA</Link>
                      </li>
                      <li className="hover:bg-white rounded-md">
                        <Link to={"/all-berita"}>BIDANG KEPEMUDAAN</Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li className="hover:bg-red-500 rounded-md">
                  <details>
                    <summary>PROGRAM</summary>
                    <ul className="p-2  text-sm">
                      <li className="hover:bg-white rounded-md">
                        <Link to={"/all-program-olahraga"}>
                          BIDANG OLAHRAGA
                        </Link>
                      </li>
                      <li className="hover:bg-white rounded-md">
                        <Link to={"/all-program"}>BIDANG KEPEMUDAAN</Link>
                      </li>
                      <li className="hover:bg-white rounded-md">
                        <Link to={"/tampilan-program-beasiswa"}>
                          PROGRAM BEASISWA
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li className="hover:bg-red-500 rounded-md">
                  <Link to={"/all-galeri"}>GALERI </Link>
                </li>
              </ul>
            )}
          </div>
          <img
            className=" min-[319px]:w-[120px] sm:w-[140px] lg:w-[150px]"
            src={Disporabgd9}
            alt=""
          />
        </div>
        <div
          tabIndex={0}
          className="navbar-center mx-3 z-[1] max-lg:hidden xl:flex"
        >
          <ul className="menu menu-horizontal px-1">
            <li className="text-[14px]  lg:text-md xl:text-lg font-semibold">
              <Link to={"/"}>HOME </Link>
            </li>
            <li className="text-[14px]  lg:text-md xl:text-lg font-semibold">
              <details>
                <summary>PROFIL DINAS</summary>
                <ul className="p-2 bg-red-500 text-sm">
                  <li className="hover:bg-white rounded-md">
                    <Link to={"/sejarah-dinas"}>SEJARAH DINAS</Link>
                  </li>
                  <li className="hover:bg-white rounded-md">
                    <Link to={"/visi-misi"}>VISI MISI</Link>
                  </li>
                  <li className="hover:bg-white rounded-md">
                    <Link to={"/tupoksi"}>TUPOKSI</Link>
                  </li>
                  <li className="hover:bg-white rounded-md">
                    <Link to={"/struktur-dinas"}>STRUKTUR DINAS</Link>
                  </li>
                  <li className="hover:bg-white rounded-md">
                    <Link to={"/renstra"}>RENSTRA</Link>
                  </li>
                  <li className="hover:bg-white rounded-md">
                    <Link to={"/produk-hukum"}>PRODUK HUKUM</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li className="text-[14px]  lg:text-md xl:text-lg font-semibold">
              <details>
                <summary>BERITA DAN PENGUMUMAN</summary>
                <ul className="p-2 bg-red-500 text-sm">
                  <li className="hover:bg-white rounded-md">
                    <Link to={"/all-berita-olahraga"}>BIDANG OLAHRAGA</Link>
                  </li>
                  <li className="hover:bg-white rounded-md">
                    <Link to={"/all-berita"}>BIDANG KEPEMUDAAN</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li className="text-[14px]  lg:text-md xl:text-lg font-semibold">
              <details>
                <summary>PROGRAM</summary>
                <ul className="p-2 bg-red-500 text-sm">
                  <li className="hover:bg-white rounded-md">
                    <Link to={"/all-program-olahraga"}>BIDANG OLAHRAGA</Link>
                  </li>
                  <li className="hover:bg-white rounded-md">
                    <Link to={"/all-program"}>BIDANG KEPEMUDAAN</Link>
                  </li>
                  <li className="hover:bg-white rounded-md">
                    <Link to={"/tampilan-program-beasiswa"}>
                      PROGRAM BEASISWA
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li className="text-[14px]  lg:text-md xl:text-lg font-semibold">
              <Link to={"/all-galeri"}>GALERI </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to={"/login"}
            className="btn w-[60px] sm:w-[80px] md:w-[100px]  md:text-[12px]   lg:text-[14px] bg-red-600 text-[10px] "
          >
            Login Admin
          </Link>
        </div>
      </div>
      {/* <!-- navbar end --> */}
    </>
  );
};

export default Navbar;
