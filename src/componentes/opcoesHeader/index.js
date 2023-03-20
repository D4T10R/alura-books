import './estilo.css'

const opcoes = ['compras', 'favoritos', 'minha estante']

function OpcoesHeader() {
    return (
        <ul className='lista-opcoes'>
            { opcoes.map( (opcao) => (
                <li className='opcoes'><a>{opcao}</a></li>
            )) }
        </ul>
    )
}

export default OpcoesHeader