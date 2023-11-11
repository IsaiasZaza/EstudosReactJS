"use client"

import { FormEvent, useState } from "react";

function Page() {
  const [name, setName] = useState('');
  const [alterar, setAlterar] = useState(false);
  
  const mostrar = () => {
    setAlterar(!alterar);
  }

  return (
    <div>
      <input type="text" placeholder="digite" value={name} onChange={e => setName(e.target.value)}/>  
      <button onClick={mostrar}>{alterar ? 'isaias tira por favor' : 'isaias mostra o nome por favor'}</button>
      
      { alterar &&
      <p>Seu nome é {name ? name : 'ola querdidos'}</p>}
    </div> 
  )
    
}

export default Page;


 
