import React, { useContext } from "react";
import { Card, CardBody, WindmillContext, Button } from "@windmill/react-ui";

function CommitCard({ commit }) {
  const { mode } = useContext(WindmillContext);

  return (
    <Card className="my-2 cursor-pointer">
      <CardBody>
        <div>
          <div className="flex mb-2 items-center justify-between">
            <div className="flex items-start">
              <div className="mt-1">
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
              </div>
              <div className="flex flex-col">
                <p className="text-base ml-2 text-gray-600 dark:text-gray-300">
                  {commit.commit.message}
                </p>
                <p className="text-sm ml-2 text-gray-600 dark:text-gray-500">
                  {commit.committer.login}
                </p>
              </div>
            </div>
            <div className="flex w-1/2 justify-between items-center">
              <img
                src={commit.committer.avatar_url}
                className="mr-4 h-8 w-8 rounded-full"
                alt="avatar"
              />
              <div className="flex items-center">
                <p className="text-xs text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
                  {commit.sha}
                </p>
                <Button className="ml-4 font-bold text-base">{"< >"}</Button>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default CommitCard;
