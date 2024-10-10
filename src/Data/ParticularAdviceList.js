import React ,{useState} from 'react'
import AdviceData from './AdviceData'
export default function ParticularAdviceList({onSelectAdvice}) {

    const[category, setCategory]= useState('');


    const getRandomAdvice =(category)=>{
        const  advice = AdviceData[category];
        const randomIndex =Math.floor(Math.random()* advice.length);
        return advice[randomIndex];

    }
    const handleGeneratorAdvice=()=>{
        if(category){
            const advice= getRandomAdvice(category);
            onSelectAdvice(advice);
        }
    }
  return (
    <div>
        <select value={category} onChange={(e)=> setCategory(e.target.value)}>
            <option>Select Category</option>
            <option value="Health">Health</option>
            <option value="Education">Education</option>
            <option value="Finance">Finance</option>
            <option  value="Nagpurkar">Nagpurkar</option>
        </select>
        <button onClick={handleGeneratorAdvice} disabled={!category}>Get Advice</button>
        
    </div>
  )
}
