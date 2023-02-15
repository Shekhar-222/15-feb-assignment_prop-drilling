import React from "react";
import X from "./X";

export default function W (props) {
  //destructure the props
  const { OutsideDataW, nameW, surnameW} = props;

  return (
    <div>
      <h1>
        This is functional component- W- {OutsideDataW} - {nameW} - {surnameW}
      </h1>
      <X OutsideDataX={OutsideDataW} nameX={nameW} surnameX={surnameW}></X>
    </div>
  );
}
