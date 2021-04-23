import React from "react"
import Title from './title';
import Blurb from './blurb';
import {ButtonRow, Button} from './button'
export default function App() {
    return (
        <div className="container">
            <Title></Title>
            <Blurb></Blurb>
            <ButtonRow>
                <Button href="https://github.com/kschamplin">github</Button>
                <Button href="https://gitlab.com/saji.champlin">gitlab</Button>
                <Button href="https://github.com/kschamplin">linkedin</Button>
                <Button href="mailto:saji@saji.dev?subject=Request%20for%20Resume">resume</Button>
            </ButtonRow>
        </div>
    )
}


