import React, { useEffect, useState } from "react";
import Dispora1 from "../../assets/img/Dispora 1.png";
import Grup2 from "../../assets/img/Group 2.png";
import Grup3 from "../../assets/img/Group 3.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../../config/config.js";

const FormAddForum = () => {
  const [title, setTitle] = useState([]);
  const [file, setFile] = useState([]);
  const [kontak, setKontak] = useState([]);
  const [admin, setAdmin] = useState([]);
  const [preview, setPreview] = useState("");
  const [msg, setMsg] = useState("");
  const [kategori, setKategori] = useState("");

  const [openModal, setOpenModal] = useState(false);
  let navigate = useNavigate();

  const loadImage = async (e) => {
    const gambar_program = e.target.files[0];
    setFile(gambar_program);
    setPreview(URL.createObjectURL(gambar_program));
  };

  const createForum = async (e) => {
    e.preventDefault();

    if (!file) {
      setMsg("Pilih file terlebih dahulu");
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    formData.append("nama_forum", title);
    formData.append("nama_pembuat_forum", admin);
    formData.append("kategori", kategori);

    try {
      await axios.post(`${config.ipPUBLIC}/forum`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setTimeout(() => {
        setOpenModal(false);
      }, 1000);
      setOpenModal(true);
      navigate("/add-forum/olahraga");
    } catch (error) {
      console.log(error.message);
    }
  };

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
      {/* <!-- navbar end -->  */}
      <div className="flex justify-between">
        <Link to={"/add-forum/olahraga"}>
          <p
            className="py-4 px-6
           bg-red-600 rounded-tr-xl rounded-br-xl font-bold"
          >
            BACK
          </p>
        </Link>
        <Link to={"/home-admin-kadis"}>
          <p
            className="py-4 px-6
           bg-red-600 rounded-tl-xl rounded-bl-xl font-bold"
          >
            HOME
          </p>
        </Link>
      </div>

      <div className="mx-40">
        <h1 className="text-4xl py-10">Forum </h1>
      </div>

      {/* form prgram star */}
      <form onSubmit={createForum} className="flex flex-col mx-40">
        <label className="p-2 text-2xl" for="">
          Gambar Forum
        </label>
        <input
          onChange={loadImage}
          className="mt-4"
          type="file"
          name=""
          id=""
        />

        {preview ? (
          <figure className="img h-[128px] w-[128px]">
            <img src={preview} alt="Preview img" />
          </figure>
        ) : (
          ""
        )}

        <label className="mt-4 text-2xl" for="">
          Topik forum
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-2 border-black h-12 rounded-xl my-4"
          type="text"
        />
        <label className="mt-4 text-2xl" for="">
          Nama pembuat admin
        </label>
        <input
          value={admin}
          onChange={(e) => setAdmin(e.target.value)}
          className="border-2 border-black h-12 rounded-xl my-4"
          type="text"
        />
        <div className="flex flex-col justify-center  items-center">
          <label className="mt-4 text-2xl">Pilih Kategori</label>
          <select
            className="py-2 px-4  mt-4 text-white rounded-md bg-red-500 "
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
            id=""
          >
            <option value="pemuda">Pemuda</option>
            <option value="olahraga">Olahraga</option>
          </select>
        </div>

        <button
          type="submit"
          value=""
          className="flex justify-center bg-green-500 py-3 mx-96 rounded-xl my-10"
        >
          SIMPAN
          <input type="submit" value="" />
        </button>
      </form>
      {/* Popup Massage */}
      <div>
        <div
          id="popup-modal"
          tabIndex="-1"
          className={`${
            openModal ? "flex" : "hidden"
          } fixed top-0 left-0 right-0 z-50 justify-center items-center  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
        >
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow">
              <div className="p-6 text-center">
                <h3 className="text-lg font-normal text-gray-500 dark:text-gray-400">
                  Program Olahraga Berhasil Ditambahkan
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddForum;
