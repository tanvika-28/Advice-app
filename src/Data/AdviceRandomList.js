import React from 'react';
const adviceArray =[
    "Believe you can and you're halfway there.",
    "The way to get started is to quit talking and begin doing.",
    "Don't watch the clock; do what it does. Keep going.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts",
    "You don't have to be great to start, but you have to start to be great"

];
export default function AdviceRandomList({onSelectAdvice}) {
    const getRandomAdvice = ()  =>{
        const randomIndex = Math.floor(Math.random()* adviceArray.length);

        return adviceArray[randomIndex];
    }
    const handleClick = () =>{
        const advice =getRandomAdvice();
        onSelectAdvice(advice)
    }


  return (
    <div>
        <button onClick={handleClick}>   Get Advice</button>
    </div>
  )
}
