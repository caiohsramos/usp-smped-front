import React from 'react'
import Field from './Field'
import { Grid } from '@material-ui/core';

function renderQuestions(fields, edit) {
    fields.sort((field1, field2) => field1.order - field2.order)
    return fields.map(field => (
        <Field
            label={field.label}
            type={field.type}
            required={field.required}
            key={field.order}
            edit={edit} />
    ))
}

export default props => (
    <Grid container direction="column" spacing={16}>
        <h1>Perguntas</h1>
        {renderQuestions(props.fields, props.edit)}
    </Grid>
)