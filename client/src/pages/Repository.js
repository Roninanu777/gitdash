import React, { useContext } from "react";

import CTA from "../components/CTA";
import PageTitle from "../components/Typography/PageTitle";
import RepoCard from "../components/Cards/RepoCard.js";
import { RepoContext } from "../context/RepoContext";

function Repository() {
  const { repoData, starredRepoData } = useContext(RepoContext);

  return (
    <>
      <PageTitle>Starred Repositories</PageTitle>
      <CTA />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {starredRepoData.map((repo, i) => (
          <RepoCard repo={repo} key={i} />
        ))}
      </div>
      <PageTitle>Repositories</PageTitle>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {repoData.map((repo, i) => (
          <RepoCard repo={repo} key={i} />
        ))}
      </div>
    </>
  );
}

export default Repository;
