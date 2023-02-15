import React from "react";
import I from "./I";

export default class H extends React.Component {
  //1.properties

  //2.constructor

  //3.methods

  //every class component have render() method wich return JSX

  render() {
    //we can destrucucture the props
    const { OutsideDataH, nameH, surnameH } = this.props;
    console.log(this.props)

    return (
      <>
        <div>
          <h1>
            This is class component-H - {OutsideDataH} - {nameH} - {surnameH}
          </h1>
        </div>
        <I OutsideDataI={OutsideDataH} nameI={nameH} surnameI={surnameH}></I>
      </>
    );
  }
}
