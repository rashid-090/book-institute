import { useEffect } from "react";

const PreventNavigation = () => {
  useEffect(() => {
    // Handle Back Navigation
    
    const handleBack = (event) => {
      event.preventDefault();
      event.returnValue = ""; // Standard warning message
      alert("Back navigation is disabled!");
  
    };

    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", handleBack);

    // Handle Page Refresh or Close
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = ""; // Standard warning message
      alert("Page refresh or closing is disabled!");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("popstate", handleBack);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return null;
};

export default PreventNavigation;
