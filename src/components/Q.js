import React from "react";
import R from "./R";

export default function Q (props) {
  //destructure the props
  const { OutsideDataQ, nameQ, surnameQ } = props;

  return (
    <div>
      <h1>
        This is functional component- Q- {OutsideDataQ} - {nameQ} - {surnameQ}
      </h1>
      <R OutsideDataR={OutsideDataQ} nameR={nameQ} surnameR={surnameQ}></R>
    </div>
  );
}
