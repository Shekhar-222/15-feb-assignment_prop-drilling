import React from "react";
import P from "./P";

export default function O (props) {
  //destructure the props
  const { OutsideDataO, nameO, surnameO } = props;

  return (
    <div>
      <h1>
        This is functional component- O- {OutsideDataO} - {nameO} - {surnameO}
      </h1>
      <P OutsideDataP={OutsideDataO} nameP={nameO} surnameP={surnameO}></P>
    </div>
  );
}
