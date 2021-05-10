import React, { useState, useMemo } from "react";

// create context
export const ProfileContext = React.createContext();

export const ProfileProvider = ({ children }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [profileData, setProfileData] = useState({});

  function toggleProfile() {
    setIsProfileOpen(!isProfileOpen);
  }

  function closeProfile() {
    setIsProfileOpen(false);
  }

  function setProfileHandler(data) {
    setProfileData(data);
  }

  const value = useMemo(
    () => ({
      isProfileOpen,
      toggleProfile,
      closeProfile,
      profileData,
      setProfileHandler,
    }),
    //eslint-disable-next-line
    [isProfileOpen]
  );

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};
