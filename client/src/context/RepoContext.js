import React, { useState, useEffect } from "react";
import axios from "axios";

// create context
export const RepoContext = React.createContext();

export const RepoProvider = ({ children }) => {
  const [repoData, setRepoData] = useState([]);

  useEffect(() => {
    (async () => {
      const resp = await axios.get(
        "https://api.github.com/user/repos?per_page=50"
      );
      setRepoData(resp.data);
    })();
  }, []);

  function setRepoHandler(data) {
    setRepoData(data);
  }

  const value = {
    repoData,
    setRepoHandler,
  };

  return <RepoContext.Provider value={value}>{children}</RepoContext.Provider>;
};
