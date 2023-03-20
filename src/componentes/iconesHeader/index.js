import './estilo.css'

import perfil from '../../img/perfil.svg'
import sacola from '../../img/sacola.svg'

const icones = [perfil, sacola]

function IconesHader() {
    return (
        <ul className='lista-icones'>
            { icones.map((icone) => (
                <li className='icones'><a><img src={icone}></img></a></li>
            )) }            
        </ul>
    )
}

export default IconesHader