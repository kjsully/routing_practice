import React from 'react'
import {useParams} from 'react-router-dom'

const ResultNum = (props) => {
    const {varNum} = useParams();
    return(
        <fieldset>
            <legend>Number:</legend>
            <h1>{varNum} </h1>
        </fieldset>
    )
}

export default ResultNum