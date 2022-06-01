import React, { useState } from 'react'
import '../styles/Input.css'
function InputShorten({ setInputValue }) {

    const [value, setValue] = React.useState("")

    const handleClick = () => {
        setInputValue(value);
        setValue("")
    }

    return (
        <div className='input-container'>
            <div>
                <h1 className='input-url'>URL <span>Shortener</span></h1>

                <input
                    type="text"
                    placeholder="Paste a link to shorten"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    className="input-input"
                />
                <button onClick={handleClick} className="input-button">Shorten link</button>
            </div>


        </div>
    )
}

export default InputShorten