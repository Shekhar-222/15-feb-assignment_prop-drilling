import React from "react";
import S from "./S";

export default class P extends React.Component {
  //1.properties

  //2.constructor

  //3.methods

  //every class component have render() method wich return JSX

  render() {
    //we can destrucucture the props
    const { OutsideDataR, nameR, surnameR } = this.props;
    console.log(this.props)

    return (
      <>
        <div>
          <h1>
            This is class component-R - {OutsideDataR} - {nameR} - {surnameR}
          </h1>
        </div>
        <S OutsideDataS={OutsideDataR} nameS={nameR} surnameS={surnameR}></S>
      </>
    );
  }
}
