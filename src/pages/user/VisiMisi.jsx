import React from "react";
import Navbar from "../../components/ComponenRespon/Navbar";
import Footer from "../../components/Footer";
import Bgdispora from "../../assets/img/bgdisporanewjpg.jpg";

const VisiMisi = () => {
  return (
    <div className="flex-col">
      {/* <!-- navbar --> */}
      <Navbar />
      {/* <!-- navbar end --> */}

      {/* <!-- content --> */}
      <div
        style={{ backgroundImage: `url(${Bgdispora})` }}
        className="flex justify-center items-center bg-auto bg-center bg-fixed py-24 mb-3"
      >
        <h1 className="text-3xl max-md:text-xl text-white text-center font-bold">
          Visi dan Misi
        </h1>
      </div>

      <hr className="mx-20 mt-4" />

      {/* <!-- Visi misi --> */}
      <div className="">
        <div className="mx-[10%] md:mx-[15%] lg:mx-[20%] xl:mx-[25%]">
          <h1 className="text-sm sm:text-lg  lg:text-2xl mt-1 w-auto text-justify font-semibold">
            Visi
          </h1>
          <p className="text-xs sm:text-sm  md:text-md lg:text-lg mt-1 text-justify">
            Visi Dinas Pemuda dan Olahraga Kabupaten Minahasa Selatan adalah:{" "}
            <br />
            <span className=" font-semibold">
              {" "}
              “Membudidayakan insan pemuda yang mandiri dan olahraga berprestasi
              demi masyarakat Minahasa Selatan maju berkepribadian sehat dan
              sejahtera”
            </span>
          </p>
        </div>
        <br />
        <br />
        <div className="mx-[10%] md:mx-[15%] lg:mx-[20%] xl:mx-[25%]">
          <h1 className="text-sm sm:text-lg  lg:text-2xl mt-1 text-justify font-semibold">
            Misi
          </h1>
          <p className="text-xs sm:text-sm  md:text-md lg:text-lg mt-5 text-justify">
            <ol className="list-disc">
              <li className="mt-10px">
                Meningkatkan Kualitas dan Kuantitas SDM Keolahragaan
              </li>
              <li className="mt-10px">
                Meningkatkan Kualitas dan Kuantitas Sarana dan Prasarana
                Olahraga
              </li>
              <li className="mt-10px">
                Meningkatkan Partisipasi Masyarakat berolahraga rekreasi dan
                layanan khusus
              </li>
              <li className="mt-10px">
                Meningkatkan Prestasi Olahraga dan Penghargaan
              </li>
              <li className="mt-10px">
                Meningkatkan Inovasi, kreatifitas dan wirausaha Pemuda
              </li>
              <li className="mt-10px">
                Meningkatkan Indeks Parisipasi Pemuda melalui kepemimpinan,
                kepelopran dan kesukarelawan pemuda terhadap pembangunan Di
                desa/kelurahan serta kecamatan
              </li>
              <li className="mt-10px">
                Menurunkan indeks Kenakalan Remaja dan Pemuda
              </li>
              <li className="mt-10px">
                Meningkatkan Dukungan ​Manajemen​ Penatayalanan administrasi
                Perkantoran.
              </li>
            </ol>
          </p>
        </div>
      </div>
      {/* <!-- visi misi end --> */}
      {/* <!-- Content end --> */}
      <br />
      <br />
      <br />
      {/* <!-- footer --> */}
      <Footer />
      {/* <!-- footer end --> */}
    </div>
  );
};

export default VisiMisi;
