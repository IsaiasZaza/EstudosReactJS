
type Props = {
    label: string,
    onClick: () => void;
}

export const Costume = ({label, onClick}: Props) => {
 
    function todosClick(){
        onClick();
    }

    return (
        <button onClick={todosClick}>{label}</button>
    )
}