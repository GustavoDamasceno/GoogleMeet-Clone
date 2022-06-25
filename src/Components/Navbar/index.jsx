import './style.css'

import logo from '../../Images/logo.svg'
import discover from '../../Images/discover.svg'
import config from '../../Images/config.svg'
import info from '../../Images/info.svg'
import duvida from '../../Images/duvida.svg'

function Navbar() {
    return(
        <div className="navcontain">
            <img className='logoimg' src={logo} />
            <p className='tittlebar'>Google Meet</p>
            
            <img className='duvida' src={duvida} />
            <img className='info' src={info} />
            <img className='config' src={config} />
            <img className='disco' src={discover} />
            <div className='perfil'></div>
        </div>
    )
}

export default Navbar