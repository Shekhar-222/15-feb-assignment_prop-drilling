import React from "react";
import T from "./T";

export default function S (props) {
  //destructure the props
  const { OutsideDataS, nameS, surnameS} = props;

  return (
    <div>
      <h1>
        This is functional component- S- {OutsideDataS} - {nameS} - {surnameS}
      </h1>
      <T OutsideDataT={OutsideDataS} nameT={nameS} surnameT={surnameS}></T>
    </div>
  );
}
