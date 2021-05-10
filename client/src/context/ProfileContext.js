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

  const value = {
    isProfileOpen,
    toggleProfile,
    closeProfile,
    profileData,
    setProfileHandler,
  };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};
