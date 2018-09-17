import React  from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const FormItem = props => {
    
    return (
        <div className='form-item'>
            <Card>
                <CardContent>
                    <FormControl>
                        <InputLabel htmlFor="name-simple">Name</InputLabel>
                        <Input id="name-simple" value={props.name} onChange={props.handleChange} />
                    </FormControl>
                </CardContent>
            </Card>
        </div>
    );

};


export { FormItem };