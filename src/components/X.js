import React from "react";
import Y from "./Y";

export default class X extends React.Component {
  //1.properties

  //2.constructor

  //3.methods

  //every class component have render() method wich return JSX

  render() {
    //we can destrucucture the props
    const { OutsideDataX, nameX, surnameX } = this.props;
    console.log(this.props)

    return (
      <>
        <div>
          <h1>
            This is class component-X - {OutsideDataX} - {nameX} - {surnameX}
          </h1>
        </div>
        <Y OutsideDataY={OutsideDataX} nameY={nameX} surnameY={surnameX}></Y>
      </>
    );
  }
}
