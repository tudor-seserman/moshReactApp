import React from "react";
import Button from "./Button";

interface Props {
  handleClick: () => void;
}

function CloseAlert({ handleClick }: Props) {
  return (
    <button
      type="button"
      className="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
      onClick={handleClick}
    ></button>
  );
}

export default CloseAlert;
