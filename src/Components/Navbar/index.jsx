import './style.css'

import logo from '../../Images/logo.svg'

function Navbar() {
    return(
        <div className="navcontain">
            <img className='logoimg' src={logo} />
            <p className='tittlebar'>Google Meet</p>

            <div className='perfil'></div>
        </div>
    )
}

export default Navbar