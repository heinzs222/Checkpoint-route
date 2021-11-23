import React from "react";
import "./Spinner.css";
function Spinner() {
  return (
    <div className="spinnerArea">
      <div className="spinner-border text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
