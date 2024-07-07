import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../Header";
import config from "../../config/config.js";

const TampilanBeritaOlahragaKadis = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const [beritas, setBerita] = useState([]);

  const getBeritaOlahraga = async () => {
    try {
      const response = await axios.get(`${config.ipPUBLIC}/beritaolahraga`);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.data);
    }
  };

  useEffect(() => {
    getBeritaOlahragaById(id);
  }, [id]);

  const getBeritaOlahragaById = async (id) => {
    try {
      const response = await axios.get(
        `${config.ipPUBLIC}/beritaolahraga/${id}`
      );
      setBerita(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBeritaOlahraga = async (id) => {
    try {
      const response = await axios.delete(
        `${config.ipPUBLIC}/beritaolahraga/${id}`
      );
      getBeritaOlahragaById();
      navigate("/add-berita-olahraga-kadis");
    } catch (error) {
      console.log(error);
    }
  };

  console.log("berita_olahraga", beritas);

  useEffect(() => {
    getBeritaOlahraga();
  }, []);
  return (
    <div className="flex-col ">
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
      {/* <!-- Content --> */}

      <div className="flex pb-10 justify-center ">
        <h1 className="text-lg mt-20 sm:text-xl md:text-2xl  lg:text-3xl text-center">
          {" "}
          {beritas && beritas.judul_berita_olahraga}
        </h1>
      </div>

      <hr className="mx-[10%]" />

      <div className=" mx-[10%] md:mx-[15%] lg:mx-[20%]  ">
        <p className="text-sm sm:text-[16px]   mt-1 w-auto text-justify text-[#888888]">
          by {beritas && beritas.nama_pembuat_berita_olahraga}
        </p>
        <p className="text-sm sm:text-[16px]  mt-1 w-auto text-justify text-[#888888]  ">
          {" "}
          {beritas && beritas.tanggal_berita_olahraga}
        </p>
        <img
          className="py-10 rounded-lg min-[319px]:mx-0 "
          src={`${config.ipPUBLIC}${beritas && beritas.gambar_berita_olahraga}`}
          alt=""
        />
        <p className="min-[320px]:text-[10px] mx-auto leading-normal  sm:text-sm  md:text-lg   mt-1 text-justify">
          {" "}
          {beritas && beritas.isi_berita_olahraga}
        </p>
      </div>

      {/* <!-- content end --> */}
    </div>
  );
};

export default TampilanBeritaOlahragaKadis;
