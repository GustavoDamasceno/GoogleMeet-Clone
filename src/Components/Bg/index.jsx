import './style.css'

function Bg() {
    return(
        <div className='bgcontain'>
            <h3>Premium video meetings. Now free for everyone.</h3>
            <p className='txtbg'>We re-engineered the service that we built for secure business meetings, Google Meet, to make it free and available for all.</p>
            <div className='blocoinput'>
                <button>New meeting</button>
                <input placeholder='Enter a code or link'></input>
            </div>
            <hr/>
            <p className='endbg'><span>Learn more</span> about Google Meet</p>
        </div>
    )
}

export default Bg