import React  from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const FormItem = props => {
    const formTypes = [
        {
            value: 'text',
            label: 'Texto'
        },
        {
            value: 'date',
            label: 'Data'
        },
        {
            value: 'number',
            label: 'Numérico'
        }
    ]
    
	return (
        <div className='form-item'>
            <Card>
                <CardContent>
                    <FormControl>
                        <InputLabel htmlFor="name-simple">Name</InputLabel>
                        <Input id="name-simple" value={props.name} onChange={props.handleChange} />
                    </FormControl>
                    <TextField
                        id="select-field-type"
                        select
                        label="Tipo do campo"
                        className={classes.textField}
                        value={props.fieldType}
                        onChange={this.handleChange('fields.field')}
                        SelectProps={{
                            MenuProps: {
                            className: classes.menu,
                            },
                        }}
                        helperText="Please select your currency"
                        margin="normal"
                        >
                        {formTypes.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </CardContent>
            </Card>
        </div>
	);

};


export { FormItem };