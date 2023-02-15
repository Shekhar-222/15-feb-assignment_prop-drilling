import React from "react";
import G from "./G";

export default class F extends React.Component {
  //1.properties

  //2.constructor

  //3.methods

  //every class component have render() method wich return JSX

  render() {
    //we can destrucucture the props
    const { OutsideDataF, nameF, surnameF } = this.props;

    return (
      <>
        <div>
          <h1>
            This is class component-F - {OutsideDataF} - {nameF} - {surnameF}
          </h1>
        </div>
        <G OutsideDataG={OutsideDataF} nameG={nameF} surnameG={surnameF}></G>
      </>
    );
  }
}
