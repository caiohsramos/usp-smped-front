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
	const { field, handleChangeAction } = props;
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
        <div className='form-item'>
            <Card>
                <CardContent>
                    <div className="row">
                        <FormControl className="field-name">
                            <InputLabel htmlFor="name-simple">Nome do campo</InputLabel>
                            <Input id="name-simple" value={field.LABEL} onChange={handleChangeAction('LABEL')} />
                        </FormControl>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={field.REQUIRED}
                                    onChange={handleChangeAction('REQUIRED')}
                                    value={"required"}
                                    color="primary"
                                />
                            }
                            label="Obrigatório"
                        />
                    </div>
                    <div className="row">
                        <TextField
                            id="standard-select"
                            select
                            label="Tipo do campo"
                            className="select-type"
                            value={field.SELECTED_TYPE}
                            onChange={handleChangeAction('SELECTED_TYPE')}
                            margin="normal">
                            {types.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            id="standard-number"
                            label="Ordem"
                            value={field.ORDER}
                            onChange={handleChangeAction('ORDER')}
                            type="number"
                            InputLabelProps={{
	shrink: true,
}}
                            margin="normal"
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
	);

};


export { FormItem };