import React from "react";
import O from "./O";

export default class N extends React.Component {
  //1.properties

  //2.constructor

  //3.methods

  //every class component have render() method wich return JSX

  render() {
    //we can destrucucture the props
    const { OutsideDataN, nameN, surnameN } = this.props;
    console.log(this.props)

    return (
      <>
        <div>
          <h1>
            This is class component-N - {OutsideDataN} - {nameN} - {surnameN}
          </h1>
        </div>
        <O OutsideDataO={OutsideDataN} nameO={nameN} surnameO={surnameN}></O>
      </>
    );
  }
}
