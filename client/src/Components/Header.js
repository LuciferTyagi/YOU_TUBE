import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { LOGO_IMG, SEARCH_API, USER_IMG } from "../Utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { cacheResults } from "../Utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  useEffect(() => {
    //make an api call  after every key press
    //But if the diff between 2 API call is <200ms
    //decline the API Call

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const getSearchSuggestions = async () => {
    console.log("API" + searchQuery);
    const response = await fetch(
      `https://you-tube-server-sand.vercel.app/search?query=${encodeURIComponent(searchQuery)}`
    );
    const json = await response.json();
    console.log(json);
    setSuggestion(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid  grid-flow-col p-2 shadow-xl">
      <div className="flex col-span-1">
        <FontAwesomeIcon
          className="h-6  mr-2 p-4 cursor-pointer bg-transparent hover:bg-slate-300 rounded-full  transition duration-300"
          onClick={() => toggleMenuHandler()}
          icon={faBars}
        />
        <img className="h-16 " alt="LOGO" src={LOGO_IMG}></img>
      </div>

      <div class=" col-span-10 relative w-full max-w-xl mx-auto bg-white rounded-full">
        <div className="relative w-full">
          <input
            placeholder="Search Video"
            class="rounded-full w-full h-16 bg-transparent py-2 pl-8 pr-32 outline-none border-2 border-gray-100 shadow-md hover:outline-none focus:ring-red-400 focus:border-red-400"
            type="text"
            name="query"
            id="query"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button
            type="submit"
            class="absolute inline-flex items-center h-10 px-4 py-2 text-sm text-white transition duration-150 ease-in-out rounded-full outline-none right-3 top-3 bg-red-600 sm:px-6 sm:text-base sm:font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            <svg
              class="-ml-0.5 sm:-ml-1 mr-2 w-4 h-4 sm:h-5 sm:w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            Search
          </button>
        </div>
        {showSuggestion && (
          <div className="absolute bg-gray-100 mt-2 py-2  w-[36rem] rounded-lg shadow-lg">
            <ul>
              {suggestion.map((item, index) => (
                <li
                  key={index}
                  className="py-2 px-3 shadow-md rounded-md hover:bg-gray-200"
                >
                  <FontAwesomeIcon className="mr-2" icon={faMagnifyingGlass} />{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img className="h-16" src={USER_IMG} alt="user-img"></img>
      </div>
    </div>
  );
};

export default Header;
