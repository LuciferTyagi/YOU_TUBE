import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFire,
  faMusic,
  faBasketballBall,
  faGamepad,
  faFilm,
  faNewspaper,
  faPodcast,
  faHome,
  faPlay,
  faClock,
  faScissors,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const sideBarItems = [
  { label: "Music", icon: faMusic, to: "/music" },
  { label: "Sports", icon: faBasketballBall, to: "/sports" },
  { label: "Gaming", icon: faGamepad, to: "/gaming" },
  { label: "Movie", icon: faFilm, to: "/movie" },
  { label: "Trending", icon: faFire, to: "/trending" },
  { label: "News", icon: faNewspaper, to: "/news" },
  { label: "Podcasts", icon: faPodcast, to: "/podcasts" },
  { label: "Watch Later", icon: faClock, to: "/watch-later" },
  { label: "Your Clip", icon: faScissors, to: "/your-clip" },
];

const firstSideBarItems = [
  { label: "Home", icon: faHome, to: "/" },
  { label: "Shorts", icon: faPlay, to: "/shorts" },
  { label: "Subscriptions", icon: faYoutube, to: "/subscriptions" },
];

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        {firstSideBarItems.map((item, index) => (
          <React.Fragment key={index}>
            <Link to={item.to}>
              <li className="flex items-center mb-2 bg-transparent p-2 hover:bg-slate-300 rounded-full transition duration-300">
                <FontAwesomeIcon icon={item.icon} className="mr-2" />
                {item.label}
              </li>
            </Link>
            {item.label === "Subscriptions" && <hr className="my-2 border-t border-gray-300" />}
          </React.Fragment>
        ))}
      </ul>
      <h1 className="mb-4 text-xl font-bold">Explore</h1>
      <ul>
        {sideBarItems.map((item, index) => (
          <Link to={item.to} key={index}>
            <li className="flex items-center p-2 mb-2 bg-transparent hover:bg-slate-300 rounded-full transition duration-300">
              <FontAwesomeIcon icon={item.icon} className="mr-2" />
              {item.label}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
