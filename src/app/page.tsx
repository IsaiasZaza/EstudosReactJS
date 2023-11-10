"use client"

import { Costume } from "./components/Costume";

function Page() {

  const clickButton = () => alert("Clicou no botao 1");
  const clickButton2 = () => alert("Clicou no botao 2");
  const clickButton3 = () => alert("Clicou no botao 3");
   

  return (
      <div className="container">
        <Costume
        label="Salve 1"
        onClick={clickButton}
        />
        <Costume
        label="Salve 2"
        onClick={clickButton2}
        />
        <Costume
        label="Salve 3"
        onClick={clickButton3}
        />
      </div>
    )
    
}

export default Page;


 
