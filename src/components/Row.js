import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Edit, FormatAlignJustify, InsertLink, Visibility, Delete } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';

const Row = props => {
	const { data } = props;
	const { classes } = props;
	return (
    <Card className='row'>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
						{data.name}
          </Typography>
          <Typography component="p">
            {data.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
				<IconButton aria-label="Cart">
					<Edit/>
				</IconButton>
				<IconButton aria-label="Cart">
					<FormatAlignJustify/>
				</IconButton>
				<IconButton aria-label="Cart">
					<InsertLink/>
				</IconButton>
				<IconButton aria-label="Cart">
					<Visibility/>
				</IconButton>
				<IconButton aria-label="Cart">
					<Delete/>
				</IconButton>
      </CardActions>
    </Card>
	);
};

export { Row };
