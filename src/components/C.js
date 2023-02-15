import React from 'react'
import D from './D'

export default function (props) {
    //destructure the props
    const {OutsideDataC,nameC,surnameC}=props;
  
  return (
    <div>
        <h1>This is functional component- C- {OutsideDataC} - {nameC} - {surnameC}</h1>
        <D OutsideDataD={OutsideDataC} nameD={nameC} surnameD={surnameC}></D>
    </div>
  )
}
