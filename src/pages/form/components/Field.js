import React from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

export default props => (
    <Grid item>
        <TextField
            id="standard-read-only-input"
            label={props.label}
            InputProps={{
                readOnly: !props.edit,
            }}
            helperText={props.type}
            required={props.required}
        />
    </Grid>
)