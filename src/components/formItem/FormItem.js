import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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
                    <div className="row">
                        <FormControl className="field-name">
                            <InputLabel htmlFor="name-simple">Nome do campo</InputLabel>
                            <Input id={"item-name-"+formItem.ORDER} value={formItem.LABEL} onChange={(e) => handleChangeFormItem('LABEL',e)} />
                        </FormControl>
                        <FormControlLabel
                            control={
                                <Switch
                                    id={"item-switch-"+formItem.ORDER}
                                    checked={formItem.REQUIRED}
                                    onChange={(e) => handleChangeFormItem('REQUIRED',e)}
                                    value={"required"}
                                    color="primary"
                                />
                            }
                            label="Obrigatório"
                        />
                    </div>
                    <div className="row">
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
                    </div>
                </CardContent>
            </Card>
        </div>
	);

};


export { FormItem };