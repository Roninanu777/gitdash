import React, { useState, useMemo } from "react";

// create context
export const RepoContext = React.createContext();

export const RepoProvider = ({ children }) => {
  const [repoData, setRepoData] = useState([]);

  function setRepoHandler(data) {
    setRepoData(data);
  }

  const value = useMemo(
    () => ({
      repoData,
      setRepoHandler,
    }),
    //eslint-disable-next-line
    []
  );

  return <RepoContext.Provider value={value}>{children}</RepoContext.Provider>;
};
