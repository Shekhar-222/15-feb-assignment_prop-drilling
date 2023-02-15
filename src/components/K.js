import React from "react";
import L from "./L";

export default class K extends React.Component {
  //1.properties

  //2.constructor

  //3.methods

  //every class component have render() method wich return JSX

  render() {
    //we can destrucucture the props
    const { OutsideDataK, nameK, surnameK } = this.props;
    console.log(this.props)

    return (
      <>
        <div>
          <h1>
            This is class component-K - {OutsideDataK} - {nameK} - {surnameK}
          </h1>
        </div>
        <L OutsideDataL={OutsideDataK} nameL={nameK} surnameL={surnameK}></L>
      </>
    );
  }
}
