"use client"
import { Button } from '@/componests/Button';
import React from 'react';
import { useState } from 'react';


export default function Home() {
  
  const [number, setNumber] = useState<string>('');
  const [operator, setOperator] = useState<string>('');
  const [numbers, setNumbers] = useState<string[]>([]);

  const handleButtonClick = (value: string) => {
    setNumbers((prevNumbers) => [...prevNumbers, value]);
  };

  const mathematicsOperations = (values: string[]) => {
    let resultNumber = ''; 
      values.map((item) =>  {
        if(item == "*" || item == "/" || item == "-" || item == "+"){
          setOperator(item)
        }else if(operator == null){
          resultNumber += item;
        }else{
          
        }
      })
 
      setNumber(resultNumber);
      console.log(number)
  }
  const checkAction = (value: string) =>{
      if(value === "="){
        mathematicsOperations(numbers)
        //console.log(numbers)
      }else{  
        handleButtonClick(value.toString())
        console.log(operator)
      }
  }

  return (
    <main className="container">
      <div className="View">
        {/* Conteúdo da View */}
        {numbers}
      </div>
      <div className="Digit">
        <div className="grid-container">
          {[7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", 0, "c", "=", "/"].map((item) => (
            <Button key={item} text={item} onClick={() => checkAction(item.toString())} />
          ))}
        </div>
      </div>
    </main>
  );
}
