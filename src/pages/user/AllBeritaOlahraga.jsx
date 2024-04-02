import React, { useState, useEffect } from "react";
import Navbar from "../../components/ComponenRespon/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/Footer";
import Beritaolahraga from "../../helper/beritaolahraga.json";

const AllBeritaOlahraga = () => {
  const [data, setData] = useState([]);

  const getBeritaOlahraga = async () => {
    try {
      const response = await axios.get("http://localhost:4000/beritaolahraga");
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.data);
    }
  };
  useEffect(() => {
    getBeritaOlahraga();
  }, []);
  return (
    <>
      <div className="flex-col ">
        {/* <!-- navbar --> */}
        <Navbar />
        {/* <!-- navbar end --> */}

        {/* <!-- Content --> */}
        <div className="container mx-auto grid lg:mt-28  grid-cols-1 min-[570px]:grid-cols-2  md:grid-cols-2  sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 place-items-center my-10">
          {data.map((item) => (
            <Link
              to={`/tampilan-berita-olahraga/${item.id}`}
              className="card w-[200px] h-[280px] min-[360px]:w-[250px] min-[360px]:h-[300px]  xl:w-[350px] xl:h-[500px] lg:w-[300px] lg:h-[450px] md:w-72 md:h-[380px] sm:w-64 sm:h-[330px] bg-base-100 shadow-xl my-4"
            >
              <figure>
                <img className="" src={item.URL} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-center flex-col text-[13px] lg:text-[17px] sm:text-[15px] md:text-[16px]">
                  {item.judul_berita_olahraga}
                  <div className="badge badge-secondary text-center text-[10px] lg:text-[13px] sm:text-[13px] md:text-[13px] xl:text-[15px]">
                    {item.tanggal_berita_olahraga}
                  </div>
                </h2>
                <p className="text-[11px] md:text-[13px] lg:text-[15]  xl:text-[15px] text-justify">
                  {item.isi_berita_olahraga.slice(0, 30)}....
                </p>
                <div className="card-actions justify-end"></div>
              </div>
            </Link>
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

export default AllBeritaOlahraga;
