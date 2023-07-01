import React, { ReactNode, useState } from "react";
import CloseAlert from "./CloseAlert";

interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  const [close, setClose] = useState(true);
  const handleClick = () => {
    setClose(false);
  };

  return (
    <>
      {close && (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          {children}
          <CloseAlert handleClick={handleClick} />
        </div>
      )}
    </>
  );
};

export default Alert;
