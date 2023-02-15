import React from "react";
import C from "./C";

export default class B extends React.Component {
  //1.properties

  //2.constructor

  //3.methods

  //every class component have render() method wich return JSX

  render() {
    //we can destrucucture the props
    const { OutsideDataB, nameB, surnameB } = this.props;

    return (
      <>
        <div>
          <h1>
            This is class component-B - {OutsideDataB} - {nameB} - {surnameB}
          </h1>
        </div>
        <C OutsideDataC={OutsideDataB} nameC={nameB} surnameC={surnameB}></C>
      </>
    );
  }
}
