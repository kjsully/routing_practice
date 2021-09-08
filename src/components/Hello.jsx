import React from 'react'
import { useParams } from 'react-router-dom'

const Hello = (props) => {
    const {color} = useParams();
    const {bgColor} = useParams();
    const {word} = useParams();
    return(
        <fieldset>
            <legend>Hello</legend>
            <h3 style={{color: color, backgroundColor: bgColor}}>The word is: {word} </h3>
        </fieldset>
    )
}

export default Hello