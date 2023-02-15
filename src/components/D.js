import React from "react";
import E from "./E";

export default class D extends React.Component {
  //1.properties

  //2.constructor

  //3.methods

  //every class component have render() method wich return JSX

  render() {
    //we can destrucucture the props
    const { OutsideDataD, nameD, surnameD } = this.props;

    return (
      <>
        <div>
          <h1>
            This is class component-D - {OutsideDataD} - {nameD} - {surnameD}
          </h1>
        </div>
        <E OutsideDataE={OutsideDataD} nameE={nameD} surnameE={surnameD}></E>
      </>
    );
  }
}
