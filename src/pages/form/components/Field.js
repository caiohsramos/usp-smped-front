import React from 'react'

export default props => (
    <div>
        <h2>{props.label}</h2>
        <h2>{props.type}</h2>
        <h2>{props.required}</h2>
    </div>
)