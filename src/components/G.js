import React from "react";
import H from "./H";

export default function G (props) {
  //destructure the props
  const { OutsideDataG, nameG, surnameG } = props;

  return (
    <div>
      <h1>
        This is functional component- G- {OutsideDataG} - {nameG} - {surnameG}
      </h1>
      <H OutsideDataH={OutsideDataG} nameH={nameG} surnameH={surnameG}></H>
    </div>
  );
}
