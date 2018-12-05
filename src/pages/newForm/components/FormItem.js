import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import styled from 'styled-components'

const SelectType = styled(TextField)`
    && {width:10em}
`

const FormItem = props => {
    const { formItem, handleChangeFormItem, errors } = props;
    const types = [
        {
            value: 'text',
            label: 'Texto',
        },
        {
            value: 'number',
            label: 'Numérico'
        }
    ];


    return (
        <div className='form-item' >
            <Card>
                <CardContent>
                    <Grid container alignItems='center' justify='space-between'>
                        <Grid item container direction="column" sm={12} md={6}>
                            <Grid item>
                                <TextField
                                    id={"item-name-" + formItem.order}
                                    label="Nome do campo"
                                    className="field-name"
                                    value={formItem.label}
                                    onChange={(e) => handleChangeFormItem('label', e)}
                                    margin="normal"
                                    error={errors["item-name-" + formItem.order]}
                                />
                            </Grid>
                            <Grid item>
                                <SelectType
                                    select
                                    label="Tipo do campo"
                                    value={formItem.type}
                                    onChange={(e) => handleChangeFormItem('type', e)}
                                    margin="normal"
                                    name={"item-type-" + formItem.order}>
                                    {types.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </SelectType>
                            </Grid>
                        </Grid>
                        <Grid item container justify='flex-end' sm={12} md={6}>
                            <Grid item>
                                <FormControlLabel
                                    label="Obrigatório"
                                    control={
                                        <Switch
                                            id={"item-switch-" + formItem.order}
                                            checked={formItem.required}
                                            onChange={(e) => handleChangeFormItem('required', e)}
                                            value={"required"}
                                            color="primary"
                                        />
                                    }
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    );

};


export { FormItem };