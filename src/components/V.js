import React from "react";
import W from "./W";

export default class V extends React.Component {
  //1.properties

  //2.constructor

  //3.methods

  //every class component have render() method wich return JSX

  render() {
    //we can destrucucture the props
    const { OutsideDataV, nameV, surnameV } = this.props;
    console.log(this.props)

    return (
      <>
        <div>
          <h1>
            This is class component-V - {OutsideDataV} - {nameV} - {surnameV}
          </h1>
        </div>
        <W OutsideDataW={OutsideDataV} nameW={nameV} surnameW={surnameV}></W>
      </>
    );
  }
}
