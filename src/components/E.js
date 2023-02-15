import React from "react";
import F from "./F";

export default function E (props) {
  //destructure the props
  const { OutsideDataE, nameE, surnameE } = props;

  return (
    <div>
      <h1>
        This is functional component- E- {OutsideDataE} - {nameE} - {surnameE}
      </h1>
      <F OutsideDataF={OutsideDataE} nameF={nameE} surnameF={surnameE}></F>
    </div>
  );
}
