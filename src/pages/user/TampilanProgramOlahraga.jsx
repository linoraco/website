import React, { useEffect, useState } from "react";
import Navbar from "../../components/ComponenRespon/Navbar";
import Footer from "../../components/Footer";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ReactWhatsapp from "react-whatsapp";
import Config from "../../config/config";

const TampilanProgramOlahraga = () => {
  const { id } = useParams();
  const [program, setProgram] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProgramById = async (id) => {
      try {
        const response = await axios.get(
          `${Config.ipPUBLIC}/programolahraga/${id}`
        );
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
      <Navbar />

      <div className="flex justify-center items-center">
        <h1 className="text-lg mt-20 sm:text-xl md:text-2xl lg:text-3xl text-center mx-[25%]">
          {program.nama_program_olahraga}
        </h1>
      </div>

      <hr className="mx-[10%] my-10" />

      <div className="flex justify-start items-center mx-[10%] md:mx-[15%] lg:mx-[20%] xl:mx-[20%]">
        <p className="text-xs sm:text-[16px] mt-1 w-auto text-justify text-[#888888]">
          by {program.nama_pembuat_program_olahraga}
        </p>
      </div>

      <div className="flex justify-center items-center mx-0 min-[320px]:mx-[10%] sm:mx-[10%] md:mx-[15%] lg:mx-[20%] xl:mx-[20%]">
        <img
          className="py-10 rounded-xl"
          src={`${Config.ipPUBLIC}/images/${program.gambar_program_olahraga}`}
          alt={`Poster of ${program.nama_program_olahraga}`}
        />
      </div>

      <div className="flex items-center mb-20 mx-[10%] md:mx-[15%] lg:mx-[20%] xl:mx-[20%]">
        <div className="px-4"></div>
        <div className="px-4 ">
          <ReactWhatsapp
            number="+62 85298171001"
            className="bg-[#D9D9D9] text-xs sm:text-[16px] hover:bg-green-400 hover:-translate-y-1 duration-300 sm:p-2 min-[768px]:p-3 mt-1 p-1 rounded-xl"
          >
            Kontak Kabib Olahraga (Nitje Durant.SE)
          </ReactWhatsapp>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TampilanProgramOlahraga;
