import logoAlura from '../../img/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
`

const LogoImagem = styled.img`
    margin-right: 10px;
    width: 80px;
`
const LogoTexto = styled.p`
    font-size: 32px;
`

function logo() {

    return (
        <LogoContainer>
            <LogoImagem src={logoAlura} alt='logo'/>
            <LogoTexto><strong>Alura</strong>Books</LogoTexto>
        </LogoContainer>
    )

}


export default logo


