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
                            <Input id="simple-name" data-key={formItem.ORDER} value={formItem.LABEL} onChange={handleChangeFormItem('LABEL')} />
                        </FormControl>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={formItem.REQUIRED}
                                    onChange={handleChangeFormItem('REQUIRED')}
                                    value={"required"}
                                    color="primary"
                                    data-key={formItem.ORDER}
                                />
                            }
                            label="Obrigatório"
                        />
                    </div>
                    <div className="row">
                        <TextField
                            id="standard-select"
                            data-key={formItem.ORDER}
                            select
                            label="Tipo do campo"
                            className="select-type"
                            value={formItem.SELECTED_TYPE}
                            onChange={handleChangeFormItem('SELECTED_TYPE')}
                            margin="normal">
                            {types.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            id="standard-number"
                            data-key={formItem.ORDER}
                            label="Ordem"
                            value={formItem.ORDER}
                            onChange={handleChangeFormItem('ORDER')}
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