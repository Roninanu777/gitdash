import React, { useState, useEffect } from "react";

import SidebarContent from "./SidebarContent";

function DesktopSidebar(props) {
  const [event, setEvent] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      if (e) {
        setEvent(e);
        setShowPrompt(true);
      }
    });
    window.addEventListener("appinstalled", (e) => {
      setShowPrompt(false);
      console.log("INSTALL: Success");
    });
  });
  return (
    <aside className="z-30 flex-shrink-0 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 lg:block">
      <SidebarContent deferredPrompt={event} showPrompt={showPrompt} />
    </aside>
  );
}

export default DesktopSidebar;
