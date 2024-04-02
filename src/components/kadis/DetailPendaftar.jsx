import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../Header";

const DetailPendaftar = () => {
  const [pendaftar, setPendaftar] = useState({});
  const { id } = useParams();
  const [openModal, setOpenModal] = useState(false);
  let navigate = useNavigate();

  const fetchDetailPendaftar = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/regprogram/${id}`
      );
      setPendaftar(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Contoh penanganan status respons saat menghapus
  const deletePendaftar = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/regprogram/${id}`
      );
      if (response.status === 200) {
        fetchDetailPendaftar();
        navigate("/data-pendaftar-kadis");
      } else {
        console.log("Failed to delete");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetailPendaftar();
  }, [id]);

  return (
    <div className="flex-col ">
      {/* <!-- navbar --> */}
      <Header />
      {/* <!-- navbar end --> */}
      <div className="flex justify-between">
        <Link to={"/data-pendaftar-kadis"}>
          <p className="flex items-start justify-center bg-red-500 w-[80px] p-3 rounded-br-xl">
            Kembali
          </p>
        </Link>
        <Link to={"/home-admin-kadis"}>
          <p className="flex items-start justify-center bg-red-500 w-[80px] p-3 rounded-bl-xl">
            Beranda
          </p>
        </Link>
      </div>
      <br />
      <br />
      <br />
      {/* <!-- Content --> */}
      <div className="flex justify-center items-center">
        <h1 className="text-lg mt-20 sm:text-xl md:text-2xl  lg:text-3xl text-center">
          Informasi Lengkap Pendaftar Program Beasiswa
        </h1>
      </div>

      <hr className="mx-20" />

      {/* <!-- Form --> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 mx-[10%] my-10">
        <div className="p-5">
          <h1 className="text-md sm:text-md md:text-lg lg:text-xl">
            Nama <span className="text-red-600">*</span>
          </h1>
          <input
            className="text-sm sm:text-sm md:text-md lg:text-lg bg-white"
            type="text"
            value={pendaftar?.nama_reg}
            disabled
          />
        </div>
        <div className="p-5">
          <h1 className="text-md sm:text-md md:text-lg lg:text-xl">
            Tempat Tanggal Lahir <span className="text-red-600">*</span>
          </h1>
          <input
            className="text-sm w-[210px] sm:text-sm md:text-md lg:text-lg bg-white"
            type="text"
            value={pendaftar?.tempat_tanggal_lahir}
            disabled
          />
        </div>
        <div className="p-5">
          <h1 className="text-md sm:text-md md:text-lg lg:text-xl">
            NIK <span className="text-red-600">*</span>
          </h1>
          <input
            className="text-sm w-[210px] sm:text-sm md:text-md lg:text-lg bg-white"
            type="text"
            value={pendaftar?.nik}
            disabled
          />
        </div>
        <div className="p-5">
          <h1 className="text-md  sm:text-md md:text-lg lg:text-xl">
            Universitas <span className="text-red-600">*</span>
          </h1>
          <input
            className="text-sm w-[400px] sm:text-sm md:text-md lg:text-lg bg-white"
            type="text"
            value={pendaftar?.universitas}
            disabled
          />
        </div>
        <div className="p-5">
          <h1 className="text-md sm:text-md md:text-lg lg:text-xl">
            Semester S1 <span className="text-red-600">*</span>
          </h1>
          <input
            className="text-sm sm:text-sm md:text-md lg:text-lg bg-white"
            type="text"
            value={pendaftar?.semester_s1}
            disabled
          />
        </div>
        <div className="p-5">
          <h1 className="text-md sm:text-md md:text-lg lg:text-xl">
            Semester S2 <span className="text-red-600">*</span>
          </h1>
          <input
            className="text-sm sm:text-sm md:text-md lg:text-lg bg-white"
            type="text"
            value={pendaftar?.semester_s2}
            disabled
          />
        </div>
        <div className="p-5">
          <h1 className="text-md sm:text-md md:text-lg lg:text-xl">
            Semester S3 <span className="text-red-600">*</span>
          </h1>
          <input
            className="text-sm sm:text-sm md:text-md lg:text-lg bg-white"
            type="text"
            value={pendaftar?.semester_s3}
            disabled
          />
        </div>
        <div className="p-5">
          <h1 className="text-md sm:text-md md:text-lg lg:text-xl">
            Semester Diploma <span className="text-red-600">*</span>
          </h1>
          <input
            className="text-sm sm:text-sm md:text-md lg:text-lg bg-white"
            type="text"
            value={pendaftar?.semester_diploma}
            disabled
          />
        </div>
        <div className="p-5">
          <h1 className="text-md sm:text-md md:text-lg lg:text-xl">
            Fakultas <span className="text-red-600">*</span>
          </h1>
          <input
            className="text-sm sm:text-sm md:text-md lg:text-lg bg-white"
            type="text"
            value={pendaftar?.fakultas}
            disabled
          />
        </div>
        <div className="p-5">
          <h1 className="text-md sm:text-md md:text-lg lg:text-xl">
            Jurusan <span className="text-red-600">*</span>
          </h1>
          <input
            className="text-sm sm:text-sm md:text-md lg:text-lg bg-white"
            type="text"
            value={pendaftar?.jurusan}
            disabled
          />
        </div>
        <div className="p-5">
          <h1 className="text-md sm:text-md md:text-lg lg:text-xl">
            NIM <span className="text-red-600">*</span>
          </h1>
          <input
            className="text-sm sm:text-sm md:text-md lg:text-lg bg-white"
            type="text"
            value={pendaftar?.nim}
            disabled
          />
        </div>
        <div className="p-5">
          <h1 className="text-md sm:text-md md:text-lg lg:text-xl">
            IPK <span className="text-red-600">*</span>
          </h1>
          <input
            className="text-sm sm:text-sm md:text-md lg:text-lg bg-white"
            type="text"
            value={pendaftar?.IPK}
            disabled
          />
        </div>
        <div className="p-5">
          <h1 className="text-md sm:text-md md:text-lg lg:text-xl">
            Wisuda <span className="text-red-600">*</span>
          </h1>
          <input
            className="text-sm sm:text-sm md:text-md lg:text-lg bg-white"
            type="text"
            value={pendaftar?.wisuda}
            disabled
          />
        </div>
        <div className="p-5">
          <h1 className="text-md sm:text-md md:text-lg lg:text-xl">
            Yudisium <span className="text-red-600">*</span>
          </h1>
          <input
            className="text-sm sm:text-sm md:text-md lg:text-lg bg-white"
            type="text"
            value={pendaftar?.yudisium}
            disabled
          />
        </div>
        <div className="p-5">
          <h1 className="text-md  sm:text-md md:text-lg lg:text-xl">
            Alamat <span className="text-red-600">*</span>
          </h1>
          <input
            className="text-sm w-[400px] sm:text-sm md:text-md lg:text-lg bg-white"
            type="text"
            value={pendaftar?.alamat}
            disabled
          />
        </div>
        <div className="p-5">
          <h1 className="text-md  sm:text-md md:text-lg lg:text-xl">
            Kecamatan <span className="text-red-600">*</span>
          </h1>
          <input
            className="text-sm w-[400px] sm:text-sm md:text-md lg:text-lg bg-white"
            type="text"
            value={pendaftar?.kecamatan}
            disabled
          />
        </div>
        <div className="p-5">
          <h1 className="text-md  sm:text-md md:text-lg lg:text-xl">
            Desa <span className="text-red-600">*</span>
          </h1>
          <input
            className="text-sm w-[400px] sm:text-sm md:text-md lg:text-lg bg-white"
            type="text"
            value={pendaftar?.desa}
            disabled
          />
        </div>
        <div className="p-5">
          <h1 className="text-md  sm:text-md md:text-lg lg:text-xl">
            No.Hp <span className="text-red-600">*</span>
          </h1>
          <input
            className="text-sm w-[400px] sm:text-sm md:text-md lg:text-lg bg-white"
            type="text"
            value={pendaftar?.no_telepon}
            disabled
          />
        </div>
        <div className="p-5">
          <h1 className="text-md sm:text-md md:text-lg">
            KTP <span className="text-red-600">*</span>
          </h1>
          <button className="bg-red-500 rounded-xl text-sm text-white p-2 sm:text-sm md:text-md lg:text-lg">
            <Link to={pendaftar?.URL_ktp}>Lihat KTP</Link>
          </button>
        </div>
        <div className="p-5">
          <h1 className="text-md sm:text-md md:text-lg">
            Foto Kopi Kartu Hasil Studi <span className="text-red-600">*</span>
          </h1>
          <button className="bg-red-500 rounded-xl text-sm text-white p-2 sm:text-sm md:text-md lg:text-lg">
            <Link to={pendaftar?.URL_khs}>
              Lihat Foto Kopi Kartu Hasil Studi
            </Link>
          </button>
        </div>
        <div className="p-5">
          <h1 className="text-lg">
            Surat Permohonan kepada Bupati Minsel{" "}
            <span className="text-red-600">*</span>
          </h1>
          <button className="bg-red-500 rounded-xl text-sm text-white p-2 sm:text-sm md:text-md lg:text-lg">
            <Link to={pendaftar?.URL_spbupati}>
              Lihat Surat Permohonan ke Bupati Minsel
            </Link>
          </button>
        </div>
        <div className="p-5">
          <h1 className="text-md sm:text-md md:text-lg">
            Biodata Pemohon <span className="text-red-600">*</span>
          </h1>
          <button className="bg-red-500 rounded-xl text-sm text-white p-2 sm:text-sm md:text-md lg:text-lg">
            <Link to={pendaftar?.URL_biodatareg}>Lihat Biodata Pemohon</Link>
          </button>
        </div>
        <div className="p-5">
          <h1 className="text-lg">
            Pas Foto Warna 3x4 <span className="text-red-600">*</span>
          </h1>
          <button className="bg-red-500 rounded-xl text-sm text-white p-2 sm:text-sm md:text-md lg:text-lg">
            <Link to={pendaftar?.URL_pasfoto}>Lihat Pas Foto</Link>
          </button>
        </div>
        <div className="p-5">
          <h1 className="text-lg">
            Surat Pernyataan Belum Pernah Menerima Beasiswa
            <span className="text-red-600">*</span>
          </h1>
          <button className="bg-red-500 rounded-xl text-sm text-white p-2 sm:text-sm md:text-md lg:text-lg">
            <Link to={pendaftar?.URL_belumbea}>
              Lihat Surat Pernyataan Belum Pernah Menerima Beasiswa
            </Link>
          </button>
        </div>
        <div className="p-5">
          <h1 className="text-lg">
            Surat Pernyataan Mutlak Penggunaan Data BPP “Minsel Maju”
            <span className="text-red-600">*</span>
          </h1>
          <button className="bg-red-500 rounded-xl text-sm text-white p-2 sm:text-sm md:text-md lg:text-lg">
            <Link to={pendaftar?.URL_databpp}>
              Lihat Surat Pernyataan Mutlak Penggunaan Data BPP
            </Link>
          </button>
        </div>
        <div className="p-5">
          <h1 className="text-lg">
            Surat Keterangan dari Pimpinan Fakultas/Prodi/Jurusan
            <span className="text-red-600">*</span>
          </h1>
          <button className="bg-red-500 rounded-xl text-sm text-white p-2 sm:text-sm md:text-md lg:text-lg">
            <Link to={pendaftar?.URL_ketpimpinan}>
              Lihat Surat Keterangan dari Pimpinan Fakultas/Prodi/Jurusan
            </Link>
          </button>
        </div>
        <div className="p-5">
          <h1 className="text-md sm:text-md md:text-lg">
            Foto kopi kartu Mahasiswa <span className="text-red-600">*</span>
          </h1>
          <button className="bg-red-500 rounded-xl text-sm text-white p-2 sm:text-sm md:text-md lg:text-lg">
            <Link to={pendaftar?.URL_kartumahasiswa}>
              Lihat Foto kopi kartu Mahasiswa
            </Link>
          </button>
        </div>
        <div className="p-5">
          <h1 className="text-md sm:text-md md:text-lg">
            Foto kopi Kartu Keluarga <span className="text-red-600">*</span>
          </h1>
          <button className="bg-red-500 rounded-xl text-sm text-white p-2 sm:text-sm md:text-md lg:text-lg">
            <Link to={pendaftar?.URL_kk}>Lihat Foto kopi Kartu Keluarga</Link>
          </button>
        </div>
        <div className="p-5">
          <h1 className="text-lg">
            Foto kopi proposal penelitian/tugas akhir/skripsi/tesis disertai
            tanda tangan dosen pembimbing{" "}
            <span className="text-red-600">*</span>
          </h1>
          <button className="bg-red-500 rounded-xl text-sm text-white p-2 sm:text-sm md:text-md lg:text-lg">
            <Link to={pendaftar?.URL_proposalakhir}>
              Lihat Foto kopi proposal
            </Link>
          </button>
        </div>
      </div>
      <div className="p-5 flex justify-center">
        <button
          onClick={() => setOpenModal(true)}
          className="px-8 py-4 bg-red-600 rounded-xl text-xl text-white"
        >
          Hapus
        </button>
      </div>
      <br />
      <br />
      <br />
      {/* <!-- footer --> */}

      {/* <!-- footer end --> */}
      {/* MODAL */}
      <div>
        <div
          id="popup-modal"
          tabIndex="-1"
          className={`${
            openModal ? "flex" : "hidden"
          } fixed top-0 left-0 right-0 z-50 justify-center items-center  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
        >
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                onClick={() => setOpenModal(false)}
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-hide="popup-modal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-6 text-center">
                <svg
                  aria-hidden="true"
                  className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Are you sure you want to delete this product?
                </h3>

                <button
                  data-modal-hide="popup-modal"
                  type="button"
                  onClick={(e) => deletePendaftar(pendaftar.id)}
                  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Yes, I'm sure
                </button>

                <button
                  onClick={() => setOpenModal(false)}
                  data-modal-hide="popup-modal"
                  type="button"
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPendaftar;
