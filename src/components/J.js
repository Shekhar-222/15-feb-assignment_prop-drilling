import React from "react";
import K from "./K";

export default class J extends React.Component {
  //1.properties

  //2.constructor

  //3.methods

  //every class component have render() method wich return JSX

  render() {
    //we can destrucucture the props
    const { OutsideDataJ, nameJ, surnameJ } = this.props;
    console.log(this.props)

    return (
      <>
        <div>
          <h1>
            This is class component-J - {OutsideDataJ} - {nameJ} - {surnameJ}
          </h1>
        </div>
        <K OutsideDataK={OutsideDataJ} nameK={nameJ} surnameK={surnameJ}></K>
      </>
    );
  }
}
