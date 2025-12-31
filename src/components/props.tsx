
type PropsType = {  
  username1: string;
  usename2: string;
  variable: number;
  setvariable: (value: number) => void;
  mypbj?: any; // Optional, can be replaced with correct type
  myarr?: any; // Optional, can be replaced with correct type
};

function props(props: PropsType) {
  console.log("props received:", props);
  console.log(props.mypbj);

  return (
    <div>
      <p>{props.username1}</p>
      <p>{props.usename2}</p>
      <p>{JSON.stringify(props.mypbj)}</p>
      <p>{props.variable}</p>
      <p>{props.mypbj.age}</p>
      <p>{props.mypbj.sex}</p>
      <p>{props.mypbj.country}</p>
      <button
        onClick={() => {
          props.setvariable(props.variable + 1)
        }}
      >
        click me
      </button>
    </div>
  )
}

export default props




//destructuring

// type PropsType = {
//   username1: string;
//   usename2: string;
//   variable: number;
//   setvariable: (value: number) => void;
//   mypbj?: any; // Optional, can be replaced with correct type
// };
// //destructuring of elements for props which come as object we destructure it directly 
// //like {username1, usename2, variable, setvariable, mypbj}=props
// function Props({ username1, usename2, variable, setvariable, mypbj}:PropsType) {
//   console.log("mypbj received:", mypbj);
//   console.log(mypbj);
//   //we can specify the default value if it is not present in the object of myobj
//    const{country="india"}=mypbj;

//    //we can rename the destructured object directly like the below one
//    const { age, sex: gender} = mypbj ;
  
//   return (
//     <div>
//       <p>{username1}</p>
//       <p>{usename2}</p>
//       <p>{country}</p>
//       <p>{age}</p>
//       <p>{gender}</p>
//       <p>{variable}</p>
//       <button
//         onClick={() => {
//           setvariable(variable + 1)
//         }}
//       >
//         click me
//       </button>
//     </div>
//   )
// }

// export default Props