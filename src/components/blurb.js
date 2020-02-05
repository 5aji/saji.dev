import React, { useState, useEffect } from "react"
import Typed from 'typed.js';
export default function Blurb() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        if (!init) {
            const typed = new Typed('#typed', {
                stringsElement: '#typed-strings',
                typeSpeed: 40,
                backSpeed: 20,
              });            
            setInit(true)
        }
    })

    return (
        <div className="web_blurb">
            <div id="typed-strings">
                <p>I'm Saji, an aspiring developer and Computer Engineering student. ^500 <br/> This is my frontpage. Take a look!</p>
            </div>
            <span id="typed"></span>
        </div>
    )
}