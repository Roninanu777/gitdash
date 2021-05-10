import React, { useState, useContext, useEffect } from "react";

import CTA from "../components/CTA";
import InfoCard from "../components/Cards/InfoCard";
import ChartCard from "../components/Chart/ChartCard";
import { Doughnut, Line } from "react-chartjs-2";
import ChartLegend from "../components/Chart/ChartLegend";
import PageTitle from "../components/Typography/PageTitle";
import { StarIcon, PeopleIcon, RepoIcon } from "../icons";
import RoundIcon from "../components/RoundIcon";
import { ProfileContext } from "../context/ProfileContext";
import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Avatar,
  Pagination,
} from "@windmill/react-ui";

import {
  doughnutOptions,
  lineOptions,
  doughnutLegends,
  lineLegends,
} from "../utils/demo/chartsData";
import axios from "axios";

function Dashboard() {
  const [page, setPage] = useState(1);
  //eslint-disable-next-line
  const [data, setData] = useState([]);
  const [repoData, setRepoData] = useState([]);
  //eslint-disable-next-line
  const [profile, setProfile] = useState({});

  const { setProfileHandler, profileData } = useContext(ProfileContext);

  // pagination setup
  const resultsPerPage = 10;

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  useEffect(() => {
    (async () => {
      const resp = await axios.get("https://api.github.com/user");
      setProfile(resp.data);
      setProfileHandler(resp.data);
      console.log(resp.data);
    })();
    //eslint-disable-next-line
  }, []);

  //get user repos
  useEffect(() => {
    (async () => {
      const resp = await axios.get(
        "https://api.github.com/user/repos?per_page=50"
      );
      console.log(resp.data);
      setRepoData(resp.data);
    })();
  }, []);

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setData(repoData.slice((page - 1) * resultsPerPage, page * resultsPerPage));
    //eslint-disable-next-line
  }, [page]);

  const totalStars = () => {
    let total = 0;
    let len = repoData.length;
    for (let i = 0; i < len; i++) {
      total += repoData[i].stargazers_count;
    }
    return total;
  };

  const truncateText = (text) => {
    let limit = 50;
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
          value={profileData.following ? profileData.followers : "0"}
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
        <ChartCard title="Revenue">
          <Doughnut {...doughnutOptions} />
          <ChartLegend legends={doughnutLegends} />
        </ChartCard>

        <ChartCard title="Traffic">
          <Line {...lineOptions} />
          <ChartLegend legends={lineLegends} />
        </ChartCard>
      </div>

      <PageTitle>Repositories</PageTitle>
      <TableContainer>
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
      </TableContainer>
    </>
  );
}

export default Dashboard;
