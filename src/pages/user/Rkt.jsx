import React from "react";
import Navbar from "../../components/ComponenRespon/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import Bgdispora from "../../assets/img/bgdisporanewjpg.jpg";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const Rkt = () => {
  const docs = [
    {
      uri: require("../../assets/files/RKT DISPORA 2023.pdf").default,
      fileType: "pdf",
      fileName: "RKT DISPORA 2023.pdf",
    },
  ];

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
      {/* <!-- content --> */}
      <div className="flex flex-col mx-20 my-20">
        <button className="flex">
          <Link
            className="text-sm sm:text-lg lg:text-xl mt-1 w-auto text-justify font-semibold text-[#203dff]"
            to={"/"}
          >
            RKT
          </Link>
        </button>
        <div className="my-10">
          <DocViewer
            documents={docs}
            pluginRenderers={DocViewerRenderers}
            style={{ height: 1000 }}
          />
        </div>
      </div>
      {/* <!-- content end --> */}

      {/* <!-- footer --> */}
      <Footer />
      {/* <!-- footer end --> */}
    </div>
  );
};

export default Rkt;
