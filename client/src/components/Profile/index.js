import React, { useContext } from "react";

import { ProfileContext } from "../../context/ProfileContext";
import { Card, CardBody } from "@windmill/react-ui";
import { MailIcon, HomeIcon, PeopleIcon } from "../../icons";

const Profile = (props) => {
  const { isProfileOpen, closeProfile } = useContext(ProfileContext);

  return (
    <div
      className={`${
        !isProfileOpen ? "hidden" : "block"
      } absolute bg-gray-50 dark:bg-gray-900 z-20 right-0 mt-18 top-auto bottom-0 shadow-2xl border-l border-t border-gray-200 dark:border-gray-600 px-10 ml-12`}
    >
      <button
        onClick={closeProfile}
        className="dark:text-white text-gray-700 mt-4 font-bold"
      >
        X
      </button>
      <div className="flex flex-col items-center my-12">
        <img
          src={props.data.avatar_url}
          alt="avatar"
          className="rounded-full w-32 h-32 my-8"
        />
        <p className="text-lg text-gray-700 dark:text-gray-100 tracking-wide font-semibold">
          {props.data.name}
        </p>
        <p className="text-sm mt-2 text-gray-500 dark:text-gray-600 tracking-wide font-semibold">
          @{props.data.login}
        </p>
        <p className="w-full text-center text-sm mt-2 text-gray-500 dark:text-gray-600 tracking-wide font-semibold">
          {props.data.bio}
        </p>
        <Card className="mt-8 px-8">
          <CardBody>
            <div className="flex items-center border-b pb-3 border-gray-200 dark:border-gray-600 mt-4">
              <a href={`mailto:${props.data.email}`}>
                <MailIcon className="h-6 w-6 mr-4 dark:text-gray-500 dark:hover:text-gray-300" />
              </a>
              <p className="text-sm tracking-wide text-gray-700 dark:text-gray-400">
                {props.data.email}
              </p>
            </div>
            <div className="flex items-center border-b pb-3 border-gray-200 dark:border-gray-600 mt-4">
              <HomeIcon className="h-6 w-6 mr-4 dark:text-gray-500 dark:hover:text-gray-300" />
              <p className="text-sm tracking-wide text-gray-700 dark:text-gray-400">
                {props.data.location}
              </p>
            </div>
            <div className="flex items-center border-b pb-3 border-gray-200 dark:border-gray-600 mt-4">
              <PeopleIcon className="h-6 w-6 mr-4 dark:text-gray-500 dark:hover:text-gray-300" />
              <p className="text-sm tracking-wide text-gray-700 dark:text-gray-400">
                {props.data.followers} followers . {props.data.following}{" "}
                following
              </p>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
