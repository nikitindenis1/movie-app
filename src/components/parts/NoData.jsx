import React from "react";
import CloudOffIcon from "@material-ui/icons/CloudOff";
const NoData = (props) => {
  const { text } = props;
  return (
    <div className="no__data">
      <CloudOffIcon />
      <p>{text}</p>
    </div>
  );
};
export default NoData;
