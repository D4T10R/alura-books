import './estilo.css';

import Logo from '../../componentes/logo/index';
import OpcoesHeader from '../../componentes/opcoesHeader';
import IconesHeader from '../../componentes/iconesHeader';

function Header() {
    return (
        <header className='app-cabecalho'>
            <Logo></Logo>
            <OpcoesHeader></OpcoesHeader>
            <IconesHeader></IconesHeader>
        </header>
    )
}

export default Header