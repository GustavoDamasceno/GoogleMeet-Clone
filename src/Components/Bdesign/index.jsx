import image from '../../Images/bdimage.svg'
import './style.css'

function Bdesign() {
    return(
        <div className='bdcontain'>
            <img src={image} />
            <div className='blocoTxt'>
                <h3>Get a link that you can share</h3>
                <p>Click <span className='negrito'>New meeting</span> to get a link that you can send to people that you want to meet with</p>
            </div>
        </div>
    )
}

export default Bdesign