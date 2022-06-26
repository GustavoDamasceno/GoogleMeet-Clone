import React, { useState, useEffect } from 'react';
import './style.css'

import logo from '../../Images/logo.svg'
import discover from '../../Images/discover.svg'
import config from '../../Images/config.svg'
import info from '../../Images/info.svg'
import duvida from '../../Images/duvida.svg'


function Navbar() {
    const [dateHour, setDateHour] = useState();
    const [dateMinute, setDateMinute] = useState();
    const [dateDay, setDateDay] = useState();
    const [dateMonth, setDateMonth] = useState();

    useEffect(() => {
        const id = setInterval(() => setDateHour(new Date().getHours()));
        const id1 = setInterval(() => setDateMinute(new Date().getMinutes()));
        const id2 = setInterval(() => setDateDay(new Date().getDay()));
        const id3 = setInterval(() => setDateMonth(new Date().getMonth()));
        return () => {
            clearInterval(id, id1, id2, id3);
        }
    }, []);

    const day = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
    const month = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
    return(
        <div className="navcontain">
            <img className='logoimg' src={logo} />
            <p className='tittlebar'>Google Meet</p>

            <p className='txthours'>{dateHour}:{dateMinute}</p>
            <p className='point'>•</p>
            <p className='data'>{day[dateDay]}, 21 {month[dateMonth]}</p>

            <img className='duvida' src={duvida} />
            <img className='info' src={info} />
            <img className='config' src={config} />
            <img className='disco' src={discover} />
            <div className='perfil'></div>
        </div>
    )
}

export default Navbar