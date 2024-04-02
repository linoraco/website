import React, { useState, useEffect } from "react";
import Navbar from "../../components/ComponenRespon/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/Footer";
import Galeri from "../../helper/galeri.json";

const AllGaleri = () => {
  const [galeri, setGaleri] = useState([]);

  const getGaleri = async () => {
    try {
      const response = await axios.get("http://localhost:4000/galeri");
      setGaleri(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.galeri);
    }
  };
  useEffect(() => {
    getGaleri();
  }, []);

  return (
    <>
      <div className="flex-col ">
        {/* <!-- navbar --> */}
        <Navbar />
        {/* <!-- navbar end --> */}

        {/* <!-- Content --> */}
        <div className="container mx-auto grid lg:mt-28  grid-cols-1 min-[570px]:grid-cols-2  md:grid-cols-2  sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 place-items-center my-10">
          {galeri &&
            galeri.map((galeris) => (
              <div className="avatar my-4">
                <div className="w-[200px]  min-[360px]:w-[250px]   xl:w-[350px]  lg:w-[300px]  md:w-72  sm:w-64 shadow-lg rounded-xl">
                  <img src={galeris && galeris.URL} />
                </div>
              </div>
            ))}
        </div>
        <br />
        <br />
        <br />
        {/* <!-- footer --> */}
        <Footer />
        {/* <!-- footer end --> */}
      </div>
    </>

    //
  );
};

export default AllGaleri;
