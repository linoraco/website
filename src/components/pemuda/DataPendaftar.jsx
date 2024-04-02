import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { useReactToPrint } from "react-to-print";
import LogoPemkab from "../../assets/img/minsel_300x300.png";
import Header from "../Header";

const DataPendaftar = () => {
  const [pendaftar, setPendaftar] = useState([]);
  const [page, setPage] = useState(0);
  const limit = 10;
  let number = 10;
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");
  const ComponentPDF = useRef();

  const getPendaftar = async () => {
    const response = await axios.get(
      `http://localhost:4000/regprogram?search_query=${keyword}&page=${page}&limit=${limit}`
    );
    setPage(response.data.page);
    setPages(response.data.totalPage);
    setRows(response.data.totalRows);
    setPendaftar(response.data.result);
    console.log(response);
  };
  useEffect(() => {
    getPendaftar();
  }, [page, keyword]);

  const deletePendaftar = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/regprogram/${id}`
      );
      getPendaftar();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const changePage = ({ selected }) => {
    setPage(selected);
    const newNumber = 0 * page;
    number = newNumber;
    setMessage(
      selected === 9
        ? "Jika tidak menemukan data yang Anda cari, silahkan cari data dengan kata kunci spesifik!"
        : ""
    );
  };

  const searchData = (e) => {
    e.preventDefault();
    setPage(0);
    setMessage("");
    setKeyword(query);
  };

  const generateRowNumber = (index) => {
    return index + 1 + page * limit; // Calculate the correct row number
  };

  const generatePDF = useReactToPrint({
    content: () => ComponentPDF.current,
    documentTitle: "Userdata",
  });

  return (
    <div className="flex-col ">
      {/* <!-- navbar --> */}
      <Header />
      {/* <!-- navbar end --> */}
      <Link
        to={"/home-admin-pemuda"}
        className="flex items-start justify-center bg-red-500 w-[80px] p-3 rounded-br-xl"
      >
        Beranda
      </Link>
      {/* <!-- Content --> */}
      <div className="flex justify-center items-center">
        <h1 className="text-lg mt-20 sm:text-xl md:text-2xl  lg:text-3xl text-center">
          Data Pendaftar Program Beasiswa
        </h1>
      </div>
      <hr className="mx-20" />

      <div className="flex  justify-center items-start">
        <div className="flex flex-col items-center justify-center">
          <form
            onSubmit={searchData}
            className="flex justify-center items-center mt-10"
          >
            <div className="flex">
              <div className="border">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  type="text"
                  placeholder="ketik nama peserta"
                  className="input input-bordered  max-w-xl"
                />
              </div>
              <button type="submit" className="btn btn-outline btn-accent">
                Cari
              </button>
            </div>
          </form>

          <div ref={ComponentPDF} className="mx-[5%]">
            <div className="flex-col ">
              <div className="none pr-5 pl-5 pt-5 hidden pb-0 mb-1">
                <div className="headerprint justify-center p-3 flex border-b-2 border-b-black">
                  <img
                    src={LogoPemkab}
                    className="mr-3 w-[100px]"
                    alt="Logo Dinas"
                  />
                  <div
                    className="sub-print flex-col justify-center"
                    style={{ textAlign: "center" }}
                  >
                    <h1 className="text-lg font-bold">
                      Dinas Pemuda Dan Olahraga Kabupaten Minahasa Selatan
                    </h1>
                    <h2 className="text-sm">
                      JL.Bobara Kompleks TK Pembina Desa.Lopana Satu Kec.Amurang
                      Timur
                      <br />
                      Kabupaten Minasaha Selatan, Sulawesi Utara, Indonesia
                      <br />
                      <p>
                        Telp. (0432) 845215
                        <br />
                        Fax. (0432) 845220
                        <br />
                      </p>
                    </h2>
                  </div>
                </div>
                <div className="flex justify-center mt-5 mb-10">
                  <h1 className="font-bold text-xl">
                    HASIL SELEKSI PROGRAM BEASISWA 2023
                  </h1>
                </div>
              </div>

              <div className="overflow-x-auto ">
                <table className="table table-xs min-[320px]:mx-[35%] min-[360px]:mx-[30%]  min-[440px]:mx-[25%] sm:mx-[15%] md:mx-[10%] lg:mx-0 xl:mx-0   justify-center items-center   border mt-10 mb-10  border-black">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Nama Pendaftar</th>
                      <th>Tempat Tanggal Lahir</th>
                      <th>Fakultas/Universitas</th>
                      <th>NIM</th>
                      <th>IPK</th>
                      <th>alamat</th>
                      <th>No.HP</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pendaftar.map((item, index) => (
                      <tr key={item.uuid}>
                        <td className="p-2 lg:p-3 ">
                          {generateRowNumber(index)}
                        </td>
                        <td className="p-2 lg:p-3 ">{item.nama_reg}</td>
                        <td className="p-2 lg:p-3 ">
                          {item.tempat_tanggal_lahir}
                        </td>
                        <td className="p-2 lg:p-3 ">
                          {item.fakultas}/{item.universitas}
                        </td>
                        <td className="p-2 lg:p-3 ">{item.nim}</td>
                        <td className="p-2 lg:p-3 ">{item.IPK}</td>
                        <td className="p-2 lg:p-3 ">{item.alamat}</td>
                        <td className="p-2 lg:p-3 ">{item.no_telepon}</td>
                        <td className="p-2 lg:p-3 "></td>
                        <td className="p-2 lg:p-3 ">
                          <button className="aksi px-2 bg-slate-500 rounded-xl">
                            <Link to={`/detail-pendaftar-pemuda/${item.uuid}`}>
                              Details
                            </Link>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <button
            onClick={generatePDF}
            type="submit"
            className="btn btn-outline btn-accent"
          >
            PDF
          </button>
          <div className="flex justify-center mt-4 mb-10 rounded-sm">
            <nav
              className=""
              key={rows}
              role="navigation"
              aria-label="pagination"
            >
              <ReactPaginate
                previousLabel={"<"}
                nextLabel={">"}
                pageCount={Math.min(10, pages)}
                onPageChange={changePage}
                containerClassName={
                  "flex items-center h-8 -space-x-px text-sm "
                }
                pageLinkClassName={
                  "flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                }
                previousLinkClassName={
                  "flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                }
                nextLinkClassName={
                  "flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                }
                activeLinkClassName={
                  "z-10 flex items-center justify-center h-8 px-3 leading-tight border text-primary-600 border-primary-300 bg-primary-50 hover:bg-primary-100 hover:text-primary-700 "
                }
                disabledLinkClassName={"pagination-link is-disabled"}
              />
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataPendaftar;
