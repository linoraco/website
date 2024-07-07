import React, { useState, useEffect } from "react";
import Header from "../Header";
import Grup4 from "../../assets/img/Group 4.png";
import Grup5 from "../../assets/img/Group 5.png";
import { Link } from "react-router-dom";
import axios from "axios";
import config from "../../config/config.js";

const AddProgram = () => {
  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [uuidProgram, setUuidProgram] = useState(0);

  const getProgram = async () => {
    try {
      const response = await axios.get(`${config.ipPUBLIC}/program`);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.data);
    }
  };

  const deleteProgram = async (id) => {
    try {
      const response = await axios.delete(`${config.ipPUBLIC}/program/${id}`);
      getProgram();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const setUuid = (id) => {
    setOpenModal(true);
    setUuidProgram(id);
    console.log(id);
  };

  useEffect(() => {
    getProgram();
  }, []);

  return (
    <div className="flex-col ">
      {/* <!-- navbar --> */}
      <Header />
      {/* <!-- navbar END --> */}
      <div className="w-[80px]">
        <Link
          to={"/home-admin-kadis"}
          className="flex items-start justify-center bg-red-500 w-[80px] p-3 rounded-br-xl"
        >
          Beranda
        </Link>
      </div>

      <div className="">
        <h1 className="text-lg mt-20 sm:text-xl md:text-2xl  lg:text-3xl text-center">
          Program Bidang Kepemudaan
        </h1>
        <button className="py-2 lg:p-3 mx-10   px-2 my-10 rounded-md text-xs bg-green-500">
          <Link
            className="text-[13px] lg:text-[17px] sm:text-[15px] md:text-[16px]"
            to={"/form-addprogram-kadis"}
          >
            <span>+</span>Tambah Program
          </Link>
        </button>
      </div>

      {/* tampilan program admin */}
      <div className="container mx-auto grid lg:mt-28  grid-cols-1 min-[570px]:grid-cols-2  md:grid-cols-2  sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 place-items-center my-10">
        {data.map((item) => (
          <div className=" card w-[200px] h-[280px] min-[360px]:w-[250px] min-[360px]:h-[300px]  xl:w-[350px] xl:h-[500px] lg:w-[300px] lg:h-[450px] md:w-72 md:h-[380px] sm:w-64 sm:h-[330px] bg-base-100 shadow-xl my-4">
            <figure>
              <img className="" src={item.URL} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title  text-center flex-col text-[13px] lg:text-[17px] sm:text-[15px] md:text-[16px]">
                {item.nama_program}
              </h2>
              {/* <p>{item.isi_berita.slice(0, 100)}....</p> */}
              <div className="flex h-[17px] justify-end">
                <Link
                  to={`/add-program-kadis/edit-program-kadis/${item.id}`}
                  className="
                     rounded-xl font-bold mr-2"
                >
                  <img
                    className="h-[20px] sm:h-[25px] lg:h-[30px]"
                    src={Grup4}
                    alt=""
                  />
                </Link>
                <button
                  onClick={(e) => deleteProgram(item.uuid)}
                  className="
                    bg-red-600 rounded-xl font-bold"
                >
                  <img
                    className="h-[20px] sm:h-[25px] lg:h-[30px]"
                    src={Grup5}
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
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
                  onClick={() => deleteProgram()}
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
    </div>
  );
};

export default AddProgram;
