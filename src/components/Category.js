import React from 'react';
import { Row } from './Row';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const row = props => {
	const { data, handleClick } = props;
	var arr = [];
	for (let i = 0; i < data.length; i++) {
		arr.push(<div className="table-row"><Row handleClick={handleClick} data={data[i]}/></div>);
	}
	return arr;
};

const Category = props => {
	const { state, clickAction, title, id } = props;
	return (
        <div>
            <ExpansionPanel className='category' expanded={state.id}>
          <ExpansionPanelSummary onClick={(e) => clickAction(e, id)} expandIcon={<ExpandMoreIcon />}>
                        {title}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className='category-details'>
            {row(props)}
          </ExpansionPanelDetails>
      </ExpansionPanel>
        </div>
	);
};

export { Category };
