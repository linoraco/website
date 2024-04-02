import React, { useState, useEffect } from "react";
import Navbar from "../../components/ComponenRespon/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/Footer";
import Program from "../../helper/program.json";
import Foto from "../../assets/img/foto2.jpeg";

const AllProgram = () => {
  const [data, setData] = useState([]);
  const getProgram = async () => {
    try {
      const response = await axios.get("http://localhost:4000/program");
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.data);
    }
  };
  useEffect(() => {
    getProgram();
  }, []);
  return (
    <>
      <div className="flex-col ">
        {/* <!-- navbar --> */}
        <Navbar />
        {/* <!-- navbar end --> */}

        {/* <!-- Content --> */}
        <div className="">
          <div className="container mx-auto grid lg:mt-28  grid-cols-1 min-[570px]:grid-cols-2  md:grid-cols-2  sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 place-items-center my-10">
            {data.map((item) => (
              <Link
                to={`/tampilan-program/${item.id}`}
                className=" card w-[200px] h-[280px] min-[360px]:w-[250px] min-[360px]:h-[300px]  xl:w-[350px] xl:h-[500px] lg:w-[300px] lg:h-[450px] md:w-72 md:h-[380px] sm:w-64 sm:h-[330px] bg-base-100 shadow-xl my-4"
              >
                <figure>
                  <img className="" src={item.URL} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title  text-center flex-col text-[13px] lg:text-[17px] sm:text-[15px] md:text-[16px]">
                    {item.nama_program}
                  </h2>
                  {/* <p>{item.isi_berita.slice(0, 100)}....</p> */}
                </div>
              </Link>
            ))}
          </div>
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

export default AllProgram;
