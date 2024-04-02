import React, { useState, useEffect } from "react";
import { getMe } from "../features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogOut, reset } from "../features/authSlice";
import Dispora1 from "../assets/img/dispora bgD9.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/login");
    }
  }, [isError, navigate]);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/login");
  };

  return (
    <>
      <header>
        <div className="navbar flex lg:h-24  justify-between border-b-2 border-b-red-800">
          <div className="flex">
            <img
              className="min-[319px]:w-[120px] sm:w-[140px] lg:w-[150px]"
              src={Dispora1}
              alt=""
            />
          </div>
          <div className="flex justify-center items-center">
            <h1 className="font-bold text-sm min-[319px]:text-xs sm:text-lg text-red-900">
              ADMIN DINAS
            </h1>
          </div>
          {/* Logout */}
          <div className="flex items-center mr-6">
            <button
              onClick={() => setOpenModal(true)}
              className="bg-red-700 py-2 px-2 lg:px-4 text-sm min-[319px]:text-xs sm:text-sm md:text-md lg:text-lg text-white rounded-lg"
            >
              Logout
            </button>
          </div>
          {/* Logout end */}
        </div>
      </header>

      <div>
        <div
          id="popup-modal"
          tabIndex="-1"
          className={`${
            openModal ? "flex" : "hidden"
          } fixed top-0 left-0 right-0 z-50 justify-center items-center p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
        >
          <div className="relative w-full max-w-md max-h-full ">
            <div className="relative rounded-lg shadow p-8 bg-red-500 ">
              <h3 className="text-center text-white">Anda yakin ini keluar?</h3>
              <div className="flex items-center justify-center space-x-4 text-white">
                <button
                  onClick={() => logout()}
                  className=" hover:bg-red-800 px-5 rounded-lg"
                >
                  Ya
                </button>
                <button
                  onClick={() => setOpenModal(false)}
                  className="hover:bg-green-600 px-5 rounded-lg"
                >
                  Tidak
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
