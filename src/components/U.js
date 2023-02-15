import React from "react";
import V from "./V";

export default function U (props) {
  //destructure the props
  const { OutsideDataU, nameU, surnameU} = props;

  return (
    <div>
      <h1>
        This is functional component- U- {OutsideDataU} - {nameU} - {surnameU}
      </h1>
      <V OutsideDataV={OutsideDataU} nameV={nameU} surnameV={surnameU}></V>
    </div>
  );
}
