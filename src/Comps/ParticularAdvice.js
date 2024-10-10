import React, { useState } from 'react';
import ParticularAdviceList from '../Data/ParticularAdviceList';
export default function ParticularAdvice() {
    const  [advice, setAdvice] = useState('');
  return (
    <div>
    <ParticularAdviceList onSelectAdvice={setAdvice}/>
   <p>{advice}</p>

    </div>
  )
}
