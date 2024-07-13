import React, { useEffect, useState } from "react";
import Navbar from "../../components/ComponenRespon/Navbar";
import Footer from "../../components/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReactWhatsapp from "react-whatsapp";
import Config from "../../config/config.js";

const TampilanProgram = () => {
  const [program, setProgram] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getProgramById = async (id) => {
      try {
        const response = await axios.get(`${Config.ipPUBLIC}/program/${id}`);
        setProgram(response.data);
      } catch (error) {
        setError("Failed to fetch the program details.");
        console.error(error);
      }
    };

    getProgramById(id);
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

  if (!program) {
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
      <div className="flex justify-center items-center">
        <h1 className="text-lg mt-20 sm:text-xl md:text-2xl lg:text-3xl text-center">
          {program.nama_program}
        </h1>
      </div>

      <hr className="mx-[10%] my-10" />

      {/* <!-- poster --> */}
      <div className="flex justify-start items-center mx-[10%] md:mx-[15%] lg:mx-[20%] xl:mx-[20%]">
        <p className="text-xs sm:text-[16px] mt-1 w-auto text-justify text-[#888888]">
          by {program.nama_pembuat_program}
        </p>
      </div>

      <div className="flex justify-center items-center mx-0 min-[320px]:mx-[10%] sm:mx-[10%] md:mx-[15%] lg:mx-[20%] xl:mx-[20%]">
        <img
          className="py-10 rounded-xl"
          src={`${Config.ipPUBLIC}/images/${program.gambar_program}`}
          alt={program.nama_program}
        />
      </div>

      <div className="flex items-center mb-20 mx-[10%] md:mx-[15%] lg:mx-[20%] xl:mx-[20%]">
        <div className="px-4">
          <ReactWhatsapp
            number="+62 82348135155"
            className="bg-[#D9D9D9] text-xs sm:text-[16px] sm:p-2 min-[768px]:p-3 mt-1 p-1 rounded-xl"
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

export default TampilanProgram;
