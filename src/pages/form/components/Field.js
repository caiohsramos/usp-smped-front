import React from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

const type = {
    number: 'Número',
    text: 'Texto',
}

export default props => (
    <Grid item>
        <TextField
            id={`standart-field-${props.id}-input`}
            label={`${props.label} (${type[props.type]})`}
            InputProps={{
                readOnly: !props.edit,
            }}
            required={props.required}
            fullWidth
        />
    </Grid>
)