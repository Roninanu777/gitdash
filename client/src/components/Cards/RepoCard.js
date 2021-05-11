import React, { useContext } from "react";
import { Card, CardBody, WindmillContext } from "@windmill/react-ui";
import { Link } from "react-router-dom";

function RepoCard({ repo }) {
  const { mode } = useContext(WindmillContext);
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
    <Card className="transition transform ease-in-out duration-100 hover:scale-105 shadow-md cursor-pointer">
      <CardBody>
        <div>
          <div className="flex mb-2 items-center justify-between">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="octicon h-4 w-4 text-gray-500 octicon-repo "
                title="Repository"
                aria-label="Repository"
                viewBox="0 0 16 16"
                version="1.1"
                role="img"
              >
                <path
                  fill={mode === "dark" ? "#ebebeb" : "#575757"}
                  d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
                ></path>
              </svg>
              <Link to={`/app/repositories/${repo.name}`}>
                <p className="text-base ml-2 font-semibold text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                  {repo.name}
                </p>
              </Link>
            </div>

            <div className="flex items-center">
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
              <div className="mx-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="octicon h-4 w-4 octicon-info color-icon-secondary"
                  viewBox="0 0 16 16"
                  version="1.1"
                  aria-hidden="true"
                >
                  <path
                    fill="#AD5A91"
                    d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm6.5-.25A.75.75 0 017.25 7h1a.75.75 0 01.75.75v2.75h.25a.75.75 0 010 1.5h-2a.75.75 0 010-1.5h.25v-2h-.25a.75.75 0 01-.75-.75zM8 6a1 1 0 100-2 1 1 0 000 2z"
                  ></path>
                </svg>
                <span className="text-gray-500 text-sm ml-2 dark:text-gray-400">
                  {repo.open_issues_count}
                </span>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-400 dark:text-gray-500">
            {repo.description
              ? truncateText(repo.description)
              : "No description"}
          </p>
          <div className="flex mt-3 items-center">
            <div
              className={`inline-block p-1 rounded-full ${
                repo.private ? "bg-red-400 dark:bg-red-500" : "bg-green-400"
              }`}
            ></div>
            <p className="text-xs ml-2 text-gray-600 dark:text-gray-500">
              {repo.private ? "Private" : "Public"}
            </p>

            <p className="text-xs ml-4 font-semibold dark:text-gray-500 text-gray-600">
              Language:{" "}
              {repo.language ? (
                <span className="text-xs font-normal text-gray-600 dark:text-gray-500">
                  {repo.language}
                </span>
              ) : (
                <span className="text-xs text-gray-600 dark:text-gray-500">
                  none
                </span>
              )}
            </p>
            <p className="text-xs ml-4 font-semibold dark:text-gray-500 text-gray-600">
              Created at:{" "}
              <span className="text-xs font-normal text-gray-600 dark:text-gray-500">
                {new Date(repo.created_at).toLocaleDateString()}
              </span>
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default RepoCard;
