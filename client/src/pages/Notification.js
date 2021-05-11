import React, { useEffect, useState } from "react";
import axios from "axios";
import PageTitle from "../components/Typography/PageTitle";
import NotificationCard from "../components/Cards/NotificationCard";

const Notification = () => {
  const [notificationData, setNotificationData] = useState([]);

  useEffect(() => {
    (async () => {
      const resp = await axios.get("https://api.github.com/notifications");
      setNotificationData(resp.data);
      console.log(resp.data);
    })();
  }, []);
  return (
    <>
      <PageTitle>Notifications</PageTitle>
      <div className="my-4">
        {notificationData.map((notification, i) => (
          <NotificationCard notification={notification} key={i} />
        ))}
      </div>
    </>
  );
};

export default Notification;
