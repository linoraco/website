import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../Header";

const TampilanBeritaKadis = () => {
  const { id } = useParams();
  const [beritas, setBerita] = useState({});
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const getBeritaById = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/berita/${id}`);
      setBerita(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBerita = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:4000/berita/${id}`);
      getBeritaById();
      navigate("/add-berita-kadis");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBeritaById();
  }, [id]);

  return (
    <div className="flex-col ">
      {/* <!-- navbar --> */}
      <Header />
      {/* <!-- navbar end --> */}
      <div className="flex justify-between">
        <Link to={"/add-berita-kadis"}>
          <p className="flex items-start justify-center bg-red-500 w-[80px] p-3 rounded-br-xl">
            Kembali
          </p>
        </Link>
        <Link to={"/home-admin-kadis"}>
          <p className="flex items-start justify-center bg-red-500 w-[80px] p-3 rounded-bl-xl">
            Beranda
          </p>
        </Link>
      </div>
      {/* <!-- Content --> */}
      <div className="flex justify-center pb-10">
        <h1 className="text-lg mt-20 sm:text-xl md:text-2xl  lg:text-3xl text-center">
          {" "}
          {beritas && beritas.judul_berita}
        </h1>
      </div>

      <hr className="mx-[10%]" />
      <div className=" mx-[10%] md:mx-[15%] lg:mx-[20%]  ">
        <p className="text-xs sm:text-[16px]   mt-1 w-auto text-justify text-[#888888]">
          by {beritas && beritas.nama_pembuat_berita}
        </p>
        <p className="text-sm sm:text-[16px]  mt-1 w-auto text-justify text-[#888888]  ">
          {" "}
          {beritas && beritas.tanggal_berita}
        </p>
        <img
          className="py-10 rounded-xl min-[319px]:mx-0 "
          src={beritas && beritas.URL}
          alt=""
        />
      </div>
      <div className="mx-[10%] pb-20 md:mx-[15%] lg:mx-[20%]  ">
        <p className="min-[320px]:text-[10px] mx-auto leading-normal  sm:text-sm  md:text-lg   mt-1 text-justify">
          {" "}
          {beritas && beritas.isi_berita}
        </p>
      </div>

      <button
        onClick={() => setOpenModal(true)}
        className="flex w-[50%] mx-auto text-white hover:bg-red-800 justify-center  bg-red-500 p-3  rounded-xl    mb-20 mt-10 "
      >
        hapus
      </button>

      {/* <!-- content end --> */}
      {/* <!-- footer --> */}
      {/* <Footer /> */}
      {/* <!-- footer end --> */}
      {/* MODAL */}
      <div>
        <div
          id="popup-modal"
          tabIndex="-1"
          className={`${
            openModal ? "flex" : "hidden"
          } fixed top-0 left-0 right-0 z-50 justify-center items-center  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
        >
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                onClick={() => setOpenModal(false)}
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-hide="popup-modal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-6 text-center">
                <svg
                  aria-hidden="true"
                  className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Apakah kamu yakin ingin menghapus ?
                </h3>

                <button
                  data-modal-hide="popup-modal"
                  type="button"
                  onClick={(e) => deleteBerita(beritas.id)}
                  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Ya
                </button>

                <button
                  onClick={() => setOpenModal(false)}
                  data-modal-hide="popup-modal"
                  type="button"
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  Tidak
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TampilanBeritaKadis;
