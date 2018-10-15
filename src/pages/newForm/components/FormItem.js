import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const FormItem = props => {
	const { formItem, handleChangeFormItem } = props;
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
                                    id={"item-name-"+formItem.ORDER}
                                    label="Nome do campo"
                                    className="field-name"
                                    value={formItem.LABEL}
                                    onChange={(e) => handleChangeFormItem('LABEL',e)}
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    select
                                    label="Tipo do campo"
                                    className="select-type"
                                    value={formItem.SELECTED_TYPE}
                                    onChange={(e) => handleChangeFormItem('SELECTED_TYPE',e)}
                                    margin="normal"
                                    name={"item-type-"+formItem.ORDER}>
                                        {types.map(option => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                </TextField>
                            </Grid>
                        </Grid>
                        <Grid item container justify='flex-end' sm={12} md={6}>
                            <Grid item>
                                <FormControlLabel
                                    label="Obrigatório"
                                    control={
                                        <Switch
                                            id={"item-switch-"+formItem.ORDER}
                                            checked={formItem.REQUIRED}
                                            onChange={(e) => handleChangeFormItem('REQUIRED',e)}
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