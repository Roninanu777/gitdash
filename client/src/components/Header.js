import React, { useContext, useState } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { ProfileContext } from "../context/ProfileContext";
import {
  SearchIcon,
  MoonIcon,
  SunIcon,
  BellIcon,
  MenuIcon,
  OutlinePersonIcon,
  OutlineCogIcon,
} from "../icons";
import {
  Avatar,
  Input,
  Dropdown,
  DropdownItem,
  WindmillContext,
} from "@windmill/react-ui";
import { RepoContext } from "../context/RepoContext";
import RepoCard from "./Cards/RepoCard";
import { Link } from "react-router-dom";

function Header(props) {
  const { mode, toggleMode } = useContext(WindmillContext);
  const { toggleSidebar } = useContext(SidebarContext);
  const { toggleProfile } = useContext(ProfileContext);
  const { repoData } = useContext(RepoContext);
  const [inputData, setInputData] = useState({});
  const [repoName, setRepoName] = useState("");

  const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  function handleNotificationsClick() {
    setIsNotificationsMenuOpen(!isNotificationsMenuOpen);
  }

  function handleProfileClick() {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  }

  function handleChange(e) {
    e.preventDefault();
    setRepoName(e.target.value);
    console.log(e.target.value);
    let len = repoData.length;
    let regex = new RegExp(e.target.value, "i");
    for (let i = 0; i < len; i++) {
      if (regex.test(repoData[i].name)) {
        setInputData(repoData[i]);
      }
    }
  }

  return (
    <header className="z-10 py-4 relative bg-white shadow-bottom dark:bg-gray-800">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
        {/* <!-- Mobile hamburger --> */}
        <button
          className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
          onClick={toggleSidebar}
          aria-label="Menu"
        >
          <MenuIcon className="w-6 h-6" aria-hidden="true" />
        </button>
        {/* <!-- Search input --> */}
        <div className="flex justify-center flex-1 lg:mr-32">
          <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
            <div className="absolute inset-y-0 flex items-center pl-2">
              <SearchIcon className="w-4 h-4" aria-hidden="true" />
            </div>
            <Input
              className="pl-8 text-gray-700"
              type="text"
              name="repoName"
              value={repoName}
              onChange={handleChange}
              placeholder="Search from your repos..."
              aria-label="Search"
            />
          </div>
        </div>
        <ul className="flex items-center flex-shrink-0 space-x-6">
          {/* <!-- Theme toggler --> */}
          <li className="flex">
            <button
              className="rounded-md focus:outline-none focus:shadow-outline-purple"
              onClick={toggleMode}
              aria-label="Toggle color mode"
            >
              {mode === "dark" ? (
                <SunIcon className="w-5 h-5" aria-hidden="true" />
              ) : (
                <MoonIcon className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </li>
          {/* <!-- Notifications menu --> */}
          <li className="relative">
            <Link to="/app/notification">
              <button
                className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
                onClick={handleNotificationsClick}
                aria-label="Notifications"
                aria-haspopup="true"
              >
                <BellIcon className="w-5 h-5" aria-hidden="true" />
                {/* <!-- Notification badge --> */}
                <span
                  aria-hidden="true"
                  className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
                ></span>
              </button>
            </Link>
          </li>
          {/* <!-- Profile menu --> */}
          <li className="relative">
            <button
              className="rounded-full focus:shadow-outline-purple focus:outline-none"
              onClick={handleProfileClick}
              aria-label="Account"
              aria-haspopup="true"
            >
              <Avatar
                className="align-middle"
                src={props.data.avatar_url}
                alt=""
                aria-hidden="true"
              />
            </button>
            <Dropdown
              align="right"
              isOpen={isProfileMenuOpen}
              onClose={() => setIsProfileMenuOpen(false)}
            >
              <DropdownItem onClick={toggleProfile} tag="a" href="#">
                <OutlinePersonIcon
                  className="w-4 h-4 mr-3"
                  aria-hidden="true"
                />
                <span>Profile</span>
              </DropdownItem>
              <DropdownItem tag="a" href="#">
                <OutlineCogIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                <span>Settings</span>
              </DropdownItem>
            </Dropdown>
          </li>
        </ul>
      </div>
      <div className="absolute w-1/3" style={{ left: "25.2%" }}>
        {repoName.length > 0 && Object.keys(repoName).length !== 0 ? (
          <RepoCard repo={inputData} />
        ) : null}
      </div>
    </header>
  );
}

export default Header;
