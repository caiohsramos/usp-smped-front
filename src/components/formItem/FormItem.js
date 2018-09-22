import React  from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';

const FormItem = props => {
	const { field, handleChangeAction } = props;
    
	return (
        <div className='form-item'>
            <Card>
                <CardContent>
                    <FormControl>
                        <InputLabel htmlFor="name-simple">Nome do campo</InputLabel>
                        <Input id="name-simple" value={field.label} onChange={handleChangeAction('LABEL')} />
                    </FormControl>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={field.required}
                                onChange={handleChangeAction('REQUIRED')}
                                value={"required"}
                                color="primary"
                            />
                        }
                        label="Obrigatório"
                    />
                    <TextField
                        id="standard-number"
                        label="Ordem"
                        value={field.order}
                        onChange={handleChangeAction('ORDER')}
                        type="number"
                        InputLabelProps={{
                        	shrink: true,
}}
                        margin="normal"
                    />
                </CardContent>
            </Card>
        </div>
	);

};


export { FormItem };