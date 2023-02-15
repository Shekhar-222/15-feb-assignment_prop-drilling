import React from "react";
import U from "./U";

export default class T extends React.Component {
  //1.properties

  //2.constructor

  //3.methods

  //every class component have render() method wich return JSX

  render() {
    //we can destrucucture the props
    const { OutsideDataT, nameT, surnameT } = this.props;
    console.log(this.props)

    return (
      <>
        <div>
          <h1>
            This is class component-T - {OutsideDataT} - {nameT} - {surnameT}
          </h1>
        </div>
        <U OutsideDataU={OutsideDataT} nameU={nameT} surnameU={surnameT}></U>
      </>
    );
  }
}
