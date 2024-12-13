import React from "react";
import Navbar from "../../components/ComponenRespon/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import Bgdispora from "../../assets/img/bgdisporanewjpg.jpg";
import g from "../../assets/files/RKT DISPORA 2023.pdf";

const Dokumen = () => {
  const links = [
    { label: "PRODUK HUKUM", href: g },
    { label: "RENSTRA", to: "/" },
    { label: "RENJA", to: "/" },
    { label: "RKT", href: "" },
    { label: "RINGKASAN DPA", to: "/" },
    { label: "PERJANJIAN KINERJA", to: "/" },
    { label: "LAKIP/SAKIP", to: "/" },
    { label: "LPPD", to: "" },
    { label: "RENCANA AKSI", to: "/" },
    { label: "LAPORAN KINERJA (BERKALAH)", to: "/" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="">
        {" "}
        {/* Header Section */}
        <div
          style={{ backgroundImage: `url(${Bgdispora})` }}
          className="flex justify-center items-center bg-cover bg-center bg-fixed py-24 mb-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
            DOKUMEN
          </h1>
        </div>
        {/* Divider */}
        <hr className="mx-20" />
        {/* Content Section */}
        <div className="flex flex-col md:flex-row gap-6 mx-6 md:mx-20 my-8">
          {/* Links Column */}
          <div className="flex flex-col space-y-3">
            {links.map((link, index) =>
              link.href ? (
                <a
                  key={index}
                  className="text-sm sm:text-lg lg:text-xl font-semibold text-black  hover:underline"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={index}
                  className="text-sm sm:text-lg lg:text-xl font-semibold text-black  hover:underline"
                  to={link.to || "#"}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Uncomment this section when DocViewer is implemented */}
          {/* <div className="flex-grow">
          <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
        </div> */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dokumen;
