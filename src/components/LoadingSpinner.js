import React from "react";
import "../styles/spinner.css";

export default function LoadingSpinner() {
  /* This is the loading spinner for all app pages */
  return (
    <div class="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
