import Square from '@/app/components/Square'
import Circle from './components/Circle';
import Person from './components/Person';
import Card from './components/Card'
import {peopleList} from '@/data/peopleList';

function Page() {
  const progamador = peopleList.filter(person => person.profession === 'Programador')
  
  const horario = 1700
  let bocaJunior = '';
  let gols: number = 3;
  let historia: string = 'Historico';
  if(gols >= 3 ){
    bocaJunior = 'VITORIAAAA';
}else if(gols < 3){
  bocaJunior = 'Derrotaaaaaaa';
}


  return (
    <div className="w-screen h-screen flex-col justify-center items-center">
      <h2>{horario}</h2>
      <h3>{bocaJunior}</h3>
      <h4>{historia}</h4>
    </div>
    );
    
}

export default Page;

//{peopleList.map(person => 
      
//<li key={person.id}>{person.name} - {person.profession}</li>)}

/*<div>
<h1 className="font-bold text-lg">Olá next</h1>
<p>algum texo</p>
<ul>
  {progamador.length > 0 && 
    <>
      <h3>Lista de programadores</h3>
      <ul>
        {progamador.map(person => <li>{person.profession} {person.name}</li>)}
      </ul>
    </>
  }
 
 
 
</ul>
</div>*/