
import './App.css';
import ShowData from './components/ShowData';
import { Routes, Route } from "react-router-dom";

import Step1 from './components/Step1';
import Step2 from './components/Step2';
import AddNumber from "./components/Number";
import { useState } from 'react';


function App() {
  const [numbers, setNumbers] = useState([]);
  const [name, setName] = useState("");
 
  const numArrHandler = (data) =>{
    setNumbers([...numbers, data])
  }

  const nameHandler = (data) =>{
    setName(`${data.F_name} ${data.L_name} `)
  }

if(numbers.length > 0){
  console.log(numbers)
}
console.log(name)

  return (
   <div> 
   {/* <Navbar/> */}
        <Routes>
         
            <Route path="/" element={<Step1/>}/>
            <Route path='/step2' element={<Step2 nameHandler={nameHandler}/>}/>
            <Route path='/showData' element={<ShowData numbers = {numbers} name = {name}/>}/>
            <Route path='/addNumber' element= {<AddNumber numArr={numArrHandler}/>}></Route>
        </Routes>
 

   </div>
  );
}

export default App;
