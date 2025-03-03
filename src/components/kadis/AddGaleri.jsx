import React, { useState, useEffect } from "react";
import Dispora1 from "../../assets/img/Dispora 1.png";
import Grup2 from "../../assets/img/Group 2.png";
import Grup3 from "../../assets/img/Group 3.png";
import Header from "../Header";
import { Link } from "react-router-dom";
import axios from "axios";
import config from "../../config/config.js";

const AddGaleri = () => {
  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [id, setId] = useState(0);

  const getGaleri = async () => {
    try {
      const response = await axios.get(`${config.ipPUBLIC}/galeri`);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteGaleri = async (id) => {
    try {
      await axios.delete(`${config.ipPUBLIC}/galeri/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const setUuid = (id) => {
    setOpenModal(true);
    setId(id);
    console.log(id);
  };

  useEffect(() => {
    getGaleri();
  }, []);

  return (
    <>
      <div className="flex-col ">
        {/* <!-- navbar --> */}
        <Header />

        <div>
          <Link to={"/home-admin-kadis"}>
            <img className="h-14" src={Grup3} alt="" />
          </Link>
        </div>

        <div className="">
          <h1 className="text-lg mt-20 sm:text-xl md:text-2xl  lg:text-3xl text-center">
            Galeri Dinas
          </h1>
          <button className="py-2 lg:p-3 mx-10   px-2 my-10 rounded-md text-xs bg-green-500">
            <Link
              className="text-[13px] lg:text-[17px] sm:text-[15px] md:text-[16px]"
              to={"/form-addgaleri-kadis"}
            >
              <span>+</span>Tambah Foto
            </Link>
          </button>
        </div>

        {/* tampilan admin galeri */}
        <div className="container grid lg:mt-28 mx-auto  grid-cols-1 min-[570px]:grid-cols-2  md:grid-cols-2  sm:grid-cols-2 space-x-5 lg:grid-cols-3 xl:grid-cols-4 place-items-center my-10">
          {data.map((item) => (
            <div className=" my-4 flex-col flex justify-center items-center rounded-md shadow-md pb-4">
              <div className=" shadow-lg rounded-xl">
                <img src={`${config.ipPUBLIC}/galeri/${item.gambar}`} />
              </div>

              <h1 className="text-lg">{`${item.nama_gambar}`}</h1>

              <button
                onClick={() => deleteGaleri(item && item.id)}
                className="py-1 px-6 mx-auto
                    bg-red-600 rounded-xl text-white font-bold"
              >
                Hapus
              </button>
            </div>
          ))}
        </div>
      </div>

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
                  Are you sure you want to delete this product?
                </h3>
                <button
                  data-modal-hide="popup-modal"
                  type="button"
                  onClick={() => deleteGaleri()}
                  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Yes, I'm sure
                </button>
                <button
                  onClick={() => setOpenModal(false)}
                  data-modal-hide="popup-modal"
                  type="button"
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

    //
  );
};

export default AddGaleri;
