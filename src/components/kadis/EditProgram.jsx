import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../Header";

const EditProgram = () => {
  const [nama_program, setNamaprogram] = useState([]);
  const [file, setFile] = useState([]);
  const [kontak_admin_program, setKontak] = useState([]);
  const [nama_pembuat_program, setAdmin] = useState([]);
  const [preview, setPreview] = useState("");
  const [msg, setMsg] = useState("");
  const { id } = useParams();

  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getProgramById(id);
  }, [id]);

  const getProgramById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:4000/program/${id}`);
      setNamaprogram(response.data.nama_program);
      setKontak(response.data.kontak_admin_program);
      setAdmin(response.data.nama_pembuat_program);
      setFile(response.data.gambar_program);
      setPreview(response.data.URL);
    } catch (error) {
      console.log(error);
    }
  };

  const loadImage = async (e) => {
    const gambar = e.target.files[0];
    setFile(gambar);
    setPreview(URL.createObjectURL(gambar));
  };

  const updateProgram = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nama_program", nama_program);
    formData.append("nama_pembuat_program", nama_pembuat_program);
    formData.append("kontak_admin_program", kontak_admin_program);
    formData.append("file", file);
    try {
      await axios.patch(`http://localhost:4000/program/${id}`, formData);
      navigate("/add-program-kadis");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex-col ">
      {/* <!-- navbar --> */}
      <Header />
      {/* <!-- navbar end -->  */}
      <div className="flex justify-between">
        <Link to={"/add-program-kadis"}>
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

      <div className="mx-auto">
        <h1 className="text-lg mt-20 sm:text-xl md:text-2xl  lg:text-3xl text-center">
          Program
        </h1>
      </div>

      {/* form prgram star */}
      <form
        onSubmit={updateProgram}
        className="flex flex-col mx-[5%] sm:mx-[10%] md:mx-[15%]  lg:mx-[20%] mt-10 "
      >
        <label className="p-2  text-md sm:text-md md:text-lg lg:text-xl" for="">
          Logo Program
        </label>
        <input
          onChange={loadImage}
          className="mt-4"
          type="file"
          name=""
          id=""
        />

        {preview ? (
          <figure className="img ">
            <img src={preview} alt="Preview img" />
          </figure>
        ) : (
          ""
        )}

        <label className="mt-4 text-md sm:text-md md:text-lg lg:text-xl" for="">
          Judul
        </label>
        <textarea
          value={nama_program}
          onChange={(e) => setNamaprogram(e.target.value)}
          className="border-2 border-black p-1 h-24 rounded-xl my-4 text-xs sm:text-sm md:text-md lg:text-lg"
          type="text"
        />

        <label
          className="mt-10 text-md sm:text-md md:text-lg lg:text-xl"
          for=""
        >
          Nama Pembuat Berita Pemuda
        </label>
        <input
          value={nama_pembuat_program}
          onChange={(e) => setAdmin(e.target.value)}
          className="border-2 p-1 border-black  rounded-xl my-4 text-xs sm:text-sm md:text-md lg:text-lg"
          type="text"
          name=""
          id=""
        />

        <label
          className="mt-10 text-md sm:text-md md:text-lg lg:text-xl"
          for=""
        >
          Kontak Admin
        </label>
        <input
          value={kontak_admin_program}
          onChange={(e) => setKontak(e.target.value)}
          className="border-2 p-1 border-black  rounded-xl my-4 text-xs sm:text-sm md:text-md lg:text-lg"
          type="text"
          name=""
          id=""
          placeholder="Contoh: https://wa.me/082348135155"
        />
        <button
          type="submit"
          value=""
          className="flex justify-center bg-green-500 py-3  rounded-xl my-10"
        >
          Update
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
                  Program Berhasil Update
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProgram;
