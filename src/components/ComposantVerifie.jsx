import React from 'react'
import propTypes from 'prop-types'

export const ComposantVerifie = (props) => {
    return (
        <p>{props.value}</p>
    )
}

ComposantVerifie.propTypes = {
    value : propTypes.string,
    secondValue : propTypes.number.isRequired
}
