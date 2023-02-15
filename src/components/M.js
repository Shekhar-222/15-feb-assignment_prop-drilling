import React from "react";
import N from "./N";

export default function M (props) {
  //destructure the props
  const { OutsideDataM, nameM, surnameM } = props;

  return (
    <div>
      <h1>
        This is functional component- M- {OutsideDataM} - {nameM} - {surnameM}
      </h1>
      <N OutsideDataN={OutsideDataM} nameN={nameM} surnameN={surnameM}></N>
    </div>
  );
}
