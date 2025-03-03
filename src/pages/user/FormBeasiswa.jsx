import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dispora1 from "../../assets/img/Dispora 1.png";
import axios from "axios";
import config from "../../config/config.js";

const FormBeasiswa = () => {
  const [formData, setFormData] = useState({
    nama_reg: "",
    umur_reg: "",
    tempat_tanggal_lahir: "",
    no_telepon: "",
    nim: "",
    IPK: "",
    nik: "",
    alamat: "",
    kecamatan: "",
    desa: "",
    universitas: "",
    fakultas: "",
    jurusan: "",
    wisuda: "",
    yudisium: "",
    keterangan: "diproses",
    semester_s1: "",
    semester_s2: "",
    semester_s3: "",
    semester_diploma: "",
    gambar_ktp: "",
    gambar_khs: "",
    gambar_spbupati: "",
    gambar_biodatareg: "",
    gambar_pasfoto: "",
    gambar_belumbea: "",
    gambar_databpp: "",
    gambar_ketpimpinan: "",
    gambar_kartumahasiswa: "",
    gambar_kk: "",
    gambar_proposalakhir: "",
  });

  const [showModal, setShowModal] = useState(false);

  const fieldLabels = {
    nama_reg: "Nama Lengkap",
    umur_reg: "Umur",
    tempat_tanggal_lahir: "Tempat Tanggal Lahir",
    no_telepon: "No Telepon",
    nim: "NIM",
    IPK: "IPK",
    nik: "NIK",
    alamat: "Alamat Lengkap",
    kecamatan: "Kecamatan",
    desa: "Desa",
    universitas: "Universitas",
    fakultas: "Fakultas",
    jurusan: "Jurusan",
    wisuda: "Wisuda",
    yudisium: "Yudisium",
    semester_s1: "Semester S1",
    semester_s2: "Semester S2",
    semester_s3: "Semester S3",
    semester_diploma: "Semester Diploma",
    gambar_ktp: "KTP",
    gambar_khs: "FKKHS",
    gambar_spbupati: "SP Bupati",
    gambar_biodatareg: "Biaya Pemo",
    gambar_pasfoto: "Pasfoto",
    gambar_belumbea: "Surat Belum Beasiswa",
    gambar_databpp: "Surat BPP",
    gambar_ketpimpinan: "Surat Keterangan Pimpinan",
    gambar_kartumahasiswa: "Fotokopi Ijazah",
    gambar_kk: "Fotokopi KK",
    gambar_proposalakhir: "Fotokopi Proposal Akhir",
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const saveRegprogram = async (e) => {
    e.preventDefault();

    const requiredFields = [
      "nama_reg",
      "umur_reg",
      "tempat_tanggal_lahir",
      "no_telepon",
      "nim",
      "IPK",
      "nik",
      "alamat",
      "kecamatan",
      "desa",
      "universitas",
      "fakultas",
      "jurusan",
      "wisuda",
      "yudisium",
    ];

    const requiredFiles = [
      "gambar_ktp",
      "gambar_khs",
      "gambar_spbupati",
      "gambar_biodatareg",
      "gambar_pasfoto",
      "gambar_belumbea",
      "gambar_databpp",
      "gambar_ketpimpinan",
      "gambar_kartumahasiswa",
      "gambar_kk",
      "gambar_proposalakhir",
    ];

    const emptyFields = requiredFields.filter((field) => !formData[field]);
    const emptyFiles = requiredFiles.filter((file) => !formData[file]);

    let missingFields = [];
    emptyFields.forEach((field) => {
      if (fieldLabels[field]) {
        missingFields.push(fieldLabels[field]);
      }
    });
    emptyFiles.forEach((file) => {
      if (fieldLabels[file]) {
        missingFields.push(fieldLabels[file]);
      }
    });

    if (missingFields.length > 0) {
      alert(`Harap isi data berikut : ${missingFields.join(", ")}`);
      return;
    }

    for (const fileField of requiredFiles) {
      if (formData[fileField] && formData[fileField].size > 5242880) {
        alert(`File ${fieldLabels[fileField]} melebihi ukuran maksimal 5MB.`);
        return;
      }
    }

    const submissionData = new FormData();
    Object.keys(formData).forEach((key) => {
      submissionData.append(key, formData[key]);
    });

    try {
      const response = await axios.post(
        `${config.ipPUBLIC}/regprogram`,
        submissionData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response) {
        setShowModal(true);
        setTimeout(() => window.location.reload(), 2000); // Refresh after 2 seconds
      }
    } catch (error) {
      console.error("Upload error: ", error.response || error);
      alert("Failed to upload data. Please try again.");
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex-col">
      <div className="navbar xl:h-[90px] border-b border-red-800">
        <div className="flex justify-center">
          <img
            className="min-[319px]:w-[120px] sm:w-[140px] lg:w-[150px] xl:w-[180px]"
            src={Dispora1}
            alt="Dispora"
          />
        </div>
      </div>

      <Link
        to="/"
        className="flex items-start justify-center bg-red-500 w-[80px] p-3 rounded-br-xl"
      >
        Beranda
      </Link>

      <div className="flex justify-center items-center">
        <h1 className="text-lg mt-20 sm:text-xl md:text-2xl lg:text-3xl text-center">
          Form Program Beasiswa
        </h1>
      </div>

      <hr className="mx-20 mt-10" />

      <form
        onSubmit={saveRegprogram}
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-[10%] sm:mx-[10%] md:mx-[8%] lg:mx-[15%] xl:mx-[20%] py-5"
      >
        {[
          { label: "Nama Lengkap", name: "nama_reg", type: "text" },
          { label: "Umur", name: "umur_reg", type: "text" },
          {
            label: "Tempat Tanggal Lahir",
            name: "tempat_tanggal_lahir",
            type: "text",
          },
          { label: "No Telepon", name: "no_telepon", type: "text" },
          { label: "NIM", name: "nim", type: "text", placeholder: "21013047" }, // Placeholder untuk NIM
          { label: "IPK", name: "IPK", type: "text", placeholder: "3.80" }, // Placeholder untuk IPK
          { label: "NIK", name: "nik", type: "text" },
          { label: "Alamat Lengkap", name: "alamat", type: "textarea" },
          { label: "Desa", name: "desa", type: "text" },
          { label: "Universitas", name: "universitas", type: "text" },
          { label: "Fakultas", name: "fakultas", type: "text" },
          { label: "Jurusan", name: "jurusan", type: "text" },
        ].map((field) => (
          <div key={field.name} className="my-6">
            <h1 className="text-xs my-1 sm:text-[16px] md:text-[16px] lg:text-[17px]">
              {field.label} <span className="text-red-600">*</span>
            </h1>
            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-[250px] min-[360px]:w-[300px] min-[480px]:h-[70px] sm:w-[350px] sm:h-[75px] md:w-[300px] lg:w-[350px] p-2 leading-5 text-xs sm:text-[15px] md:text-[15px] lg:text-[16px] border-red-800 border-2 rounded-lg"
              />
            ) : (
              <input
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder || ""}
                className="w-[250px] min-[360px]:w-[300px] min-[480px]:h-[30px] sm:w-[350px] sm:h-[35px] md:w-[300px] lg:w-[350px] p-1 text-xs sm:text-[15px] md:text-[15px] lg:text-[16px] border-red-800 border-2 rounded-lg"
                type={field.type}
              />
            )}
          </div>
        ))}

        <div className="my-6 flex flex-col">
          <label className="py-1 text-xs my-1 sm:text-[16px] md:text-[16px] lg:text-[17px]">
            Kecamatan <span className="text-red-600">*</span>
          </label>
          <select
            name="kecamatan"
            value={formData.kecamatan}
            onChange={handleChange}
            className="bg-red-500 text-white p-1 w-[190px] min-[360px]:w-[90px] min-[480px]:h-[30px] sm:w-[100px] sm:h-[35px] md:w-[100px] lg:w-[150px] text-xs sm:text-[15px] md:text-[15px] lg:text-[16px] border-red-800 border-2 rounded-lg"
          >
            <option>Pilih Kecamatan</option>
            <option value="mondoinding">Mondoinding</option>
            <option value="tompasobaru">Tompaso Baru</option>
            <option value="ranoyapo">Ranoyapo</option>
            <option value="motoling">Motoling</option>
            <option value="kumelembuai">Kumelembuai</option>
            <option value="motolingbarat">Motoling Barat</option>
            <option value="motolingtimur">Motoling Timur</option>
            <option value="sinonsayang">Sinonsayang</option>
            <option value="amurang">Amurang</option>
            <option value="amurangbarat">Amurang Barat</option>
            <option value="amurangtimur">Amurang Timur</option>
            <option value="tareran">Tareran</option>
            <option value="suluuntareran">Suluun Tareran</option>
            <option value="tumpaan">Tumpaan</option>
            <option value="tatapaan">Tatapaan</option>
          </select>
        </div>

        {[
          { label: "Wisuda", name: "wisuda" },
          { label: "Yudisium", name: "yudisium" },
        ].map((field) => (
          <div key={field.name} className="my-6 flex flex-col">
            <label className="py-1 text-xs my-1 sm:text-[16px] md:text-[16px] lg:text-[17px]">
              {field.label} (Sudah/Belum){" "}
              <span className="text-red-600">*</span>
            </label>
            <select
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="bg-red-500 text-white p-1 w-[90px] min-[360px]:w-[90px] min-[480px]:h-[30px] sm:w-[100px] sm:h-[35px] md:w-[100px] lg:w-[150px] text-xs sm:text-[15px] md:text-[15px] lg:text-[16px] border-red-800 border-2 rounded-lg"
            >
              <option value="sudah">Sudah</option>
              <option value="belum">Belum</option>
            </select>
          </div>
        ))}

        {[{ label: "S1", name: "semester_s1" }].map((field) => (
          <div key={field.name} className="my-6 flex flex-col">
            <label className="py-1 text-xs my-1 sm:text-[16px] md:text-[16px] lg:text-[17px]">
              semester {field.label}{" "}
              <span className="text-red-600">* optional</span>
            </label>
            <select
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="bg-red-500 text-white p-1 w-[90px] min-[360px]:w-[90px] min-[480px]:h-[30px] sm:w-[100px] sm:h-[35px] md:w-[100px] lg:w-[150px] text-xs sm:text-[15px] md:text-[15px] lg:text-[16px] border-red-800 border-2 rounded-lg"
            >
              <option className="disabled" value="pilihsemester">
                pilih semester
              </option>
              <option value="semester6">semester 6</option>
              <option value="semester8">semester 8</option>
              <option value="semester10">semester 10</option>
            </select>
          </div>
        ))}

        {[{ label: "S2", name: "semester_s2" }].map((field) => (
          <div key={field.name} className="my-6 flex flex-col">
            <label className="py-1 text-xs my-1 sm:text-[16px] md:text-[16px] lg:text-[17px]">
              semester {field.label}{" "}
              <span className="text-red-600">* optional</span>
            </label>
            <select
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="bg-red-500 text-white p-1 w-[90px] min-[360px]:w-[90px] min-[480px]:h-[30px] sm:w-[100px] sm:h-[35px] md:w-[100px] lg:w-[150px] text-xs sm:text-[15px] md:text-[15px] lg:text-[16px] border-red-800 border-2 rounded-lg"
            >
              <option className="disabled" value="pilihsemester">
                pilih semester
              </option>
              <option value="semester4">semester 4</option>
              <option value="semester6">semester 6</option>
            </select>
          </div>
        ))}

        {[{ label: "S3", name: "semester_s3" }].map((field) => (
          <div key={field.name} className="my-6 flex flex-col">
            <label className="py-1 text-xs my-1 sm:text-[16px] md:text-[16px] lg:text-[17px]">
              semester {field.label}{" "}
              <span className="text-red-600">* optional</span>
            </label>
            <select
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="bg-red-500 text-white p-1 w-[90px] min-[360px]:w-[90px] min-[480px]:h-[30px] sm:w-[100px] sm:h-[35px] md:w-[100px] lg:w-[150px] text-xs sm:text-[15px] md:text-[15px] lg:text-[16px] border-red-800 border-2 rounded-lg"
            >
              <option className="disabled" value="pilihsemester">
                pilih semester
              </option>
              <option value="semester4">semester 4</option>
              <option value="semester6">semester 6</option>
            </select>
          </div>
        ))}

        {[{ label: "Diploma", name: "semester_diploma" }].map((field) => (
          <div key={field.name} className="my-6 flex flex-col">
            <label className="py-1 text-xs my-1 sm:text-[16px] md:text-[16px] lg:text-[17px]">
              semester {field.label}{" "}
              <span className="text-red-600">* optional</span>
            </label>
            <select
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="bg-red-500 text-white p-1 w-[90px] min-[360px]:w-[90px] min-[480px]:h-[30px] sm:w-[100px] sm:h-[35px] md:w-[100px] lg:w-[150px] text-xs sm:text-[15px] md:text-[15px] lg:text-[16px] border-red-800 border-2 rounded-lg"
            >
              <option className="disabled" value="pilihsemester">
                pilih semester
              </option>
              <option value="semester6">semester 6</option>
              <option value="semester8">semester 8</option>
              <option value="semester10">semester 10</option>
            </select>
          </div>
        ))}

        {[
          { label: "KTP", name: "gambar_ktp" },
          { label: "Kartu Hasil Studi", name: "gambar_khs" },
          {
            label: "Surat Permohonan kepada Bupati Minsel ",
            name: "gambar_spbupati",
          },
          { label: "Biodata Pemohon", name: "gambar_biodatareg" },
          { label: "Pasfoto 3x4", name: "gambar_pasfoto" },
          {
            label: "Surat Pernyataan Belum Pernah Menerima Beasiswa",
            name: "gambar_belumbea",
          },
          {
            label: "Surat Pernyataan Mutlak Penggunaan Data BPP “Minsel Maju”",
            name: "gambar_databpp",
          },
          {
            label: "Surat Keterangan dari Pimpinan Fakultas/Prodi/Jurusan",
            name: "gambar_ketpimpinan",
          },
          { label: "Kartu Mahasiswa", name: "gambar_kartumahasiswa" },
          { label: "Kartu Keluarga", name: "gambar_kk" },
          {
            label:
              "Proposal penelitian/tugas akhir/skripsi/tesis disertai tanda tangan dosen pembimbing",
            name: "gambar_proposalakhir",
          },
        ].map((fileField) => (
          <div key={fileField.name} className="my-6 flex flex-col">
            <label className="py-1 text-xs my-1 sm:text-[16px] md:text-[16px] lg:text-[17px]">
              {fileField.label} <span className="text-red-600">*</span>
            </label>
            <input
              name={fileField.name}
              type="file"
              onChange={handleChange}
              className="w-[250px] min-[360px]:w-[300px] min-[480px]:h-[30px] sm:w-[350px] sm:h-[35px] md:w-[300px] lg:w-[350px] text-xs sm:text-[15px] md:text-[15px] lg:text-[16px] border-red-800 border-2 rounded-lg"
            />
            <h1>: file yang akan di upload harus kurang dari 5 MB</h1>
          </div>
        ))}

        <button
          type="submit"
          className="w-[200px] mx-[20%] sm:w-[250px] lg:w-[300px] py-2 text-white bg-red-500 border-red-800 border-2 rounded-xl text-xl"
        >
          Kirim
        </button>
      </form>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-[300px] sm:w-[400px]">
            <h2 className="text-xl font-bold text-center">Sukses!</h2>
            <p className="mt-4 text-center">Data berhasil diupload.</p>
            <div className="mt-6 flex justify-center">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormBeasiswa;
