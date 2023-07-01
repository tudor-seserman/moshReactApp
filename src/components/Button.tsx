import React from "react";

interface Props {
  style: string;
  handleStyle: () => void;
}

function Button({ style, handleStyle }: Props) {
  return (
    <button type="button" className={`btn btn-${style}`} onClick={handleStyle}>
      Button
    </button>
  );
}

export default Button;
