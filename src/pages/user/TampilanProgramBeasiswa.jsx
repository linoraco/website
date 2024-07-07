import React, { useEffect, useState } from "react";
import Navbar from "../../components/ComponenRespon/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReactWhatsapp from "react-whatsapp";
import Foto from "../../assets/img/brosurBeasiswa2024.jpg";
import Config from "../../config/config.js";

const TampilanProgramBeasiswa = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [program, setProgram] = useState([]);

  const getProgram = async () => {
    try {
      const response = await axios.get(`${Config.ipPUBLIC}/program`);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.data);
    }
  };

  useEffect(() => {
    getProgramById(id);
  }, [id]);

  const getProgramById = async (id) => {
    try {
      const response = await axios.get(`${Config.ipPUBLIC}/program/${id}`);
      setProgram(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("program_pemuda", program);

  useEffect(() => {
    getProgram();
  }, []);
  return (
    <div className="flex-col ">
      {/* <!-- navbar --> */}
      <Navbar />
      {/* <!-- navbar end --> */}

      {/* <!-- Content --> */}
      <div className="flex justify-center items-center">
        <h1 className="text-lg mt-20 sm:text-xl md:text-2xl  lg:text-3xl text-center ">
          Program Beasiswa
        </h1>
      </div>

      <hr className="mx-[10%] my-10" />

      {/* <!-- poster --> */}

      <div className=" flex justify-center items-center mx-0 min-[320px]:mx-[10%] sm:mx-[10%]  md:mx-[15%] lg:mx-[20%] xl:mx-[20%]">
        <img className="  py-10 rounded-xl " src={Foto} alt="" />
      </div>

      <div className="flex items-center mb-20 mx-[10%] md:mx-[15%] lg:mx-[20%] xl:mx-[20%] ">
        <div className="px-4">
          <Link
            to={"/form-beasiswa"}
            className="bg-[#D9D9D9] text-xs sm:text-[16px] sm:p-2 min-[768px]:p-3  mt-1 p-1 rounded-xl"
          >
            Daftar Sekarang
          </Link>
        </div>
        <div className="px-4">
          <ReactWhatsapp
            number="+62 82348135155"
            className="bg-[#D9D9D9]   text-xs sm:text-[16px]  sm:p-2 min-[768px]:p-3  mt-1 p-1 rounded-xl"
          >
            Kontak Kami
          </ReactWhatsapp>
        </div>
      </div>
      {/* <!-- content end --> */}

      {/* <!-- footer --> */}
      <Footer />
      {/* <!-- footer end --> */}
    </div>
  );
};

export default TampilanProgramBeasiswa;
