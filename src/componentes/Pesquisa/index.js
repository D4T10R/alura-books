import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import { livros } from '../DadosPesquisa'

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const SubTitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`
const LivrosProcurados = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Pesquisa() {
    const [LivroProcurado, setLivroProcurado] = useState([])

    console.log(LivroProcurado)


    return (

        <PesquisaContainer>
            <Titulo>Encontre o livro que mais necessita</Titulo>
            <SubTitulo>Procure o livro de acordo</SubTitulo>
            <Input 
                placeholder='Pesquise seu livro aqui'
                onBlur={ evento => {
                    const textoDigitado = evento.target.value
                    const livrosFiltrados = livros.filter(livro => livro.nome.includes(textoDigitado))
                    setLivroProcurado(livrosFiltrados)
                }}
            ></Input>
            { LivroProcurado.map( (livro) => (
                <LivrosProcurados>
                    <img src={livro.foto} />
                    <p>{livro.nome}</p>

                </LivrosProcurados>
            )) }            
        </PesquisaContainer>

    )

}

export default Pesquisa