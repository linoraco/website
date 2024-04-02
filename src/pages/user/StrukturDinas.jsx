import React from "react";
import Navbar from "../../components/ComponenRespon/Navbar";
import Footer from "../../components/Footer";
import Bgdispora from "../../assets/img/bgdisporanewjpg.jpg";
import StrukturFoto from "../../assets/img/STRUKTUR DINAS.png";

const StrukturDinas = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Bgdispora})` }}
      className="flex-col bg-auto bg-center bg-fixed "
    >
      {/* <!-- navbar --> */}
      <Navbar />
      {/* <!-- navbar end --> */}

      {/* <!-- content --> */}
      <div className="flex-col   pt-28 ">
        <h1 className="text-3xl max-md:text-xl text-white text-center font-bold">
          Struktur Organisasi
        </h1>
        <hr className=" " />
        <div className=" lg:mx-[10%] md:mx-[8%] xl:mx-[15%] mb-20  mt-20 py-10  bg-white rounded-xl ">
          <img src={StrukturFoto} alt="" />
          <div className="mx-[10%]">
            <p className="text-sm sm:text-lg  lg:text-xl">Keterangan : </p>
            <p className="mt-2 text-sm sm:text-lg  lg:text-xl">
              Fungsional Bidang Pemuda :
            </p>
            <p className="text-xs sm:text-sm  md:text-md lg:text-lg">
              1. Fungsionaris Kepemimpinan dan Kepeloporan, Kemitraan dan
              Kewirausahaan Pemuda (FK4) Fungsional
            </p>
            <p className="text-xs sm:text-sm  md:text-md lg:text-lg">
              2. Fungsionaris Peningkatan Wawasan,Kapasitas dan Kreatifitas
              Pemuda (FWK2P)
            </p>
            <p className="text-xs sm:text-sm  md:text-md lg:text-lg">
              3. Fungsionaris Organisasi Kepemudaan, Kepramukaan, dan
              Standarisasi Pemuda (FOK2SP)
            </p>
            <p className="mt-2 text-sm sm:text-lg  lg:text-xl">
              Bidang Olahraga :{" "}
            </p>
            <p className="text-xs sm:text-sm  md:text-md lg:text-lg">
              1. Fungsionaris Olahraga Pendidikan dan Sentra Olahraga (FOPSO){" "}
            </p>
            <p className="text-xs sm:text-sm  md:text-md lg:text-lg">
              2. Fungsionaris Olahraga Rekreasi Masyarakat dan Layanan Khusus
              (FORMLK){" "}
            </p>
            <p className="text-xs sm:text-sm  md:text-md lg:text-lg">
              3. Fungsionaris Kemitraan dan Penghargaan Olahraga (FKPO)
            </p>
          </div>
        </div>
      </div>

      {/* <!-- footer --> */}
      <Footer />
      {/* <!-- footer end --> */}
    </div>
  );
};

export default StrukturDinas;
