import React from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsYoutube, BsCameraVideo, BsBell } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoAppsSharp } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { changeSearchTerm, clearSearchTerm, clearVideos } from "../store";
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);
  const handleSearch = () => {
    if (location.pathname !== "/search") navigate("/search");
    else {
      dispatch(clearVideos());
      dispatch(getSearchPageVideos(false));
    }
  };

  return (
    <div className="flex justify-between items-center  px-14 h-28 bg-[#212121] opacity-95 sticky top-0 z-50">
      <div className="flex gap-8 items-center text-4xl">
        <div>
          <GiHamburgerMenu />
        </div>
        <Link to="/">
          <div className="flex gap-1 items-center justify-center">
            <BsYoutube className="text-5xl text-red-600" />
            <span className="text-3xl font-medium">MyTube</span>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <div className="flex bg-zinc-900 items-center h-20 w-160 px-4 pr-0">
            <div className="flex gap-4 items-center pr-5">
              <div>
                <AiOutlineSearch className="text-3xl" />
              </div>
              <input
                type="text"
                className="text-xl w-96 bg-zinc-900 focus:outline-none border-none"
                value={searchTerm}
                onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
              />

              <AiOutlineClose
                className={`text-3xl cursor-pointer ${
                  !searchTerm ? "invisible" : "visible"
                }`}
                onClick={() => dispatch(clearSearchTerm())}
              />
            </div>
            <button className="h-20 w-32 flex items-center justify-center bg-zinc-800">
              <AiOutlineSearch className="text-3xl" />
            </button>
          </div>
        </form>
      </div>
      <div className="flex gap-5 items-center text-4xl">
        <BsCameraVideo />
        <IoAppsSharp />
        <div className="relative">
          <BsBell />
          <span className="absolute bottom-2 left-2 text-sm bg-red-600 rounded-full px-1">
            9+
          </span>
        </div>
        <img
          src="icon.png"
          className="w-12 h-12 rounded-full"
          alt="logo"
        />
      </div>
    </div>
  );
}
