"use client";
import { useEffect, useState } from "react";

export default function withAuth(WrappedComponent) {
  console.log(window.location.href, "currentUrl");
  const Wrapper = (props) => {
    const [isLogged, setIsLogged] = useState(); // Replace with actual authentication logic

    useEffect(() => {
      // Add your logic to check if the user is logged in
      const token = localStorage.getItem("token"); // Example: check for a token
      if (!token) {
        window.location.href = "/sign_up_in?type=in";
      } else {
        setIsLogged(true);
        if (window.location.href.split("/")[3] == "") {
          window.location.href = "/dashboard";
        }
      }
    }, []);

    // If loading data or not authenticated yet
    if (!isLogged) {
      return null; // Or render a loader/spinner
    }

    // Render the wrapped component if authenticated
    return <WrappedComponent {...props} />;
  };

  return Wrapper;
}
