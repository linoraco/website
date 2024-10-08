import React from "react";
import Navbar from "../../components/ComponenRespon/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import Bgdispora from "../../assets/img/bgdisporanewjpg.jpg";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const Renja = () => {
  // const docs = [
  //   { uri: "https://url-to-my-pdf.pdf" },
  //   { uri: require("./example-files/pdf.pdf") }, // Local File
  // ];
  return (
    <div className="flex-col ">
      {/* <!-- navbar --> */}
      <Navbar />
      {/* <!-- navbar end --> */}

      {/* <!-- content --> */}
      <div
        style={{ backgroundImage: `url(${Bgdispora})` }}
        className="flex justify-center items-center bg-auto bg-center bg-fixed py-24 mb-3"
      >
        <h1 className="text-3xl max-md:text-xl text-white text-center font-bold">
          DOKUMEN
        </h1>
      </div>

      <hr className="mx-20" />

      <br />
      <br />
      {/* <!-- content -->
  <!-- link renstra --> */}
      <div className="flex">
        <button className="flex flex-col">
          <Link
            className="text-sm  sm:text-lg  lg:text-xl mt-1 w-auto text-justify font-semibold text-[#203dff]"
            to={"/"}
          >
            RENJA
          </Link>
        </button>
        <div className="">
          <DocViewer documents={docs} />
        </div>
      </div>
      {/* <!-- content end --> */}

      {/* <!-- footer --> */}
      <Footer />
      {/* <!-- footer end --> */}
    </div>
  );
};

export default Renja;
