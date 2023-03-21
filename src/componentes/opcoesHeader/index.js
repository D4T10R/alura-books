import styled from 'styled-components'

const Opcoes = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 2em;
`

const Opcao = styled.li`
    list-style: none;
    text-transform: uppercase;
    font-size: 20px;
    cursor: pointer;
`

const opcoes = ['compras', 'favoritos', 'minha estante']

function OpcoesHeader() {
    return (
        <Opcoes>
            { opcoes.map( (opcao) => (
                <Opcao className='opcoes'><a>{opcao}</a></Opcao>
            )) }
        </Opcoes>
    )
}

export default OpcoesHeader