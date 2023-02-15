import React from "react";
import M from "./M";

export default class J extends React.Component {
  //1.properties

  //2.constructor

  //3.methods

  //every class component have render() method wich return JSX

  render() {
    //we can destrucucture the props
    const { OutsideDataL, nameL, surnameL } = this.props;
    console.log(this.props)

    return (
      <>
        <div>
          <h1>
            This is class component-L - {OutsideDataL} - {nameL} - {surnameL}
          </h1>
        </div>
        <M OutsideDataM={OutsideDataL} nameM={nameL} surnameM={surnameL}></M>
      </>
    );
  }
}
