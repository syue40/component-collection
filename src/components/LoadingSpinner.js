import React from "react";
import "../../styles/spinner.css";

export default function LoadingSpinner() {
  /* This is the loading spinner for all app pages */
  return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
    </div>
  );
}
