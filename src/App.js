import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginAdmin from "./pages/admin/LoginAdmin";
import HomePage from "./pages/user/HomePage";
import ProdukHukum from "./pages/user/ProdukHukum";

import Renstra from "./pages/user/Renstra";
import SejarahDinas from "./pages/user/SejarahDinas";
import StrukturDinas from "./pages/user/StrukturDinas";
import Tupoksi from "./pages/user/Tupoksi";
import VisiMisi from "./pages/user/VisiMisi";

import TampilanBerita from "./pages/user/TampilanBerita";
import FormBeasiswa from "./pages/user/FormBeasiswa";

import AllBerita from "./pages/user/AllBerita";
import AllGaleri from "./pages/user/AllGaleri";
import AllProgram from "./pages/user/AllProgram";
import { Pagination } from "swiper/modules";

import AllBeritaOlahraga from "./pages/user/AllBeritaOlahraga";

import TampilanBeritaOlahraga from "./pages/user/TampilanBeritaOlahraga";
import AllProgramOlahraga from "./pages/user/AllProgramOlahraga";
import TampilanProgram from "./pages/user/TampilanProgram";
import TampilanProgramOlahraga from "./pages/user/TampilanProgramOlahraga";
import DashboardKadis from "./components/kadis/DashboardKadis";
import AddBeritaKadis from "./components/kadis/AddBerita";
import AddBeritaOlahragaKadis from "./components/kadis/AddBeritaOlahraga";
import AddProgramKadis from "./components/kadis/AddProgram";
import AddProgramOlahragaKadis from "./components/kadis/AddProgramOlahraga";
import FormAddBeritaKadis from "./components/kadis/FormAddBerita";
import FormAddBeritaOlahragaKadis from "./components/kadis/FormAddBeritaOlahraga";
import FormAddProgramKadis from "./components/kadis/FormAddProgram";
import FormAddProgramOlahragaKadis from "./components/kadis/FormAddProgramOlahraga";
import EditProgramKadis from "./components/kadis/EditProgram";
import EditProgramOlahragaKadis from "./components/kadis/EditProgramOlahraga";
import EditBeritaKadis from "./components/kadis/EditBerita";
import EditBeritaOlahragaKadis from "./components/kadis/EditBeritaOlahraga";
import DataPendaftarKadis from "./components/kadis/DataPendaftar";
import DetailPendaftarKadis from "./components/kadis/DetailPendaftar";
import AddGaleriKadis from "./components/kadis/AddGaleri";
import FormAddGaleriKadis from "./components/kadis/FormAddGaleri";
import TampilanBeritaKadis from "./components/kadis/TampilanBeritaKadis";
import TampilanBeritaOlahragaKadis from "./components/kadis/TampilanBeritaOlahragaKadis";

import DashboardPemuda from "./components/pemuda/DashboardPemuda";
import AddBeritapemuda from "./components/pemuda/AddBerita";
import AddProgrampemuda from "./components/pemuda/AddProgram";
import FormAddBeritapemuda from "./components/pemuda/FormAddBerita";
import FormAddProgrampemuda from "./components/pemuda/FormAddProgram";
import EditProgrampemuda from "./components/pemuda/EditProgram";
import EditBeritapemuda from "./components/pemuda/EditBerita";
import DataPendaftarpemuda from "./components/pemuda/DataPendaftar";
import DetailPendaftarpemuda from "./components/pemuda/DetailPendaftar";
import TampilanBeritaPemuda from "./components/pemuda/TampilanBeritaPemuda";

import DashboardOlahraga from "./components/olahraga/DashboardOlahraga";
import AddBeritaOlahraga from "./components/olahraga/AddBeritaOlahraga";
import AddProgramOlahraga from "./components/olahraga/AddProgramOlahraga";
import FormAddBeritaOlahraga from "./components/olahraga/FormAddBeritaOlahraga";
import FormAddProgramOlahraga from "./components/olahraga/FormAddProgramOlahraga";
import EditProgramOlahraga from "./components/olahraga/EditProgramOlahraga";
import EditBeritaOlahraga from "./components/olahraga/EditBeritaOlahraga";
import TampilanBeritaOlahragaOlahraga from "./components/olahraga/TampilanBeritaOlahraga";

import AddForumOlahraga from "./components/kadis/AddForum";

import HakAksesAdmin from "./components/HakAksesAdmin";

import MainForum from "./pages/admin/MainForum";

import FormAddForum from "./components/kadis/FormAddForum";

import SuratKadis from "./components/kadis/SuratKadis";
import FormAddSuratKadis from "./components/kadis/FormAddSuratKadis";
import SuratSekretariat from "./components/kadis/SuratSekretariat";
import FormAddSuratSekretariat from "./components/kadis/FormAddSuratSekretariat";
import SuratOlahragaKadis from "./components/kadis/SuratOlahraga";
import FormAddSuratOlahragaKadis from "./components/kadis/FormAddSuratOlahraga";
import SuratPemudaKadis from "./components/kadis/SuratPemuda";
import FormAddSuratPemudaKadis from "./components/kadis/FormAddSuratPemuda";

import SuratOlahraga from "./components/olahraga/SuratOlahraga";
import FormAddSuratOlahraga from "./components/olahraga/FormAddSuratOlahraga";

import SuratPemuda from "./components/pemuda/SuratPemuda";
import FormAddSuratPemuda from "./components/pemuda/FormAddSuratPemuda";

import TampilanProgramBeasiswa from "./pages/user/TampilanProgramBeasiswa";
import Lakip from "./pages/user/Lakip";
import Dokumen from "./pages/user/Dokumen";
import Rkt from "./pages/user/Rkt";

function App() {
  return (
    <div className="">
      <Routes>
        {/* USER */}
        <Route path="/" element={<HomePage />} />
        <Route path="/produk-hukum" element={<ProdukHukum />} />
        <Route
          path="/tampilan-program-beasiswa"
          element={<TampilanProgramBeasiswa />}
        />
        <Route path="/tampilan-program/:id" element={<TampilanProgram />} />
        <Route
          path="/tampilan-program-olahraga/:id"
          element={<TampilanProgramOlahraga />}
        />
        <Route path="/dokumen" element={<Dokumen />} />
        <Route path="/dokumen/rkt" element={<Rkt />} />
        <Route path="/renstra" element={<Renstra />} />
        <Route path="/sejarah-dinas" element={<SejarahDinas />} />
        <Route path="/struktur-dinas" element={<StrukturDinas />} />
        <Route path="/tupoksi" element={<Tupoksi />} />
        <Route path="/visi-misi" element={<VisiMisi />} />
        <Route path="/tampilan-berita/:id" element={<TampilanBerita />} />
        <Route path="/form-beasiswa" element={<FormBeasiswa />} />

        <Route path="/tes" element={<Pagination />} />
        <Route path="/all-berita" element={<AllBerita />} />
        <Route path="/all-galeri" element={<AllGaleri />} />
        <Route path="/all-program" element={<AllProgram />} />
        <Route path="/all-program-olahraga" element={<AllProgramOlahraga />} />
        <Route path="/all-berita-olahraga" element={<AllBeritaOlahraga />} />
        <Route
          path="/tampilan-berita-olahraga/:id"
          element={<TampilanBeritaOlahraga />}
        />

        {/* Login */}
        <Route path="/login" element={<LoginAdmin />} />

        {/* Admin kadis */}
        <Route path="/hak-akses-kadis" element={<HakAksesAdmin />} />
        <Route path="/home-admin-kadis" element={<DashboardKadis />} />
        <Route path="/add-berita-kadis" element={<AddBeritaKadis />} />
        <Route
          path="/add-berita-olahraga-kadis"
          element={<AddBeritaOlahragaKadis />}
        />
        <Route path="/add-program-kadis" element={<AddProgramKadis />} />
        <Route
          path="/add-program-olahraga-kadis"
          element={<AddProgramOlahragaKadis />}
        />
        <Route path="/form-addberita-kadis" element={<FormAddBeritaKadis />} />
        <Route
          path="/form-addberita-olahraga-kadis"
          element={<FormAddBeritaOlahragaKadis />}
        />
        <Route
          path="/form-addprogram-kadis"
          element={<FormAddProgramKadis />}
        />
        <Route
          path="/form-addprogram-olahraga-kadis"
          element={<FormAddProgramOlahragaKadis />}
        />
        <Route
          path="/add-berita-kadis/edit-berita-kadis/:id"
          element={<EditBeritaKadis />}
        />
        <Route
          path="/add-berita-olahraga-kadis/edit-berita-olahraga-kadis/:id"
          element={<EditBeritaOlahragaKadis />}
        />
        <Route
          path="/add-program-kadis/edit-program-kadis/:id"
          element={<EditProgramKadis />}
        />
        <Route
          path="/add-program-olahraga-kadis/edit-program-olahraga-kadis/:id"
          element={<EditProgramOlahragaKadis />}
        />

        <Route path="/data-pendaftar-kadis" element={<DataPendaftarKadis />} />
        <Route
          path="/detail-pendaftar-kadis/:id"
          element={<DetailPendaftarKadis />}
        />
        <Route path="/add-galeri-kadis" element={<AddGaleriKadis />} />
        <Route path="/form-addgaleri-kadis" element={<FormAddGaleriKadis />} />
        <Route path="/surat-kerja-kadis" element={<SuratKadis />} />
        <Route path="/form-surat-kerja-kadis" element={<FormAddSuratKadis />} />
        <Route path="/surat-kerja-sekretariat" element={<SuratSekretariat />} />
        <Route
          path="/form-surat-kerja-sekretariat"
          element={<FormAddSuratSekretariat />}
        />
        <Route
          path="/surat-kerja-olahraga-kadis"
          element={<SuratOlahragaKadis />}
        />
        <Route
          path="/form-surat-kerja-olahraga-kadis"
          element={<FormAddSuratOlahragaKadis />}
        />

        <Route
          path="/surat-kerja-pemuda-kadis"
          element={<SuratPemudaKadis />}
        />
        <Route
          path="/form-surat-kerja-pemuda-kadis"
          element={<FormAddSuratPemudaKadis />}
        />

        <Route
          path="/tampilan-berita-kadis/:id"
          element={<TampilanBeritaKadis />}
        />
        <Route
          path="/tampilan-berita-olahraga-kadis/:id"
          element={<TampilanBeritaOlahragaKadis />}
        />

        {/* Admin pemuda */}
        <Route path="/home-admin-pemuda" element={<DashboardPemuda />} />
        <Route path="/add-berita-pemuda" element={<AddBeritapemuda />} />

        <Route path="/add-program-pemuda" element={<AddProgrampemuda />} />

        <Route
          path="/form-addberita-pemuda"
          element={<FormAddBeritapemuda />}
        />

        <Route
          path="/form-addprogram-pemuda"
          element={<FormAddProgrampemuda />}
        />

        <Route
          path="/add-berita-pemuda/edit-berita-pemuda/:id"
          element={<EditBeritapemuda />}
        />

        <Route
          path="/add-program-pemuda/edit-program-pemuda/:id"
          element={<EditProgrampemuda />}
        />

        <Route
          path="/data-pendaftar-pemuda"
          element={<DataPendaftarpemuda />}
        />
        <Route
          path="/detail-pendaftar-pemuda/:id"
          element={<DetailPendaftarpemuda />}
        />
        <Route
          path="/tampilan-berita-pemuda/:id"
          element={<TampilanBeritaPemuda />}
        />

        <Route path="/surat-kerja-pemuda" element={<SuratPemuda />} />
        <Route
          path="/form-surat-kerja-pemuda"
          element={<FormAddSuratPemuda />}
        />

        {/* Admin olahraga */}
        <Route path="/home-admin-olahraga" element={<DashboardOlahraga />} />
        <Route path="/add-berita-olahraga" element={<AddBeritaOlahraga />} />
        <Route path="/add-forum/:id" element={<AddForumOlahraga />} />

        <Route path="/add-program-olahraga" element={<AddProgramOlahraga />} />

        <Route
          path="/form-addberita-olahraga"
          element={<FormAddBeritaOlahraga />}
        />

        <Route
          path="/form-addprogram-olahraga"
          element={<FormAddProgramOlahraga />}
        />

        <Route
          path="/add-berita-olahraga/edit-berita-olahraga/:id"
          element={<EditBeritaOlahraga />}
        />

        <Route
          path="/add-program-olahraga/edit-program-olahraga/:id"
          element={<EditProgramOlahraga />}
        />
        <Route
          path="/tampilan-berita-olahraga-olahraga/:id"
          element={<TampilanBeritaOlahragaOlahraga />}
        />

        <Route path="/surat-kerja-olahraga" element={<SuratOlahraga />} />
        <Route
          path="/form-surat-kerja-olahraga"
          element={<FormAddSuratOlahraga />}
        />

        {/* Forum  */}
        <Route path="/forum/*" element={<MainForum />}></Route>
        <Route path="/form-add-forum" element={<FormAddForum />} />

        <Route path="pagesAdmin/*" element={<DashboardKadis />}></Route>
      </Routes>
    </div>
  );
}

export default App;
