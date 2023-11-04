type Props = {
    frase: string;
    autor?: string;
}

function Card({frase, autor}: Props) {
    return(
      <div className="border-2 border-red-600 p-3 text-center">
        <h3 className="text-3xl font-bond italic">{frase}</h3>
        <p className="text-right text-sm">{autor ? autor : 'Autor Desconhecid'}</p>
      </div> 
    )
}

export default Card;