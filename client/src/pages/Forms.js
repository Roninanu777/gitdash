import React, { useContext } from "react";

import CTA from "../components/CTA";
import PageTitle from "../components/Typography/PageTitle";
import RepoCard from "../components/Cards/RepoCard.js";
// import SectionTitle from "../components/Typography/SectionTitle";
// import { Input, HelperText, Label, Select, Textarea } from "@windmill/react-ui";
import { RepoContext } from "../context/RepoContext";

function Forms() {
  const { repoData } = useContext(RepoContext);

  return (
    <>
      <PageTitle>Repositories</PageTitle>
      <CTA />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {repoData.map((repo, i) => (
          <RepoCard repo={repo} key={i} />
        ))}
      </div>
      {/* <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Name</TableCell>
              <TableCell>Language</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {repoData.map((repo, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm py-2">
                    <Avatar
                      className="hidden mr-3 md:block"
                      src={repo.owner.avatar_url}
                      alt="User image"
                    />
                    <div>
                      <p className="font-semibold">{repo.name}</p>
                      <p className="text-xs w-20 text-gray-600 dark:text-gray-400">
                        {repo.description
                          ? truncateText(repo.description)
                          : null}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{repo.language}</span>
                </TableCell>
                <TableCell>
                  <div
                    className={`inline-block px-2 py-1 rounded-full ${
                      repo.private ? "bg-red-400" : "bg-green-400"
                    }`}
                  >
                    <p className="text-sm dark:text-gray-700">
                      {repo.private ? "Private" : "Public"}
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm">
                    {new Date(repo.created_at).toLocaleDateString()}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={repoData.length}
            resultsPerPage={resultsPerPage}
            label="Table navigation"
            onChange={onPageChange}
          />
        </TableFooter>
      </TableContainer> */}
    </>
  );
}

export default Forms;
