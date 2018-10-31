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
                    id="activity"
                    label="Atividade / Eixo"
                    defaultValue={props.form.activity}
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </Grid>
            <Grid item sm={4} spacing={16} container direction="column">
                <Grid item>
                    <TextField
                        id="office"
                        label="Secretaria"
                        defaultValue={props.form.office}
                        InputProps={{
                            readOnly: true,
                        }}
                        fullWidth
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="standart-owner-input"
                        label={`Criado em ${props.form._created} por`}
                        defaultValue={props.form.owner}
                        InputProps={{
                            readOnly: true,
                        }}
                        fullWidth
                    />
                </Grid>
            </Grid>
        </Grid>
    </Grid>
)