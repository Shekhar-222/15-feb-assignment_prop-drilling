import React from "react";


export default class Z extends React.Component {
  //1.properties

  //2.constructor

  //3.methods

  //every class component have render() method wich return JSX

  render() {
    //we can destrucucture the props
    const { OutsideDataZ, nameZ, surnameZ } = this.props;
    console.log(this.props)

    return (
      <>
        <div>
          <h1>
            This is class component-Z - {OutsideDataZ} - {nameZ} - {surnameZ}
          </h1>
        </div>
        
      </>
    );
  }
}
