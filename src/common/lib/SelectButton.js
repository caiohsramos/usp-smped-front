import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const SelectButton = props => {
	const {handleOpen, handleClose, handleChange, userType, dropDownState} = props;

	return (
        <div>
        <FormControl className='select-form'>
          <Select
            open={dropDownState}
            onClose={() => handleClose()}
            onOpen={() => handleOpen()}
            value={userType}
            onChange={(e) => handleChange(e)}
            inputProps={{
              name: 'userType',
              id: 'demo-controlled-open-select',
            }}
          >
		  	<MenuItem value={0}>Selecione</MenuItem>
            <MenuItem value={1}>Administrador</MenuItem>
            <MenuItem value={2}>Digitador</MenuItem>
            <MenuItem value={3}>Convidado</MenuItem>
          </Select>
        </FormControl>
        </div>
	);
};

export { SelectButton };
