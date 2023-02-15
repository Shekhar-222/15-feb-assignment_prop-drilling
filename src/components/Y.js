import React from "react";
import Z from "./Z";

export default function W (props) {
  //destructure the props
  const { OutsideDataY, nameY, surnameY} = props;

  return (
    <div>
      <h1>
        This is functional component- Y- {OutsideDataY} - {nameY} - {surnameY}
      </h1>
      <Z OutsideDataZ={OutsideDataY} nameZ={nameY} surnameZ={surnameY}></Z>
    </div>
  );
}
