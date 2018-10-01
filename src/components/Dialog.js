import React from 'react';

const Dialog = props => {
	const { id, title, content, state, clickAction,
		 clickActionOne, clickActionTwo, buttonOne, buttonTwo,
		 colorOne,  colorTwo } = props;


	return (
		<div>
		<Dialog
			id={id}
      open={state}
      onClose={(e) => clickAction(e, id)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
				{content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={clickActionOne} color="primary">
          {buttonOne}
        </Button>
        {buttonTwo ? <Button onClick={clickActionTwo} color="primary" autoFocus>
          {buttonTwo}
        </Button> : null}
      </DialogActions>
    </Dialog>
		</div>
	);
};

export { Dialog };
