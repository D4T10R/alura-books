import Logo from '../Logo/index';
import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../IconesHeader';
import styled from 'styled-components'

const  HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    padding: 1em 0;
    background: #ffffff;   
`


function Header() {
    return (
        <HeaderContainer>
            <Logo></Logo>
            <OpcoesHeader></OpcoesHeader>
            <IconesHeader></IconesHeader>
        </HeaderContainer>
    )
}

export default Header