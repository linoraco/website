import React, { useState, useEffect } from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditBeritaOlahraga = () => {
  const [judul_berita_olahraga, setJudulBerita] = useState([]);
  const [nama_pembuat_berita_olahraga, setNamapembuatberita] = useState([]);
  const [isi_berita_olahraga, setIsiBerita] = useState([]);
  const [tanggal_berita_olahraga, setTanggalBerita] = useState([]);
  const [file, setFile] = useState([]);
  const [msg, setMsg] = useState("");
  const [preview, setPreview] = useState("");
  const { id } = useParams();
  const [beritas, setBerita] = useState([]);

  useEffect(() => {
    getBeritaOlahragaById(id);
  }, [id]);

  const getBeritaOlahragaById = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/beritaolahraga/${id}`
      );
      setJudulBerita(response.data.judul_berita_olahraga);
      setNamapembuatberita(response.data.nama_pembuat_berita_olahraga);
      setIsiBerita(response.data.isi_berita_olahraga);
      setTanggalBerita(response.data.tanggal_berita_olahraga);
      setFile(response.data.gambar_berita_olahraga);
      setPreview(response.data.URL);
    } catch (error) {
      console.log(error);
    }
  };

  const [openModal, setOpenModal] = useState(false);
  let navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const updateBeritaOlahraga = async (e) => {
    e.preventDefault();

    if (!file) {
      setMsg("Pilih file terlebih dahulu");
      return;
    }

    const formData = new FormData();
    formData.append("judul_berita_olahraga", judul_berita_olahraga);
    formData.append(
      "nama_pembuat_berita_olahraga",
      nama_pembuat_berita_olahraga
    );
    formData.append("isi_berita_olahraga", isi_berita_olahraga);
    formData.append("tanggal_berita_olahraga", tanggal_berita_olahraga);
    formData.append("file", file);
    try {
      await axios.patch(
        `http://localhost:4000/beritaolahraga/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate("/add-berita-olahraga-kadis");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex-col">
      {/* <!-- navbar --> */}
      <Header />
      {/* <!-- navbar end --> */}
      <div className="flex justify-between">
        <Link to={"/add-berita-olahraga-kadis"}>
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
          Berita dan Pengumuman Bidang Olahraga
        </h1>
      </div>
      {/* from start */}
      <form
        onSubmit={updateBeritaOlahraga}
        className="flex flex-col mx-[5%] sm:mx-[10%] md:mx-[15%]  lg:mx-[20%] mt-10 "
      >
        <label className="p-2  text-md sm:text-md md:text-lg lg:text-xl" for="">
          Gambar Utama Berita
        </label>
        <input
          onChange={loadImage}
          className="mt-4"
          type="file"
          name=""
          id=""
        />
        {preview && (
          <figure>
            <img src={preview} alt="" />
          </figure>
        )}
        <label
          className=" mt-10 text-md sm:text-md md:text-lg lg:text-xl"
          for=""
        >
          Nama Pembuat Berita
        </label>
        <input
          value={nama_pembuat_berita_olahraga}
          onChange={(e) => setNamapembuatberita(e.target.value)}
          className="border-2 p-1 border-black rounded-xl my-4 text-xs sm:text-sm md:text-md lg:text-lg"
          type="text"
          name=""
          id=""
        />
        <label className="  text-md sm:text-md md:text-lg lg:text-xl" for="">
          Tanggal Berita
        </label>
        <input
          value={tanggal_berita_olahraga}
          onChange={(e) => setTanggalBerita(e.target.value)}
          className="border-2 p-1 border-black rounded-xl my-4 text-xs sm:text-sm md:text-md lg:text-lg"
          type="text"
          name=""
          id=""
        />
        <label
          className="mt-4  text-md sm:text-md md:text-lg lg:text-xl"
          for=""
        >
          Judul
        </label>
        <textarea
          value={judul_berita_olahraga}
          onChange={(e) => setJudulBerita(e.target.value)}
          className="border-2 p-1 h-24 border-black  rounded-xl my-4 text-xs sm:text-sm md:text-md lg:text-lg"
          type="text"
        />
        <label className=" text-md sm:text-md md:text-lg lg:text-xl" for="">
          Isi Berita
        </label>
        <textarea
          value={isi_berita_olahraga}
          onChange={(e) => setIsiBerita(e.target.value)}
          className="border-2 p-1 h-56  border-black rounded-xl my-4 text-xs sm:text-sm md:text-md lg:text-lg"
          type="text"
        />

        <button
          type="submit"
          value=""
          className="flex justify-center bg-green-500 py-3  rounded-xl my-10"
        >
          UBAH
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
                  Berita Berhasil Diupdate
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBeritaOlahraga;
