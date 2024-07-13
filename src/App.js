import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoginAdmin from "./pages/admin/LoginAdmin";
import HomePage from "./pages/user/HomePage";

// import Renstra from "./pages/user/Renstra";
// import SejarahDinas from "./pages/user/SejarahDinas";
// import StrukturDinas from "./pages/user/StrukturDinas";
// import Tupoksi from "./pages/user/Tupoksi";
// import VisiMisi from "./pages/user/VisiMisi";

// import TampilanBerita from "./pages/user/TampilanBerita";
// import FormBeasiswa from "./pages/user/FormBeasiswa";

// import AllBerita from "./pages/user/AllBerita";
// import AllGaleri from "./pages/user/AllGaleri";
// import AllProgram from "./pages/user/AllProgram";
// import { Pagination } from "swiper/modules";

// import AllBeritaOlahraga from "./pages/user/AllBeritaOlahraga";

// import TampilanBeritaOlahraga from "./pages/user/TampilanBeritaOlahraga";
// import AllProgramOlahraga from "./pages/user/AllProgramOlahraga";
// import TampilanProgram from "./pages/user/TampilanProgram";
// import TampilanProgramOlahraga from "./pages/user/TampilanProgramOlahraga";
import DashboardKadis from "./components/kadis/DashboardKadis";
// import AddBeritaKadis from "./components/kadis/AddBerita";
// import AddBeritaOlahragaKadis from "./components/kadis/AddBeritaOlahraga";
// import AddProgramKadis from "./components/kadis/AddProgram";
// import AddProgramOlahragaKadis from "./components/kadis/AddProgramOlahraga";
// import FormAddBeritaKadis from "./components/kadis/FormAddBerita";
// import FormAddBeritaOlahragaKadis from "./components/kadis/FormAddBeritaOlahraga";
// import FormAddProgramKadis from "./components/kadis/FormAddProgram";
// import FormAddProgramOlahragaKadis from "./components/kadis/FormAddProgramOlahraga";
// import EditProgramKadis from "./components/kadis/EditProgram";
// import EditProgramOlahragaKadis from "./components/kadis/EditProgramOlahraga";
// import EditBeritaKadis from "./components/kadis/EditBerita";
// import EditBeritaOlahragaKadis from "./components/kadis/EditBeritaOlahraga";
// import DataPendaftarKadis from "./components/kadis/DataPendaftar";
// import DetailPendaftarKadis from "./components/kadis/DetailPendaftar";
// import AddGaleriKadis from "./components/kadis/AddGaleri";
// import FormAddGaleriKadis from "./components/kadis/FormAddGaleri";
// import TampilanBeritaKadis from "./components/kadis/TampilanBeritaKadis";
// import TampilanBeritaOlahragaKadis from "./components/kadis/TampilanBeritaOlahragaKadis";

// import DashboardPemuda from "./components/pemuda/DashboardPemuda";
// import AddBeritapemuda from "./components/pemuda/AddBerita";
// import AddProgrampemuda from "./components/pemuda/AddProgram";
// import FormAddBeritapemuda from "./components/pemuda/FormAddBerita";
// import FormAddProgrampemuda from "./components/pemuda/FormAddProgram";
// import EditProgrampemuda from "./components/pemuda/EditProgram";
// import EditBeritapemuda from "./components/pemuda/EditBerita";
// import DataPendaftarpemuda from "./components/pemuda/DataPendaftar";
// import DetailPendaftarpemuda from "./components/pemuda/DetailPendaftar";
// import TampilanBeritaPemuda from "./components/pemuda/TampilanBeritaPemuda";

// import DashboardOlahraga from "./components/olahraga/DashboardOlahraga";
// import AddBeritaOlahraga from "./components/olahraga/AddBeritaOlahraga";
// import AddProgramOlahraga from "./components/olahraga/AddProgramOlahraga";
// import FormAddBeritaOlahraga from "./components/olahraga/FormAddBeritaOlahraga";
// import FormAddProgramOlahraga from "./components/olahraga/FormAddProgramOlahraga";
// import EditProgramOlahraga from "./components/olahraga/EditProgramOlahraga";
// import EditBeritaOlahraga from "./components/olahraga/EditBeritaOlahraga";
// import TampilanBeritaOlahragaOlahraga from "./components/olahraga/TampilanBeritaOlahraga";

// import AddForumOlahraga from "./components/kadis/AddForum";

// import HakAksesAdmin from "./components/HakAksesAdmin";

// import FormAddForum from "./components/kadis/FormAddForum";

// import SuratKadis from "./components/kadis/SuratKadis";
// import FormAddSuratKadis from "./components/kadis/FormAddSuratKadis";
// import SuratSekretariat from "./components/kadis/SuratSekretariat";
// import FormAddSuratSekretariat from "./components/kadis/FormAddSuratSekretariat";
// import SuratOlahragaKadis from "./components/kadis/SuratOlahraga";
// import FormAddSuratOlahragaKadis from "./components/kadis/FormAddSuratOlahraga";
// import SuratPemudaKadis from "./components/kadis/SuratPemuda";
// import FormAddSuratPemudaKadis from "./components/kadis/FormAddSuratPemuda";

// import SuratOlahraga from "./components/olahraga/SuratOlahraga";
// import FormAddSuratOlahraga from "./components/olahraga/FormAddSuratOlahraga";

// import SuratPemuda from "./components/pemuda/SuratPemuda";
// import FormAddSuratPemuda from "./components/pemuda/FormAddSuratPemuda";

// import TampilanProgramBeasiswa from "./pages/user/TampilanProgramBeasiswa";
// import Lakip from "./pages/user/Lakip";
// import Dokumen from "./pages/user/Dokumen";

const LazyAllBerita = React.lazy(() => import("./pages/user/AllBerita"));
const LazyAllGaleri = React.lazy(() => import("./pages/user/AllGaleri"));
const LazyAllProgram = React.lazy(() => import("./pages/user/AllProgram"));
const LazyAllProgramOlahraga = React.lazy(() =>
  import("./pages/user/AllProgramOlahraga")
);
const LazyAllBeritaolahraga = React.lazy(() =>
  import("./pages/user/AllBeritaOlahraga")
);
const LazyTampilanBeritaOlahraga = React.lazy(() =>
  import("./pages/user/TampilanBeritaOlahraga")
);
const LazyTampilanProgram = React.lazy(() =>
  import("./pages/user/TampilanProgram")
);
const LazyTampilanProgramOlahraga = React.lazy(() =>
  import("./pages/user/TampilanProgramOlahraga")
);
const LazyProdukHukum = React.lazy(() => import("./pages/user/ProdukHukum"));
const LazyTampilanProgramBeasiswa = React.lazy(() =>
  import("./pages/user/TampilanProgramBeasiswa")
);
const LazyDokumen = React.lazy(() => import("./pages/user/Dokumen"));
const LazySejarahDinas = React.lazy(() => import("./pages/user/SejarahDinas"));
const LazyStrukturDinas = React.lazy(() =>
  import("./pages/user/StrukturDinas")
);
const LazyTupoksi = React.lazy(() => import("./pages/user/Tupoksi"));
const LazyVisiMisi = React.lazy(() => import("./pages/user/VisiMisi"));
const LazyTampilanBerita = React.lazy(() =>
  import("./pages/user/TampilanBerita")
);

// const LazyDashboardKadis = React.lazy(() =>
//   import("./components/kadis/DashboardKadis")
// );

const LazyFormBeasiswa = React.lazy(() => import("./pages/user/FormBeasiswa"));

const LazyAddBeritaKadis = React.lazy(() =>
  import("./components/kadis/AddBerita")
);

const LazyAddBeritaOlahragaKadis = React.lazy(() =>
  import("./components/kadis/AddBeritaOlahraga")
);

const LazyFormAddBeritaKadis = React.lazy(() =>
  import("./components/kadis/FormAddBerita")
);

const LazyFormAddBeritaOlahragaKadis = React.lazy(() =>
  import("./components/kadis/FormAddBeritaOlahraga")
);
const LazyFormAddProgramKadis = React.lazy(() =>
  import("./components/kadis/FormAddProgram")
);
const LazyFormAddProgramOlahragaKadis = React.lazy(() =>
  import("./components/kadis/FormAddProgramOlahraga")
);
const LazyAddProgramKadis = React.lazy(() =>
  import("./components/kadis/AddProgram")
);
const LazyAddProgramOlahragaKadis = React.lazy(() =>
  import("./components/kadis/AddProgramOlahraga")
);

const LazyEditProgramKadis = React.lazy(() =>
  import("./components/kadis/EditProgram")
);

const LazyEditProgramOlahragaKadis = React.lazy(() =>
  import("./components/kadis/EditProgramOlahraga")
);
const LazyEditBeritaKadis = React.lazy(() =>
  import("./components/kadis/EditBerita")
);
const LazyEditBeritaOlahragaKadis = React.lazy(() =>
  import("./components/kadis/EditBeritaOlahraga")
);
const LazyDataPendaftarKadis = React.lazy(() =>
  import("./components/kadis/DataPendaftar")
);
const LazyDetailPendaftarKadis = React.lazy(() =>
  import("./components/kadis/DetailPendaftar")
);
const LazyAddGaleriKadis = React.lazy(() =>
  import("./components/kadis/AddGaleri")
);
const LazyFormAddGaleriKadis = React.lazy(() =>
  import("./components/kadis/FormAddGaleri")
);
const LazyTammpilanBeritaKadis = React.lazy(() =>
  import("./components/kadis/TampilanBeritaKadis")
);
const LazyTampilanBeritaOlahragaKadis = React.lazy(() =>
  import("./components/kadis/TampilanBeritaOlahragaKadis")
);
const LazySuratKadis = React.lazy(() =>
  import("./components/kadis/SuratKadis")
);
const LazyFormAddSuratKadis = React.lazy(() =>
  import("./components/kadis/FormAddSuratKadis")
);
const LazySuratSekretariat = React.lazy(() =>
  import("./components/kadis/SuratSekretariat")
);
const LazyFormAddSuratSekretariat = React.lazy(() =>
  import("./components/kadis/FormAddSuratSekretariat")
);
const LazySuratOlahraga = React.lazy(() =>
  import("./components/kadis/SuratOlahraga")
);
const LazyFormAddSuratOlahraga = React.lazy(() =>
  import("./components/kadis/FormAddSuratOlahraga")
);
const LazySuratPemuda = React.lazy(() =>
  import("./components/kadis/SuratPemuda")
);
const LazyFormAddSuratPemuda = React.lazy(() =>
  import("./components/kadis/FormAddSuratPemuda")
);

function App() {
  return (
    <div className="">
      <Routes>
        {/* USER */}
        <Route path="/" element={<HomePage />} />
        <Route
          path="/produk-hukum"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-auto">
                  <span className="loading loading-spinner loading-lg">
                    LOADING
                  </span>
                </div>
              }
            >
              <LazyProdukHukum />
            </Suspense>
          }
        />
        <Route
          path="/tampilan-program-beasiswa"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-auto">
                  <span className="loading loading-spinner loading-lg">
                    LOADING
                  </span>
                </div>
              }
            >
              <LazyTampilanProgramBeasiswa />
            </Suspense>
          }
        />

        <Route
          path="/tampilan-program/:id"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-auto">
                  <span className="loading loading-spinner loading-lg">
                    LOADING
                  </span>
                </div>
              }
            >
              <LazyTampilanProgram />
            </Suspense>
          }
        />

        <Route
          path="/tampilan-program-olahraga/:id"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-auto">
                  <span className="loading loading-spinner loading-lg">
                    LOADING
                  </span>
                </div>
              }
            >
              <LazyTampilanProgramOlahraga />
            </Suspense>
          }
        />
        <Route
          path="/dokumen"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-auto">
                  <span className="loading loading-spinner loading-lg">
                    LOADING
                  </span>
                </div>
              }
            >
              <LazyDokumen />
            </Suspense>
          }
        />

        <Route
          path="/sejarah-dinas"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-auto">
                  <span className="loading loading-spinner loading-lg">
                    LOADING
                  </span>
                </div>
              }
            >
              <LazySejarahDinas />
            </Suspense>
          }
        />
        <Route
          path="/struktur-dinas"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-auto">
                  <span className="loading loading-spinner loading-lg">
                    LOADING
                  </span>
                </div>
              }
            >
              <LazyStrukturDinas />
            </Suspense>
          }
        />
        <Route
          path="/tupoksi"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-auto">
                  <span className="loading loading-spinner loading-lg">
                    LOADING
                  </span>
                </div>
              }
            >
              <LazyTupoksi />
            </Suspense>
          }
        />
        <Route
          path="/visi-misi"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-auto">
                  <span className="loading loading-spinner loading-lg">
                    LOADING
                  </span>
                </div>
              }
            >
              <LazyVisiMisi />
            </Suspense>
          }
        />
        <Route
          path="/tampilan-berita/:id"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-auto">
                  <span className="loading loading-spinner loading-lg">
                    LOADING
                  </span>
                </div>
              }
            >
              <LazyTampilanBerita />
            </Suspense>
          }
        />
        <Route
          path="/form-beasiswa"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-auto">
                  <span className="loading loading-spinner loading-lg">
                    LOADING
                  </span>
                </div>
              }
            >
              <LazyFormBeasiswa />
            </Suspense>
          }
        />

        {/* <Route path="/tes" element={<Pagination />} /> */}
        <Route
          path="/all-berita"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-auto">
                  <span className="loading loading-spinner loading-lg">
                    LOADING
                  </span>
                </div>
              }
            >
              <LazyAllBerita />
            </Suspense>
          }
        />
        <Route
          path="/all-galeri"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-auto">
                  <span className="loading loading-spinner loading-lg">
                    LOADING
                  </span>
                </div>
              }
            >
              <LazyAllGaleri />
            </Suspense>
          }
        />
        <Route
          path="/all-program"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-auto">
                  <span className="loading loading-spinner loading-lg">
                    LOADING
                  </span>
                </div>
              }
            >
              <LazyAllProgram />
            </Suspense>
          }
        />
        <Route
          path="/all-program-olahraga"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-auto">
                  <span className="loading loading-spinner loading-lg">
                    LOADING
                  </span>
                </div>
              }
            >
              <LazyAllProgramOlahraga />
            </Suspense>
          }
        />

        <Route
          path="/all-berita-olahraga"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-auto">
                  <span className="loading loading-spinner loading-lg">
                    LOADING
                  </span>
                </div>
              }
            >
              <LazyAllBeritaolahraga />
            </Suspense>
          }
        />
        <Route
          path="/tampilan-berita-olahraga/:id"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-auto">
                  <span className="loading loading-spinner loading-lg">
                    LOADING
                  </span>
                </div>
              }
            >
              <LazyTampilanBeritaOlahraga />
            </Suspense>
          }
        />

        {/* Login */}
        <Route path="/login" element={<LoginAdmin />} />

        {/* Admin kadis */}
        {/* <Route path="/hak-akses-kadis" element={<HakAksesAdmin />} /> */}
        <Route
          path="/home-admin-kadis"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-auto">
                  <span className="loading loading-spinner loading-lg">
                    LOADING
                  </span>
                </div>
              }
            >
              <DashboardKadis />
            </Suspense>
          }
        />
        <Route
          path="/add-berita-kadis"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-auto">
                  <span className="loading loading-spinner loading-lg">
                    LOADING
                  </span>
                </div>
              }
            >
              <LazyAddBeritaKadis />
            </Suspense>
          }
        />
        <Route
          path="/add-berita-olahraga-kadis"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-auto">
                  <span className="loading loading-spinner loading-lg">
                    LOADING
                  </span>
                </div>
              }
            >
              <LazyAddBeritaOlahragaKadis />
            </Suspense>
          }
        />
        <Route
          path="/add-program-kadis"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-auto">
                  <span className="loading loading-spinner loading-lg">
                    LOADING
                  </span>
                </div>
              }
            >
              <LazyAddProgramKadis />
            </Suspense>
          }
        />

        <Route
          path="/add-program-olahraga-kadis"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-auto">
                  <span className="loading loading-spinner loading-lg">
                    LOADING
                  </span>
                </div>
              }
            >
              <LazyAddProgramOlahragaKadis />
            </Suspense>
          }
        />

        <Route
          path="/form-addberita-kadis"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-auto">
                  <span className="loading loading-spinner loading-lg">
                    LOADING
                  </span>
                </div>
              }
            >
              <LazyFormAddBeritaKadis />
            </Suspense>
          }
        />

        <Route
          path="/form-addberita-olahraga-kadis"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-auto">
                  <span className="loading loading-spinner loading-lg">
                    LOADING
                  </span>
                </div>
              }
            >
              <LazyFormAddBeritaOlahragaKadis />
            </Suspense>
          }
        />

        <Route
          path="/form-addprogram-kadis"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-auto">
                  <span className="loading loading-spinner loading-lg">
                    LOADING
                  </span>
                </div>
              }
            >
              <LazyFormAddProgramKadis />
            </Suspense>
          }
        />

        <Route
          path="/form-addprogram-olahraga-kadis"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-auto">
                  <span className="loading loading-spinner loading-lg">
                    LOADING
                  </span>
                </div>
              }
            >
              <LazyFormAddProgramOlahragaKadis />
            </Suspense>
          }
        />

        <Route
          path="/add-berita-kadis/edit-berita-kadis/:id"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-auto">
                  <span className="loading loading-spinner loading-lg">
                    LOADING
                  </span>
                </div>
              }
            >
              <LazyEditBeritaKadis />
            </Suspense>
          }
        />

        <Route
          path="/add-berita-olahraga-kadis/edit-berita-olahraga-kadis/:id"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-auto">
                  <span className="loading loading-spinner loading-lg">
                    LOADING
                  </span>
                </div>
              }
            >
              <LazyEditBeritaOlahragaKadis />
            </Suspense>
          }
        />

        <Route
          path="/add-program-kadis/edit-program-kadis/:id"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-auto">
                  <span className="loading loading-spinner loading-lg">
                    LOADING
                  </span>
                </div>
              }
            >
              <LazyEditProgramKadis />
            </Suspense>
          }
        />

        <Route
          path="/add-program-olahraga-kadis/edit-program-olahraga-kadis/:id"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-auto">
                  <span className="loading loading-spinner loading-lg">
                    LOADING
                  </span>
                </div>
              }
            >
              <LazyEditProgramOlahragaKadis />
            </Suspense>
          }
        />

        <Route
          path="/data-pendaftar-kadis"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-auto">
                  <span className="loading loading-spinner loading-lg">
                    LOADING
                  </span>
                </div>
              }
            >
              <LazyDataPendaftarKadis />
            </Suspense>
          }
        />

        <Route
          path="/detail-pendaftar-kadis/:id"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-auto">
                  <span className="loading loading-spinner loading-lg">
                    LOADING
                  </span>
                </div>
              }
            >
              <LazyDetailPendaftarKadis />
            </Suspense>
          }
        />

        <Route
          path="/add-galeri-kadis"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-auto">
                  <span className="loading loading-spinner loading-lg">
                    LOADING
                  </span>
                </div>
              }
            >
              <LazyAddGaleriKadis />
            </Suspense>
          }
        />
        <Route
          path="/form-addgaleri-kadis"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-auto">
                  <span className="loading loading-spinner loading-lg">
                    LOADING
                  </span>
                </div>
              }
            >
              <LazyFormAddGaleriKadis />
            </Suspense>
          }
        />

        <Route
          path="/surat-kerja-kadis"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-auto">
                  <span className="loading loading-spinner loading-lg">
                    LOADING
                  </span>
                </div>
              }
            >
              <LazySuratKadis />
            </Suspense>
          }
        />

        <Route
          path="/form-surat-kerja-kadis"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-auto">
                  <span className="loading loading-spinner loading-lg">
                    LOADING
                  </span>
                </div>
              }
            >
              <LazyFormAddSuratKadis />
            </Suspense>
          }
        />

        <Route
          path="/surat-kerja-sekretariat"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-auto">
                  <span className="loading loading-spinner loading-lg">
                    LOADING
                  </span>
                </div>
              }
            >
              <LazySuratSekretariat />
            </Suspense>
          }
        />
        <Route
          path="/form-surat-kerja-sekretariat"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-auto">
                  <span className="loading loading-spinner loading-lg">
                    LOADING
                  </span>
                </div>
              }
            >
              <LazyFormAddSuratSekretariat />
            </Suspense>
          }
        />

        <Route
          path="/surat-kerja-olahraga-kadis"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-auto">
                  <span className="loading loading-spinner loading-lg">
                    LOADING
                  </span>
                </div>
              }
            >
              <LazySuratOlahraga />
            </Suspense>
          }
        />

        <Route
          path="/form-surat-kerja-olahraga-kadis"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-auto">
                  <span className="loading loading-spinner loading-lg">
                    LOADING
                  </span>
                </div>
              }
            >
              <LazyFormAddSuratOlahraga />
            </Suspense>
          }
        />

        <Route
          path="/surat-kerja-pemuda-kadis"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-auto">
                  <span className="loading loading-spinner loading-lg">
                    LOADING
                  </span>
                </div>
              }
            >
              <LazySuratPemuda />
            </Suspense>
          }
        />

        <Route
          path="/form-surat-kerja-pemuda-kadis"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-auto">
                  <span className="loading loading-spinner loading-lg">
                    LOADING
                  </span>
                </div>
              }
            >
              <LazyFormAddSuratPemuda />
            </Suspense>
          }
        />

        <Route
          path="/tampilan-berita-kadis/:id"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-auto">
                  <span className="loading loading-spinner loading-lg">
                    LOADING
                  </span>
                </div>
              }
            >
              <LazyTammpilanBeritaKadis />
            </Suspense>
          }
        />

        <Route
          path="/tampilan-berita-olahraga-kadis/:id"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-auto">
                  <span className="loading loading-spinner loading-lg">
                    LOADING
                  </span>
                </div>
              }
            >
              <LazyTampilanBeritaOlahragaKadis />
            </Suspense>
          }
        />

        {/* Admin pemuda */}
        {/* <Route path="/home-admin-pemuda" element={<DashboardPemuda />} />
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
        {/* <Route path="/home-admin-olahraga" element={<DashboardOlahraga />} />
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
        {/* <Route path="/forum/*" element={<MainForum />}></Route> */}
        {/* <Route path="/form-add-forum" element={<FormAddForum />} />

        <Route path="pagesAdmin/*" element={<DashboardKadis />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
