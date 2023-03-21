import styled from "styled-components"
import { Titulo } from "../Titulo"
import { dadosLivros } from "./dadosLancamentos"

const LancamentosContainers = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
` 

const ConjuntoLivros = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`


function UltimosLancamentos() {

    return (

        <LancamentosContainers>
            <Titulo 
                cor='#EB9B00'
                tamanhoFonte='36px'
            >Últimos Lançamentos</Titulo>
            <ConjuntoLivros>
                { dadosLivros.map(livro => (
                    <img src={livro.foto} />
                )) }
            </ConjuntoLivros>
        </LancamentosContainers>

    )

}

export default UltimosLancamentos