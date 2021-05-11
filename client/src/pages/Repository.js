import React, { useEffect, useState, useContext } from "react";
import PageTitle from "../components/Typography/PageTitle";
import CommitCard from "../components/Cards/CommitCard";
import axios from "axios";
import { ProfileContext } from "../context/ProfileContext";

const Repository = (props) => {
  const [commitData, setCommitData] = useState([]);
  const { profileData } = useContext(ProfileContext);

  useEffect(() => {
    (async () => {
      const resp = await axios.get(
        `https://api.github.com/repos/${profileData.login}/${props.match.params.repo}/commits`
      );
      console.log(resp.data[0]);
      setCommitData(resp.data);
    })();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <PageTitle>Commits</PageTitle>
      <div className="my-4">
        {commitData.map((commit, i) => (
          <CommitCard commit={commit} key={i} />
        ))}
      </div>
    </>
  );
};

export default Repository;
