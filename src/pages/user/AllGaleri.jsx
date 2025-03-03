import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Navbar from "../../components/ComponenRespon/Navbar";
import Footer from "../../components/Footer";
import config from "../../config/config";

const AllGaleri = () => {
  const [galeri, setGaleri] = useState([]);

  const getGaleri = async () => {
    try {
      const response = await axios.get(`${config.ipPUBLIC}/galeri`);
      setGaleri(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getGaleri();
  }, []);

  return (
    <div className="flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="container mx-auto grid lg:mt-28 grid-cols-1 min-[570px]:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 place-items-center my-10">
        {galeri.map((galeriItem) => (
          <div
            key={galeriItem.id}
            className="avatar my-4 flex-col items-center"
          >
            <div className="w-[200px] min-[360px]:w-[250px] xl:w-[350px] lg:w-[300px] md:w-72 sm:w-64 shadow-lg rounded-xl">
              <img
                src={`${config.ipPUBLIC}/galeri/${galeriItem.gambar}`}
                alt={galeriItem.judul}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="my-3 text-md font-semibold">
              {galeriItem.nama_gambar}
            </h1>
          </div>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AllGaleri;
