import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, reset } from "../../features/authSlice";

const LoginAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isSuccess, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/home-admin-kadis");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <div
      style={{
        backgroundImage: `url(http://localhost:4000/galeri/7a4aafc374cbce846c52995b6cfeac62.jpeg)`,
      }}
      className="w-full h-screen font-sans bg-no-repeat"
    >
      <div className="container flex flex-col items-center justify-center flex-1 h-full mx-auto">
        {message && (
          <p className="bg-red-500 py-4 px-8 rounded-3xl mb-4">!!!{message}</p>
        )}
        <div className="w-full max-w-lg">
          <div className="leading-loose">
            <form
              onSubmit={handleSubmit}
              className="max-w-sm p-10 m-auto rounded shadow-2xl bg-red-900/90"
            >
              <p className="mb-8 text-2xl font-light text-center text-white">
                Login
              </p>
              <div className="mb-2">
                <div className="relative">
                  <input
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    id="email"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="mb-2">
                <div className="relative">
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    id="password"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="*********"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-between mt-4">
                <button
                  type="submit"
                  className="py-2 px-4 mb-4 bg-red-600 hover:bg-red-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                >
                  Login
                </button>
                <Link
                  to="/"
                  className="py-2 px-4 bg-red-600 hover:bg-red-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                >
                  Beranda
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
