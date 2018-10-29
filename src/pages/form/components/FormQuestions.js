import React from 'react'
import Field from './Field'

function renderQuestions(fields, edit) {
    fields.sort((field1, field2) => field1.order - field2.order)
    return fields.map(field => (
        <Field
            label={field.label}
            type={field.type}
            required={field.required}
            key={field.id}
            edit={edit} />
    ))
}

export default props => (
    <div>
        <h1>Questions</h1>
        {renderQuestions(props.fields, props.edit)}
    </div>
)