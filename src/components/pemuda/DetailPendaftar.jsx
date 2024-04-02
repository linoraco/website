import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../Header";

const DetailPendaftar = () => {
  const [pendaftar, setPendaftar] = useState({});
  const { id } = useParams();
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
        navigate("/data-pendaftar-pemuda");
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
        <Link to={"/data-pendaftar-pemuda"}>
          <p className="flex items-start justify-center bg-red-500 w-[80px] p-3 rounded-br-xl">
            Kembali
          </p>
        </Link>
        <Link to={"/home-admin-pemuda"}>
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
          onClick={(e) => deletePendaftar(pendaftar.id)}
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
    </div>
  );
};

export default DetailPendaftar;
