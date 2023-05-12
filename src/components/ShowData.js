
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ShowData({ numbers, name }) {
  const [pivotIndex, setPivotIndex] = useState(-1);
   

  function handleNext(numbers) {
    const value1 = Object.values(numbers[0]);
    const value2 = Object.values(value1);
    const value3 = value2.map((e)=> e);
    const value4 = Object.values(value3);
   

    let finalIndex = pivotIndex;
    for (let i = 0; i < value4.length; i++) {
      let beforeSum = 0;
      let afterSum = 0;
      for (let j = i - 1; j >= 0; j--) {
        beforeSum += value4[j];
      }
      for (let k = i + 1; k <= value4.length - 1; k++) {
        afterSum += value4[k];
      }
      if (beforeSum === afterSum) {
        let index = value4.indexOf(value4[i]);
        finalIndex = index;
      }
    }
    return finalIndex;
   
  }

  const handlePivotClick = () => {
    setPivotIndex(() => handleNext(numbers));
    
  };

  const dataSubmit = () => {
  
  };

  return (
    <div className="container">
      <div className="card p-3 mt-5 mx-auto" style={{ maxWidth: "400px" }}>
        <h4 className="mb-3">Your Input Numbers: [{numbers.join(", ")}]</h4>
        <button
          className="btn btn-primary mb-3"
          onClick={handlePivotClick}
        >
          Find Pivot
        </button>
        <h3 className="mb-3">Pivot index is <b style={{color:'brown'}}>{pivotIndex}</b></h3>
        <h3 className="mb-3">{name}</h3>

        <Link to="/step2" className="btn btn-secondary mr-2">
          Back
        </Link>
        <button
          type="submit"
          className="btn btn-success"
          onClick={dataSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}




// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export default function ShowData({ numbers, name }) {
//   const [pivotIndex, setPivotIndex] = useState(-1);
//    console.log(name) 

//   function handleNext(numbers) {
//   let finalIndex = pivotIndex;
//     for (let i = 0; i < numbers.length; i++) {
//       let beforeSum = 0;
//       let afterSum = 0;
//       for (let j = i - 1; j >= 0; j--) {
//         beforeSum += numbers[j];
//       }
//       for (let k = i + 1; k <= numbers.length - 1; k++) {
//         afterSum += numbers[k];
//       }
//       if (beforeSum === afterSum) {
//         let index = numbers.indexOf(numbers[i]);
//         finalIndex = index;
//       }
//     }

//     return finalIndex;
//   }

//   const handlePivotClick = () => {
//     setPivotIndex(() => handleNext(numbers));
//     let ans =handleNext(numbers);
//     console.log(ans)
    
//   };
//   const dataSubmit = ()=>{
//     console.log(name)
//   }

//   return (
//     <div style={{ marginLeft: "600px", marginTop: "250px" }}>
//       <h4>Your Input was Numbers: {`[ ${numbers.map((item) => item)} ]`}</h4>
//       Click here to{" "}
//       <button style={{ marginLeft: "80px" }} onClick={handlePivotClick}>
//         Find Pivot
//       </button>
//       <h3>Pivot index is {pivotIndex} </h3>
//       <h3>{name}</h3>
       
//         <Link to ="/step2">
//            <button>Back</button>
//         </Link>

//        <button type="submit" onClick={dataSubmit} style={{marginLeft:'70px'}}>Submit</button>
//     </div>
//   );
// }
