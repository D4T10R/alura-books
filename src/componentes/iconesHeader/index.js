import perfil from '../../img/perfil.svg'
import sacola from '../../img/sacola.svg'
import styled from 'styled-components'

const Icones = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const Icone = styled.li`
    list-style: none;
    margin-right: 20px;
    cursor: pointer;
`

const icones = [perfil, sacola]

function IconesHader() {
    return (
        <Icones>
            { icones.map((icone) => (
                <Icone className='icones'><a><img src={icone}></img></a></Icone>
            )) }            
        </Icones>
    )
}

export default IconesHader