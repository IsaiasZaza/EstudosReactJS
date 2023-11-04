type Props = {
    name: string,
    avatar?: string,
    descricao?: string
}

function Person(props: Props) {
    const { name, avatar = 'https://www.padraosuper.com.br/wp-content/uploads/2021/07/logo-removebg-preview.png', descricao = 'escreva profeta' } = props

    return (
        <>
            <h1>{name}</h1>
            <img
                src={avatar}
                alt="Elon Musk" />
            <p>{descricao}</p>
        </>
    )
}

export default Person;