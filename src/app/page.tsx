import Square from '@/app/components/Square'
import Circle from './components/Circle';
import Person from './components/Person';
import Card from './components/Card'
import {peopleList} from '@/data/peopleList';

function Page() {

   peopleList.map(person => <><li>{person.id}</li></>)

  return (
    <div>
    <h1 className="font-bold text-lg">Olá next</h1>
    <p>algum texto</p>
    <ul>
      {
       peopleList.map(person => 
      <>
      <li key={person.id}>{person.name} - {person.profession}</li>
      </> )}
     
     
    </ul>
    </div>
    );
    
}

export default Page;