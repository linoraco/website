import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Navbar from "../../components/ComponenRespon/Navbar";
import Footer from "../../components/Footer";
import Config from "../../config/config.js";

const AllBerita = () => {
  const [data, setData] = useState([]);

  const getBerita = async () => {
    try {
      const response = await axios.get(`${Config.ipPUBLIC}/berita`);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBerita();
  }, []);

  return (
    <div className="flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="container mx-auto grid lg:mt-28 grid-cols-1 min-[570px]:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 place-items-center my-10">
        {data.map((item) => (
          <Link
            to={`/tampilan-berita/${item.id}`}
            key={item.id}
            className="card w-[200px] h-[280px] min-[360px]:w-[250px] min-[360px]:h-[300px] xl:w-[350px] xl:h-[500px] lg:w-[300px] lg:h-[450px] md:w-72 md:h-[380px] sm:w-64 sm:h-[330px] bg-base-100 shadow-xl my-4"
          >
            <figure>
              <img
                src={`${Config.ipPUBLIC}/images/${item.gambar}`}
                alt="Berita"
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-center flex-col text-[13px] lg:text-[17px] sm:text-[15px] md:text-[16px]">
                {item.judul_berita}
                <div className="badge badge-secondary text-center text-[10px] lg:text-[13px] sm:text-[13px] md:text-[13px] xl:text-[15px]">
                  {item.tanggal_berita}
                </div>
              </h2>
              <p className="text-[11px] md:text-[13px] lg:text-[15px] xl:text-[15px] text-justify">
                {item.isi_berita.slice(0, 35)}...
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AllBerita;
