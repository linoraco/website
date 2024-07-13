import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dispora1 from "../../assets/img/Dispora 1.png";
import axios from "axios";
import config from "../../config/config.js";

const FormBeasiswa = () => {
  const [namareg, setNamareg] = useState("");
  const [umurreg, setUmur] = useState("");
  const [ttl, setTtl] = useState("");
  const [notelepon, setNotelepon] = useState("");
  const [nim, setNim] = useState("");
  const [ipk, setIpk] = useState("");
  const [nik, setNik] = useState("");
  const [alamat, setAlamat] = useState("");
  const [kecamatan, setKecamatan] = useState("");
  const [desa, setDesa] = useState("");
  const [universitas, setUniversitas] = useState("");
  const [fakultas, setFakultas] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [wisuda, setWisuda] = useState("");
  const [yudisium, setYudisium] = useState("");
  const [semS1, setSemS1] = useState("");
  const [semS2, setSemS2] = useState("");
  const [semS3, setSemS3] = useState("");
  const [semDiploma, setSemDiploma] = useState("");
  const [ktp, setKtp] = useState("");
  const [fkkhs, setFkkhs] = useState("");
  const [spbupati, setSpbupati] = useState("");
  const [biopemo, setBiopemo] = useState("");
  const [pasfoto, setPasfoto] = useState("");
  const [suratbelumbea, setSuratbelumbea] = useState("");
  const [suratbpp, setSuratBpp] = useState("");
  const [suratketpim, setSuratketpim] = useState("");
  const [fotokopimaha, setFotokopimaha] = useState("");
  const [fotokopikk, setFotokopikk] = useState("");
  const [fotokopipropo, setFotokopipropo] = useState("");

  const loadImage = (e, name) => {
    const selectedFile = e.target.files[0];
    if (name === "ktp") {
      setKtp(selectedFile);
    } else if (name === "fkkhs") {
      setFkkhs(selectedFile);
    } else if (name === "spbupati") {
      setSpbupati(selectedFile);
    } else if (name === "biopemo") {
      setBiopemo(selectedFile);
    } else if (name === "pasfoto") {
      setPasfoto(selectedFile);
    } else if (name === "suratbelumbea") {
      setSuratbelumbea(selectedFile);
    } else if (name === "suratbpp") {
      setSuratBpp(selectedFile);
    } else if (name === "suratketpim") {
      setSuratketpim(selectedFile);
    } else if (name === "fotokopimaha") {
      setFotokopimaha(selectedFile);
    } else if (name === "fotokopikk") {
      setFotokopikk(selectedFile);
    } else if (name === "fotokopipropo") {
      setFotokopipropo(selectedFile);
    }
  };

  const saveRegprogram = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nama_reg", namareg);
    formData.append("umur_reg", umurreg);
    formData.append("tempat_tanggal_lahir", ttl);
    formData.append("no_telepon", notelepon);
    formData.append("nim", nim);
    formData.append("IPK", ipk);
    formData.append("nik", nik);
    formData.append("alamat", alamat);
    formData.append("kecamatan", kecamatan);
    formData.append("desa", desa);
    formData.append("universitas", universitas);
    formData.append("fakultas", fakultas);
    formData.append("jurusan", jurusan);
    formData.append("wisuda", wisuda);
    formData.append("semester_s1", semS1);
    formData.append("semester_s2", semS2);
    formData.append("semester_s3", semS3);
    formData.append("semester_diploma", semDiploma);
    formData.append("yudisium", yudisium);
    formData.append("gambar_ktp", ktp);
    formData.append("gambar_khs", fkkhs);
    formData.append("gambar_spbupati", spbupati);
    formData.append("gambar_biodatareg", biopemo);
    formData.append("gambar_pasfoto", pasfoto);
    formData.append("gambar_belumbea", suratbelumbea);
    formData.append("gambar_databpp", suratbpp);
    formData.append("gambar_ketpimpinan", suratketpim);
    formData.append("gambar_kartumahasiswa", fotokopimaha);
    formData.append("gambar_kk", fotokopikk);
    formData.append("gambar_proposalakhir", fotokopipropo);

    try {
      const response = await axios.post(
        "http://217.15.171.240:4000/regprogram",
        formData
      );
      if (response) {
        console.log("Berhasil");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex-col">
      <div className="navbar xl:h-[90px] border-b border-red-800">
        <div className="flex justify-center">
          <img
            className="min-[319px]:w-[120px] sm:w-[140px] lg:w-[150px] xl:w-[180px]"
            src={Dispora1}
            alt=""
          />
        </div>
      </div>

      <Link
        to={"/"}
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
        <div className="my-6">
          <h1 className="text-xs my-1 sm:text-[16px] md:text-[16px] lg:text-[17px]">
            Nama Lengkap <span className="text-red-600">*</span>
          </h1>
          <input
            value={namareg}
            onChange={(e) => setNamareg(e.target.value)}
            className="w-[250px] min-[360px]:w-[300px] min-[480px]:h-[30px] sm:w-[350px] sm:h-[35px] md:w-[300px] lg:w-[350px] p-1 text-xs sm:text-[15px] md:text-[15px] lg:text-[16px] border-red-800 border-2 rounded-lg"
            type="text"
          />
        </div>

        <div className="my-6">
          <h1 className="text-xs my-1 sm:text-[16px] md:text-[16px] lg:text-[17px]">
            Umur <span className="text-red-600">*</span>
          </h1>
          <input
            value={umurreg}
            onChange={(e) => setUmur(e.target.value)}
            className="w-[80px] min-[360px]:w-[80px] min-[480px]:h-[30px] sm:w-[100px] sm:h-[35px] md:w-[100px] lg:w-[100px] p-1 text-xs sm:text-[15px] md:text-[15px] lg:text-[16px] border-red-800 border-2 rounded-lg"
            type="text"
          />
        </div>

        <div className="my-6">
          <h1 className="text-xs my-1 sm:text-[16px] md:text-[16px] lg:text-[17px]">
            Tempat Tanggal Lahir <span className="text-red-600">*</span>
          </h1>
          <input
            value={ttl}
            onChange={(e) => setTtl(e.target.value)}
            className="w-[250px] min-[360px]:w-[300px] min-[480px]:h-[30px] sm:w-[350px] sm:h-[35px] md:w-[300px] lg:w-[350px] p-1 text-xs sm:text-[15px] md:text-[15px] lg:text-[16px] border-red-800 border-2 rounded-lg"
            type="text"
          />
        </div>

        <div className="my-6">
          <h1 className="text-xs my-1 sm:text-[16px] md:text-[16px] lg:text-[17px]">
            No Telepon <span className="text-red-600">*</span>
          </h1>
          <input
            value={notelepon}
            onChange={(e) => setNotelepon(e.target.value)}
            className="w-[250px] min-[360px]:w-[300px] min-[480px]:h-[30px] sm:w-[350px] sm:h-[35px] md:w-[300px] lg:w-[350px] p-1 text-xs sm:text-[15px] md:text-[15px] lg:text-[16px] border-red-800 border-2 rounded-lg"
            type="text"
          />
        </div>

        <div className="my-6">
          <h1 className="text-xs my-1 sm:text-[16px] md:text-[16px] lg:text-[17px]">
            NIM <span className="text-red-600">*</span>
          </h1>
          <input
            value={nim}
            onChange={(e) => setNim(e.target.value)}
            className="w-[250px] min-[360px]:w-[300px] min-[480px]:h-[30px] sm:w-[350px] sm:h-[35px] md:w-[300px] lg:w-[350px] p-1 text-xs sm:text-[15px] md:text-[15px] lg:text-[16px] border-red-800 border-2 rounded-lg"
            type="text"
          />
        </div>

        <div className="my-6">
          <h1 className="text-xs my-1 sm:text-[16px] md:text-[16px] lg:text-[17px]">
            IPK <span className="text-red-600">*</span>
          </h1>
          <input
            value={ipk}
            onChange={(e) => setIpk(e.target.value)}
            className="w-[250px] min-[360px]:w-[300px] min-[480px]:h-[30px] sm:w-[350px] sm:h-[35px] md:w-[300px] lg:w-[350px] p-1 text-xs sm:text-[15px] md:text-[15px] lg:text-[16px] border-red-800 border-2 rounded-lg"
            type="text"
          />
        </div>

        <div className="my-6">
          <h1 className="text-xs my-1 sm:text-[16px] md:text-[16px] lg:text-[17px]">
            NIK <span className="text-red-600">*</span>
          </h1>
          <input
            value={nik}
            onChange={(e) => setNik(e.target.value)}
            className="w-[250px] min-[360px]:w-[300px] min-[480px]:h-[30px] sm:w-[350px] sm:h-[35px] md:w-[300px] lg:w-[350px] p-1 text-xs sm:text-[15px] md:text-[15px] lg:text-[16px] border-red-800 border-2 rounded-lg"
            type="text"
          />
        </div>

        <div className="my-6">
          <h1 className="text-xs my-1 sm:text-[16px] md:text-[16px] lg:text-[17px]">
            Alamat Lengkap <span className="text-red-600">*</span>
          </h1>
          <textarea
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
            className=" w-[250px] min-[360px]:w-[300px] min-[480px]:h-[70px] sm:w-[350px] sm:h-[75px] md:w-[300px] lg:w-[350px] p-2 leading-5 text-xs sm:text-[15px] md:text-[15px] lg:text-[16px] border-red-800 border-2 rounded-lg"
            type="text"
            name=""
            id=""
          />
        </div>

        <div className="my-6 flex flex-col">
          <label
            className=" py-1 text-xs my-1 sm:text-[16px] md:text-[16px] lg:text-[17px]"
            htmlFor=""
          >
            Kecamatan <span className="text-red-600">*</span>
          </label>
          <select
            className="bg-red-500 text-white p-1 w-[190px] min-[360px]:w-[90px] min-[480px]:h-[30px] sm:w-[100px] sm:h-[35px] md:w-[100px] lg:w-[100px]  text-xs sm:text-[15px] md:text-[15px] lg:text-[16px] border-red-800 border-2 rounded-lg"
            name=""
            value={kecamatan}
            onChange={(e) => setKecamatan(e.target.value)}
            id=""
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

        <div className="my-6">
          <h1 className="text-xs my-1 sm:text-[16px] md:text-[16px] lg:text-[17px]">
            Desa <span className="text-red-600">*</span>
          </h1>
          <input
            value={desa}
            onChange={(e) => setDesa(e.target.value)}
            className="w-[250px] min-[360px]:w-[300px] min-[480px]:h-[30px] sm:w-[350px] sm:h-[35px] md:w-[300px] lg:w-[350px] p-1 text-xs sm:text-[15px] md:text-[15px] lg:text-[16px] border-red-800 border-2 rounded-lg"
            type="text"
          />
        </div>

        <div className="my-6">
          <h1 className="text-xs my-1 sm:text-[16px] md:text-[16px] lg:text-[17px]">
            Universitas <span className="text-red-600">*</span>
          </h1>
          <input
            value={universitas}
            onChange={(e) => setUniversitas(e.target.value)}
            className="w-[250px] min-[360px]:w-[300px] min-[480px]:h-[30px] sm:w-[350px] sm:h-[35px] md:w-[300px] lg:w-[350px] p-1 text-xs sm:text-[15px] md:text-[15px] lg:text-[16px] border-red-800 border-2 rounded-lg"
            type="text"
          />
        </div>

        <div className="my-6">
          <h1 className="text-xs my-1 sm:text-[16px] md:text-[16px] lg:text-[17px]">
            Fakultas <span className="text-red-600">*</span>
          </h1>
          <input
            value={fakultas}
            onChange={(e) => setFakultas(e.target.value)}
            className="w-[250px] min-[360px]:w-[300px] min-[480px]:h-[30px] sm:w-[350px] sm:h-[35px] md:w-[300px] lg:w-[350px] p-1 text-xs sm:text-[15px] md:text-[15px] lg:text-[16px] border-red-800 border-2 rounded-lg"
            type="text"
          />
        </div>

        <div className="my-6">
          <h1 className="text-xs my-1 sm:text-[16px] md:text-[16px] lg:text-[17px]">
            Jurusan <span className="text-red-600">*</span>
          </h1>
          <input
            value={jurusan}
            onChange={(e) => setJurusan(e.target.value)}
            className="w-[250px] min-[360px]:w-[300px] min-[480px]:h-[30px] sm:w-[350px] sm:h-[35px] md:w-[300px] lg:w-[350px] p-1 text-xs sm:text-[15px] md:text-[15px] lg:text-[16px] border-red-800 border-2 rounded-lg"
            type="text"
          />
        </div>

        <div className="my-6 flex flex-col">
          <label
            className="py-1 text-xs my-1 sm:text-[16px] md:text-[16px] lg:text-[17px]"
            htmlFor=""
          >
            Wisuda (Sudah/Belum) <span className="text-red-600">*</span>
          </label>
          <select
            className="bg-red-500 text-white p-1 w-[90px] min-[360px]:w-[90px] min-[480px]:h-[30px] sm:w-[100px] sm:h-[35px] md:w-[100px] lg:w-[100px]  text-xs sm:text-[15px] md:text-[15px] lg:text-[16px] border-red-800 border-2 rounded-lg"
            name=""
            value={wisuda}
            onChange={(e) => setWisuda(e.target.value)}
            id=""
          >
            <option value="sudah">Sudah</option>
            <option value="belum">Belum</option>
          </select>
        </div>
        <div className="my-6 flex flex-col">
          <label
            className="py-1 text-xs my-1 sm:text-[16px] md:text-[16px] lg:text-[17px]"
            htmlFor=""
          >
            Yudisium (Sudah/Belum) <span className="text-red-600">*</span>
          </label>
          <select
            className="bg-red-500 text-white p-1 w-[90px] min-[360px]:w-[90px] min-[480px]:h-[30px] sm:w-[100px] sm:h-[35px] md:w-[100px] lg:w-[100px]  text-xs sm:text-[15px] md:text-[15px] lg:text-[16px] border-red-800 border-2 rounded-lg"
            name=""
            value={yudisium}
            onChange={(e) => setYudisium(e.target.value)}
            id=""
          >
            <option value="sudah">Sudah</option>
            <option value="belum">Belum</option>
          </select>
        </div>

        <div className="my-6 flex flex-col">
          <label
            className=" py-1 text-xs my-1 sm:text-[16px] md:text-[16px] lg:text-[17px]"
            htmlFor=""
          >
            Pilih Semester Untuk S1 (Optional){" "}
            <span className="text-red-600">*</span>
          </label>
          <select
            className=" bg-red-500 text-white p-1 w-[120px] min-[360px]:w-[120px] min-[480px]:h-[30px] sm:w-[120px] sm:h-[35px] md:w-[120px] lg:w-[120px]  text-xs sm:text-[15px] md:text-[15px] lg:text-[16px] border-red-800 border-2 rounded-lg"
            name=""
            value={semS1}
            onChange={(e) => setSemS1(e.target.value)}
            id=""
          >
            <option>Pilih Semester</option>
            <option value="sem6">Semester 6</option>
            <option value="sem8"> Semester 8</option>
            <option value="sem10">Semester 10</option>
          </select>
        </div>

        <div className="my-6 flex flex-col">
          <label
            className="py-1 text-xs my-1 sm:text-[16px] md:text-[16px] lg:text-[17px]"
            htmlFor=""
          >
            Pilih Semester Untuk S2 (Optional){" "}
            <span className="text-red-600">*</span>
          </label>
          <select
            className="bg-red-500 text-white p-1 w-[120px] min-[360px]:w-[120px] min-[480px]:h-[30px] sm:w-[120px] sm:h-[35px] md:w-[120px] lg:w-[120px]  text-xs sm:text-[15px] md:text-[15px] lg:text-[16px] border-red-800 border-2 rounded-lg"
            name=""
            value={semS2}
            onChange={(e) => setSemS2(e.target.value)}
            id=""
          >
            Semester S2
            <option>Pilih Semester</option>
            <option value="sem4">Semester 4</option>
            <option value="sem6"> Semester 6</option>
          </select>
        </div>

        <div className="my-6 flex flex-col">
          <label
            className="py-1 text-xs my-1 sm:text-[16px] md:text-[16px] lg:text-[17px]"
            htmlFor=""
          >
            Pilih Semester Untuk S3 (Optional)
            <span className="text-red-600">*</span>
          </label>
          <select
            className="bg-red-500 text-white p-1 w-[120px] min-[360px]:w-[120px] min-[480px]:h-[30px] sm:w-[120px] sm:h-[35px] md:w-[120px] lg:w-[120px]  text-xs sm:text-[15px] md:text-[15px] lg:text-[16px] border-red-800 border-2 rounded-lg"
            name=""
            value={semS3}
            onChange={(e) => setSemS3(e.target.value)}
            id=""
          >
            Semester S3
            <option>Pilih Semester</option>
            <option value="sem6">Semester 6</option>
            <option value="sem8">Semester 8</option>
            <option value="sem10">Semester 10</option>
          </select>
        </div>

        <div className="my-6 flex flex-col">
          <label
            className="py-1 text-xs my-1 sm:text-[16px] md:text-[16px] lg:text-[17px]"
            htmlFor=""
          >
            Pilih Semester Untuk Diploma (Optional){" "}
            <span className="text-red-600">*</span>
          </label>
          <select
            className="bg-red-500 text-white p-1 w-[120px] min-[360px]:w-[120px] min-[480px]:h-[30px] sm:w-[120px] sm:h-[35px] md:w-[120px] lg:w-[120px]  text-xs sm:text-[15px] md:text-[15px] lg:text-[16px] border-red-800 border-2 rounded-lg"
            name=""
            value={semDiploma}
            onChange={(e) => setSemDiploma(e.target.value)}
            id=""
          >
            Semester Diploma
            <option>Pilih Semester</option>
            <option value="sem4">Semester 4</option>
            <option value="sem6">Semester 6</option>
          </select>
        </div>
        {/* File Uploads */}

        <div className="my-6">
          <h1 className="text-xs my-1 sm:text-[16px] md:text-[16px] lg:text-[17px]">
            KTP.pdf<span className="text-red-600">*</span>
          </h1>

          <input
            // value={ktp}
            onChange={(e) => loadImage(e, "ktp")}
            className="file-input  w-full max-sm:h-[35px] max-w-xs"
            type="file"
            name="ktp"
            id="ktp"
            placeholder="ktp.pdf"
          />
        </div>
        <div className="my-6">
          <h1 className="text-xs my-1 sm:text-[16px] md:text-[16px] lg:text-[17px]">
            Foto Kopi Kartu Hasil Studi <span className="text-red-600">*</span>
          </h1>

          <input
            onChange={(e) => loadImage(e, "fkkhs")}
            // value={fkkhs}
            className="file-input w-full max-sm:h-[35px] max-w-xs"
            type="file"
            name="khs"
            id="khs"
          />
        </div>
        <div className="my-6">
          <h1 className="text-xs my-1 sm:text-[16px] md:text-[16px] lg:text-[17px]">
            Surat Permohonan ke Bupati Minsel{" "}
            <span className="text-red-600">*</span>
          </h1>

          <input
            onChange={(e) => loadImage(e, "spbupati")}
            // value={spbupati}
            className="file-input w-full max-sm:h-[35px] max-w-xs"
            type="file"
            name="spbupati"
            id="spbupati"
          />
        </div>
        <div className="my-6">
          <h1 className="text-xs my-1 sm:text-[16px] md:text-[16px] lg:text-[17px]">
            Biodata Pemohon <span className="text-red-600">*</span>
          </h1>

          <input
            onChange={(e) => loadImage(e, "biopemo")}
            // value={biopemo}
            className="file-input w-full max-sm:h-[35px] max-w-xs"
            type="file"
            name="ktp"
            id="ktp"
          />
        </div>
        <div className="my-6">
          <h1 className="text-xs my-1 sm:text-[16px] md:text-[16px] lg:text-[17px]">
            Pas Foto Warna (3x4) <span className="text-red-600">*</span>
          </h1>

          <input
            onChange={(e) => loadImage(e, "pasfoto")}
            // value={pasfoto}
            className="file-input w-full max-sm:h-[35px] max-w-xs"
            type="file"
            name="pasfoto"
            id="pasfoto"
          />
        </div>
        <div className="my-6">
          <h1 className="text-xs my-1 sm:text-[16px] md:text-[16px] lg:text-[17px]">
            Surat Pernyataan Belum Pernah Menerima Beasiswa
            <span className="text-red-600">*</span>
          </h1>

          <input
            onChange={(e) => loadImage(e, "suratbelumbea")}
            // value={suratbelumbea}
            className="file-input w-full max-sm:h-[35px] max-w-xs"
            type="file"
            name="suratbelumbea"
            id="suratbelumbea"
          />
        </div>
        <div className="my-6">
          <h1 className="text-xs my-1 sm:text-[16px] md:text-[16px] lg:text-[17px]">
            Surat Pernyataan Mutlak Penggunaan Data BPP “Minsel Maju”
            <span className="text-red-600">*</span>
          </h1>

          <input
            onChange={(e) => loadImage(e, "suratbpp")}
            // value={suratbpp}
            className="file-input w-full max-sm:h-[35px] max-w-xs"
            type="file"
            name="suratbpp"
            id="suratbpp"
          />
        </div>
        <div className="my-6">
          <h1 className="text-xs my-1 sm:text-[16px] md:text-[16px] lg:text-[17px]">
            Surat Keterangan dari Pimpinan Fakultas/Prodi/Jurusan
            <span className="text-red-600">*</span>
          </h1>

          <input
            onChange={(e) => loadImage(e, "suratketpim")}
            // value={suratketpim}
            className="file-input w-full max-sm:h-[35px] max-w-xs"
            type="file"
            name="suratketpim"
            id="suratketpim"
          />
        </div>
        <div className="my-6">
          <h1 className="text-xs my-1 sm:text-[16px] md:text-[16px] lg:text-[17px]">
            Foto kopi kartu Mahasiswa <span className="text-red-600">*</span>
          </h1>

          <input
            onChange={(e) => loadImage(e, "fotokopimaha")}
            // value={fotokopimaha}
            className="file-input w-full max-sm:h-[35px] max-w-xs"
            type="file"
            name="fotokopimaha"
            id="fotokopimaha"
          />
        </div>
        <div className="my-6">
          <h1 className="text-xs my-1 sm:text-[16px] md:text-[16px] lg:text-[17px]">
            Foto kopi Kartu Keluarga <span className="text-red-600">*</span>
          </h1>

          <input
            onChange={(e) => loadImage(e, "fotokopikk")}
            // value={fotokopikk}
            className="file-input w-full max-sm:h-[35px] max-w-xs"
            type="file"
            name="fotokopikk"
            id="fotokopikk"
          />
        </div>
        <div className="my-6">
          <h1 className="text-xs my-1 sm:text-[16px] md:text-[16px] lg:text-[17px]">
            Foto kopi proposal penelitian/tugas akhir/skripsi/tesis disertai
            tanda tangan dosen pembimbing{" "}
            <span className="text-red-600">*</span>
          </h1>
          <input
            onChange={(e) => loadImage(e, "fotokopipropo")}
            // value={fotokopipropo}
            className="file-input w-full max-sm:h-[35px] max-w-xs"
            type="file"
            name="fotokopipropo"
            id="fotokopipropo"
          />{" "}
        </div>

        {/* Submission Button */}

        <button
          type="submit"
          className="flex items-center bg-white hover:bg-red-600 h-12 w-56 border-2 border-red-900 rounded-xl justify-center"
        >
          SIMPAN
        </button>
      </form>
    </div>
  );
};

export default FormBeasiswa;
