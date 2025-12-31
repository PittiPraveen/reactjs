import { useState } from "react";
import Props from "./props";


function card() {
  const[variable, setvariable]=useState(0);
  let obj={
    age:"22",
    sex:"male"
  }
  let arr=[1,2,3,4,5,6];

  return (
    <div>
      <p>"hello world"</p>
      <p>{variable}</p>
      <Props
       username1="pitti"
       usename2= "praveen"
       variable={variable}
       setvariable={setvariable}
       mypbj={obj}
       myarr={arr}
      />
      <p>variable is {variable}</p>
    </div>
  )
}

export default card