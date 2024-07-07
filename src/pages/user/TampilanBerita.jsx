import React, { useEffect, useState } from "react";
import Navbar from "../../components/ComponenRespon/Navbar";
import Footer from "../../components/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";
import Beritapemuda from "../../helper/beritapemuda.json";
import Config from "../../config/config";

const TampilanBerita = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [beritas, setBerita] = useState([]);

  const getBerita = async () => {
    try {
      const response = await axios.get(`${Config.ipPUBLIC}/berita`);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.data);
    }
  };

  useEffect(() => {
    getBeritaById(id);
  }, [id]);

  const getBeritaById = async (id) => {
    try {
      const response = await axios.get(`${Config.ipPUBLIC}/berita/${id}`);
      setBerita(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("berita", beritas);

  useEffect(() => {
    getBerita();
  }, []);
  return (
    <div className="flex-col ">
      {/* <!-- navbar --> */}
      <Navbar />
      {/* <!-- navbar end --> */}
      {/* <!-- Content --> */}
      <div className="flex justify-center pb-10">
        <h1 className="text-lg mt-20 sm:text-xl md:text-2xl lg:mx-56 md:mx-40 sm:mx-24 min-[320px]:mx-auto lg:text-3xl text-center">
          {" "}
          {beritas && beritas.judul_berita}
        </h1>
      </div>
      ;
      <hr className="mx-[10%]" />
      <div className=" mx-[10%] md:mx-[15%] lg:mx-[20%]  ">
        <p className="text-xs sm:text-[16px]   mt-1 w-auto text-justify text-[#888888]">
          Author : {beritas && beritas.nama_pembuat_berita}
        </p>
        <p className="text-sm sm:text-[16px]  mt-1 w-auto text-justify text-[#888888]  ">
          {" "}
          {beritas && beritas.tanggal_berita}
        </p>
        <img
          className="py-10 rounded-xl min-[319px]:mx-0 w-[1250px] "
          src={`${Config.ipPUBLIC}${beritas && beritas.gambar}`}
          alt=""
        />
      </div>
      <div className="mx-[10%] pb-20 md:mx-[15%] lg:mx-[20%]   ">
        <p className="min-[320px]:text-[10px] mx-auto leading-normal  sm:text-sm  md:text-lg   mt-1 text-justify">
          {" "}
          {beritas && beritas.isi_berita}
        </p>
      </div>
      {/* <!-- content end --> */}
      {/* <!-- footer --> */}
      <Footer />
      {/* <!-- footer end --> */}
    </div>
  );
};

export default TampilanBerita;
