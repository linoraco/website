import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import Navbar from "../../components/ComponenRespon/Navbar";
import Bgdispora from "../../assets/img/bgdisporanewjpg.jpg";

const ProdukHukum = () => {
  return (
    <div className="flex-col ">
      {/* <!-- navbar --> */}
      <Navbar />
      {/* <!-- navbar end --> */}

      {/* <!-- content --> */}
      <div
        style={{ backgroundImage: `url(${Bgdispora})` }}
        className="flex justify-center items-center bg-auto bg-center py-24 bg-fixed"
      >
        <h1 className="text-3xl max-md:text-xl text-white text-center font-bold">
          Produk Hukum
        </h1>
      </div>

      <hr className="mx-20" />

      <br />
      <br />
      {/* <!-- content -->
  <!-- link renstra --> */}
      <button className="mx-20 mb-[500px]">
        <Link
          className="text-sm  sm:text-lg  lg:text-xl mt-1 w-auto text-justify font-semibold text-[#203dff]"
          to={"/"}
        >
          Produk Hukum Dispora 2021 - 2026
        </Link>
      </button>
      {/* <!-- content end --> */}

      {/* <!-- footer --> */}
      <Footer />
      {/* <!-- footer end --> */}
    </div>
  );
};

export default ProdukHukum;
