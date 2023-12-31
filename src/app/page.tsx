"use client"

import { Person } from "@/types/Person";
import { FormEvent, useState } from "react";
import { TodoItem } from "@/types/TodoItem";

function Page() {

  //seletor de dia
  //const [valor, setValor] = useState("");
  //const handleChange = (event: any) => {
   //setValor(event.target.value);
 // };
  //possivel update

  const [itemInput, setItemInput] = useState('');

  //adicionar
  const [list, setList] = useState<TodoItem[]>([
 
    { label: 'Comece a estudar', checked: false }
    

  ]);
  const adicionarLi = () => {

    //verificação de label vazia
    if (itemInput.trim() === '') {
      alert('Por favor preencha o campo');
      return;
    }
    setList([
      ...list, { label: itemInput, checked: false }]);
    setItemInput('');
  }

  //deletar
  const deleteItem = (index: number) => {
    setList(list.filter((item, key) => key !== index))
  }

  //ALTERAR
  const alterarCheck = (index: number) => {
    let newList = [...list];
    newList[index].checked = !newList[index].checked;
    setList(newList);
  }
  return (
    <>
  

      <div className="centro">
          <div>
            <h1>Lista de tarefas</h1>
          </div>
          <div>
            <div className="beleza">
              <input type="text"
                placeholder="O que deseja fazer?"
                value={itemInput}
                onChange={e => setItemInput(e.target.value)}
              />
    
              <button onClick={adicionarLi}>Adicionar</button>
            </div>
          </div>
        

        <p>{list.length} itens na lista</p>
        <ul>
          {list.map((item, index) =>
          (<li key={index}>
            <input onClick={() => alterarCheck(index)} type="checkbox" checked={item.checked} />
            {item.label} - <button onClick={() => deleteItem(index)}>deletar</button></li>))}
        </ul>
      </div>
     
    </>
  )

}

export default Page;



