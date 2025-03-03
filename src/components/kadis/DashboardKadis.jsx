import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";

import BgAdmin from "../../assets/img/bgnew.jpg";
import BeritaLogo from "../../assets/img/newspaper.png";
import ProgramLogo from "../../assets/img/checklist.png";
import BeasiswaLogo from "../../assets/img/education.png";
import GaleriLogo from "../../assets/img/image-galery.png";
import SuratLogo from "../../assets/img/mail.png";

const menuItems = [
  {
    path: "/add-berita-kadis",
    logo: BeritaLogo,
    label: "Berita dan Pengumuman Pemuda",
  },
  {
    path: "/add-berita-olahraga-kadis",
    logo: BeritaLogo,
    label: "Berita dan Pengumuman Olahraga",
  },
  { path: "/add-program-kadis", logo: ProgramLogo, label: "Program Pemuda" },
  {
    path: "/add-program-olahraga-kadis",
    logo: ProgramLogo,
    label: "Program Olahraga",
  },
  {
    path: "/data-pendaftar-kadis",
    logo: BeasiswaLogo,
    label: "Program Beasiswa",
  },
  { path: "/add-galeri-kadis", logo: GaleriLogo, label: "Galeri Dinas" },
  {
    path: "/surat-kerja-kadis",
    logo: SuratLogo,
    label: "Surat Bidang Kerja Kadis",
  },
  {
    path: "/surat-kerja-sekretariat",
    logo: SuratLogo,
    label: "Surat Bidang Kerja Sekretariat",
  },
  {
    path: "/surat-kerja-olahraga-kadis",
    logo: SuratLogo,
    label: "Surat Bidang Kerja Olahraga",
  },
  {
    path: "/surat-kerja-pemuda-kadis",
    logo: SuratLogo,
    label: "Surat Bidang Kerja Pemuda",
  },
];

const DashboardKadis = () => {
  return (
    <>
      <Header />
      <div
        style={{ backgroundImage: `url(${BgAdmin})` }}
        className="grid bg-auto bg-center bg-fixed grid-cols-1 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 place-items-center gap-4 py-10"
      >
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="px-20 py-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <Link to={item.path}>
              <img className="h-[200px]" src={item.logo} alt={item.label} />
              <p className="text-sm sm:text-lg lg:text-xl text-center mt-1 font-semibold">
                {item.label}
              </p>
            </Link>
          </button>
        ))}
      </div>
    </>
  );
};

export default DashboardKadis;
