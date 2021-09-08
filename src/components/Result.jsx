import React from 'react'
import { useParams } from 'react-router-dom'

const Result = (props) => {
    const { varName } = useParams();
    if (isNaN(varName)) {
        return (
            <fieldset>
                <legend>Result</legend>
                <h1>Word: {varName} </h1>
            </fieldset>
        )
    }
    else {
        return (
            <fieldset>
                <legend>Result</legend>
                <h1>Number: {varName} </h1>
            </fieldset>
        )
    }
}

export default Result