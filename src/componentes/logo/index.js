import './estilo.css'
import logoAlura from '../../img/logo.svg'


function logo() {

    return (
        <div className='campo-logo'>
            <img src={logoAlura} alt='logo' className='logo-img'></img>
            <p className='logo-texto'><strong>Alura</strong>Books</p>
        </div>
    )

}


export default logo


