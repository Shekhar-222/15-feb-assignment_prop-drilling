import React from "react";
import J from "./J";

export default function I (props) {
  //destructure the props
  const { OutsideDataI, nameI, surnameI } = props;

  return (
    <div>
      <h1>
        This is functional component- I- {OutsideDataI} - {nameI} - {surnameI}
      </h1>
      <J OutsideDataJ={OutsideDataI} nameJ={nameI} surnameJ={surnameI}></J>
    </div>
  );
}
