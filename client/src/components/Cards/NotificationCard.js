import React, { useContext } from "react";
import { Card, CardBody, WindmillContext } from "@windmill/react-ui";

function NotificationCard({ notification }) {
  const { mode } = useContext(WindmillContext);

  function renderSvg(type) {
    if (type === "Commit") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="octicon h-4 w-4 octicon-git-commit"
          viewBox="0 0 16 16"
          version="1.1"
          aria-hidden="true"
        >
          <path
            fill={mode === "dark" ? "#ebebeb" : "#575757"}
            d="M10.5 7.75a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm1.43.75a4.002 4.002 0 01-7.86 0H.75a.75.75 0 110-1.5h3.32a4.001 4.001 0 017.86 0h3.32a.75.75 0 110 1.5h-3.32z"
          ></path>
        </svg>
      );
    } else if (type === "PullRequest") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="octicon h-4 w-4 octicon-git-pull-request  color-text-tertiary"
          viewBox="0 0 16 16"
          version="1.1"
          aria-hidden="true"
        >
          <path
            fill={mode === "dark" ? "#47ed84" : "#339c5a"}
            d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"
          ></path>
        </svg>
      );
    }
  }

  return (
    <Card className="my-2 cursor-pointer">
      <CardBody>
        <div>
          <div className="flex mb-2 items-center justify-between">
            <div className="flex items-start">
              <div className="mt-1">{renderSvg(notification.subject.type)}</div>
              <div className="flex flex-col">
                <p className="text-sm ml-2 text-gray-600 dark:text-gray-300">
                  {notification.subject.title}
                </p>
                <p className="text-base ml-2 text-gray-600 dark:text-gray-300">
                  {notification.repository.full_name}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-xs text-gray-600 dark:text-gray-300">
                {notification.reason}
              </p>
              <img
                src={notification.repository.owner.avatar_url}
                className="ml-4 h-8 w-8 rounded-full"
                alt="avatar"
              />
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default NotificationCard;
