import React from "react";
import { Card, CardBody } from "@windmill/react-ui";

function RepoCard({ repo }) {
  const truncateText = (text) => {
    let limit = 30;
    let truncate;
    if (text.length > limit) {
      truncate = text.substring(0, limit);
      return truncate + "...";
    } else {
      truncate = text;
      return truncate;
    }
  };
  return (
    <Card>
      <CardBody className="">
        <div>
          <div className="flex items-center justify-between">
            <p className="mb-2 text-base font-semibold text-gray-600 dark:text-gray-300">
              {repo.name}
            </p>
            <div className="flex">
              <div className="mx-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="octicon h-4 w-4 octicon-eye"
                  viewBox="0 0 16 16"
                  version="1.1"
                  aria-hidden="true"
                >
                  <path
                    fill="#AD5A91"
                    d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"
                  ></path>
                </svg>
                <span className="text-gray-500 text-sm ml-2 dark:text-gray-400">
                  {repo.watchers}
                </span>
              </div>
              <div className="mx-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="octicon h-4 w-4 octicon-git-branch"
                  viewBox="0 0 16 16"
                  version="1.1"
                  aria-hidden="true"
                >
                  <path
                    fill="#AD5A91"
                    d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"
                  ></path>
                </svg>
                <span className="text-gray-500 text-sm ml-2 dark:text-gray-400">
                  {repo.forks}
                </span>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-400 dark:text-gray-500">
            {repo.description
              ? truncateText(repo.description)
              : "No description"}
          </p>
        </div>
      </CardBody>
    </Card>
  );
}

export default RepoCard;
