import React from "react";
import Q from "./Q";

export default class P extends React.Component {
  //1.properties

  //2.constructor

  //3.methods

  //every class component have render() method wich return JSX

  render() {
    //we can destrucucture the props
    const { OutsideDataP, nameP, surnameP } = this.props;
    console.log(this.props)

    return (
      <>
        <div>
          <h1>
            This is class component-P - {OutsideDataP} - {nameP} - {surnameP}
          </h1>
        </div>
        <Q OutsideDataQ={OutsideDataP} nameQ={nameP} surnameQ={surnameP}></Q>
      </>
    );
  }
}
