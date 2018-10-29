import React from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

export default props => (
    <Grid container direction="column" alignItems="center">
        <Grid item>
            <h1>{props.form.name}</h1>
        </Grid>
        <Grid item container justify="center">
            <Grid item sm={6}>
                <TextField
                    id="standard-read-only-input"
                    label="Atividade"
                    defaultValue={props.form.activity}
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </Grid>
            <Grid item sm={3} spacing={16} container direction="column">
                <Grid item>
                    <TextField
                        id="standard-read-only-input"
                        label="Secretaria"
                        defaultValue={props.form.office}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="standard-read-only-input"
                        label="Criado por"
                        defaultValue={props.form.owner}
                        helperText={`Em ${props.form._created}`}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </Grid>
            </Grid>
        </Grid>
    </Grid>
)