"use client"

import { Person } from "@/types/Person";
import { FormEvent, useState } from "react";

function Page() {
   
  const [alterar, setAlterar] = useState({name: '', sobrenome: '', place: 'Digite'})

 
  const click = () => {
    setAlterar({...alterar, name: '', sobrenome: '', place: 'Digite novamente'})
  
  }


  return (
    <div>
      <input type="text" 
      placeholder={alterar.place}
      value={alterar.name}
      onChange={e => setAlterar({...alterar, name: e.target.value})} 
      />

      <input type="text"
      placeholder={alterar.place}
      value={alterar.sobrenome}
      onChange={e => setAlterar({...alterar, sobrenome: e.target.value })}  
      />
      <p>O nome todo do seu personagem é</p>
      <p>{alterar.name} {alterar.sobrenome}</p>  
      <button onClick={click}>eae</button>
    </div> 
  )
    
}

export default Page;


 
