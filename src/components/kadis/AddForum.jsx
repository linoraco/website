import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Dispora1 from "../../assets/img/Dispora 1.png";
import Grup2 from "../../assets/img/Group 2.png";
import Grup3 from "../../assets/img/Group 3.png";
import Grup4 from "../../assets/img/Group 4.png";
import Grup5 from "../../assets/img/Group 5.png";
import axios from "axios";
import config from "../../config/config.js";

const AddForumOlahraga = () => {
  const [forums, setForum] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getForumOlahraga(id);
  }, [id]);
  const getForumOlahraga = async (id) => {
    try {
      const response = await axios.get(
        `${config.ipPUBLIC}/forum/kategori/${id}`
      );
      setForum(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.data);
    }
  };

  console.log(forums);

  // Handle ketika data bernilai null atau undefined
  // if (!forums) {
  //   return <p>Loading...</p>;
  // }

  return (
    <div className="flex-col w-[1440px] max-h-full">
      {/* <!-- navbar --> */}
      <div className="flex w-[1440px] h-24 justify-between border-b-2 border-b-red-800">
        <div className="flex">
          <img className="w-72 h-20" src={Dispora1} alt="" />
        </div>

        <div className="flex items-center mr-6">
          <img className="h-20" src={Grup2} alt="" />
        </div>
      </div>

      <div>
        <Link to={"/home-admin-kadis"}>
          <img className="h-14" src={Grup3} alt="" />
        </Link>
      </div>

      <div className="mx-40">
        <h1 className="text-4xl py-10">Forum Topik </h1>
        <button className="px-10 py-3 my-10 rounded-xl text-xl bg-green-500">
          <Link to={"/form-add-forum"}>
            <span>+</span>Tambah Topik Forum
          </Link>
        </button>
      </div>

      {/* tampilan program admin */}
      <div className="grid grid-rows-2  py-10">
        {forums.map((item) => (
          <div className="h-80 mx-40 mb-24 flex items-center">
            <img className="h-80  rounded-xl" src={item.URL} alt="" />

            <div className="p-5 flex flex-col items-center w-[400px] h-80 bg-[#D9D9D9] rounded-xl">
              <h1 className="font-semibold text-xl py-2 text-center">
                Topik Forum : {item.nama_forum}
              </h1>
              <h1 className="font-semibold text-xl py-2 text-center">
                Nama pembuat forum : {item.nama_pembuat_forum}
              </h1>

              <div className="flex justify-end">
                <Link
                  to={`/add-program-olahraga/edit-program-olahraga/${item.id}`}
                  className="p-4"
                >
                  <img className="h-10" src={Grup4} alt="" />
                </Link>
                <button
                  //   onClick={() => deleteProgram(item.uuid)}
                  className="p-4"
                >
                  <img className="h-10" src={Grup5} alt="" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* MODAL */}
      {/* <div>
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
      </div> */}
    </div>
  );
};

export default AddForumOlahraga;
