import React, { useEffect, useState } from "react";
import Navbar from "../../components/ComponenRespon/Navbar";
import Footer from "../../components/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";
import Config from "../../config/config.js";

const TampilanBeritaOlahraga = () => {
  const [beritaolahraga, setBerita] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getBeritaOlahragaById = async (id) => {
      try {
        const response = await axios.get(
          `${Config.ipPUBLIC}/beritaolahraga/${id}`
        );
        setBerita(response.data);
      } catch (error) {
        setError("Failed to fetch the sports news article.");
        console.error(error);
      }
    };

    getBeritaOlahragaById(id);
  }, [id]);

  if (error) {
    return (
      <div className="flex-col">
        <Navbar />
        <div className="flex justify-center pb-10">
          <h1 className="text-lg mt-20 sm:text-xl md:text-2xl lg:mx-56 md:mx-40 sm:mx-24 min-[320px]:mx-auto lg:text-3xl text-center">
            {error}
          </h1>
        </div>
        <Footer />
      </div>
    );
  }

  if (!beritaolahraga) {
    return (
      <div className="flex-col">
        <Navbar />
        <div className="flex justify-center pb-10">
          <h1 className="text-lg mt-20 sm:text-xl md:text-2xl lg:mx-56 md:mx-40 sm:mx-24 min-[320px]:mx-auto lg:text-3xl text-center">
            Loading...
          </h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex-col">
      {/* <!-- navbar --> */}
      <Navbar />
      {/* <!-- navbar end --> */}

      {/* <!-- Content --> */}
      <div className="flex justify-center pb-10">
        <h1 className="text-lg mt-20 sm:text-xl md:text-2xl lg:mx-56 md:mx-40 sm:mx-24 min-[320px]:mx-auto lg:text-3xl text-center">
          {beritaolahraga.judul_berita_olahraga}
        </h1>
      </div>

      <hr className="mx-[10%]" />

      <div className="mx-[10%] md:mx-[15%] lg:mx-[20%]">
        <p className="text-sm sm:text-[16px] mt-1 w-auto text-justify text-[#888888]">
          Author: {beritaolahraga.nama_pembuat_berita_olahraga}
        </p>
        <p className="text-sm sm:text-[16px] mt-1 w-auto text-justify text-[#888888]">
          {beritaolahraga.tanggal_berita_olahraga}
        </p>
        <img
          className="py-10 rounded-lg min-[319px]:mx-0 w-[1250px]"
          src={`http://217.15.171.240:4000/images/${beritaolahraga.gambar_berita_olahraga}`}
          alt={beritaolahraga?.judul_berita_olahraga}
        />
      </div>

      <div className="mx-[10%] pb-20 md:mx-[15%] lg:mx-[20%]">
        <p className="min-[320px]:text-[10px] mx-auto leading-normal sm:text-sm md:text-lg mt-1 text-justify">
          {beritaolahraga.isi_berita_olahraga}
        </p>
      </div>
      {/* <!-- content end --> */}

      {/* <!-- footer --> */}
      <Footer />
      {/* <!-- footer end --> */}
    </div>
  );
};

export default TampilanBeritaOlahraga;
