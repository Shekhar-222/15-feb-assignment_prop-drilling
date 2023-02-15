//1. Import Area
import B from "./B";

//2. Function Defination Area
//Lets create a components

let A = (props) => {
  //we can destructure the props
  const { children, name, surname } = props;

  return (
    <>
      <div>
        <h1>
          This is functional component - A - {children} - {name} - {surname}
        </h1>
      </div>
      <B nameB={name} OutsideDataB={children} surnameB={surname}></B>
    </>
  );
};

// Default export
export default A;

//Named Export
