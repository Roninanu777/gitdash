import React, { useContext, useEffect } from "react";

import CTA from "../components/CTA";
import InfoCard from "../components/Cards/InfoCard";
import ChartCard from "../components/Chart/ChartCard";
import { Doughnut, Line } from "react-chartjs-2";
import ChartLegend from "../components/Chart/ChartLegend";
import PageTitle from "../components/Typography/PageTitle";
import { StarIcon, PeopleIcon, RepoIcon } from "../icons";
import RoundIcon from "../components/RoundIcon";
import { ProfileContext } from "../context/ProfileContext";
import { RepoContext } from "../context/RepoContext";

import {
  doughnutOptions,
  lineOptions,
  doughnutLegends,
  lineLegends,
} from "../utils/demo/chartsData";
import axios from "axios";

function Dashboard() {
  const { setProfileHandler, profileData } = useContext(ProfileContext);
  const { setRepoHandler, repoData } = useContext(RepoContext);

  useEffect(() => {
    (async () => {
      const resp = await axios.get("https://api.github.com/user");
      setProfileHandler(resp.data);
    })();
    //eslint-disable-next-line
  }, []);

  //get user repos
  useEffect(() => {
    (async () => {
      const resp = await axios.get(
        "https://api.github.com/user/repos?per_page=50"
      );
      setRepoHandler(resp.data);
    })();
    //eslint-disable-next-line
  }, []);

  const totalStars = () => {
    let total = 0;
    let len = repoData.length;
    for (let i = 0; i < len; i++) {
      total += repoData[i].stargazers_count;
    }
    return total;
  };

  return (
    <>
      <PageTitle>Dashboard</PageTitle>

      <CTA />

      {/* <!-- Cards --> */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="Total repositories" value={repoData.length}>
          <RoundIcon
            icon={RepoIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Total stars" value={totalStars()}>
          <RoundIcon
            icon={StarIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard
          title="Followers"
          value={profileData.followers ? profileData.followers : "0"}
        >
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard
          title="Following"
          value={profileData.following ? profileData.following : "0"}
        >
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          />
        </InfoCard>
      </div>

      <PageTitle>Charts</PageTitle>
      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <ChartCard title="Daily stats">
          <Doughnut {...doughnutOptions} />
          <ChartLegend legends={doughnutLegends} />
        </ChartCard>

        <ChartCard title="Contributions">
          <Line {...lineOptions} />
          <ChartLegend legends={lineLegends} />
        </ChartCard>
      </div>
    </>
  );
}

export default Dashboard;
