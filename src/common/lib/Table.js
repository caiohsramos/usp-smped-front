import React from 'react';
import { Category } from './Category';



const Table = props => {
	return (
		<div className='table'>
		<Category
			id={1}
			title={'Secretaria Direitos Humanos'}
			data={props.data}
			handleClick={props.handleClick}
		 	state={props.expandedState}
		 	clickAction={props.handleExpandClick}/>
		<Category
			id={2}
			title={'Secretaria Deficientes'}
			data={props.data}
			handleClick={props.handleClick}
		 	state={props.expandedState}
		 	clickAction={props.handleExpandClick}/>
		<Category
			id={3}
			title={'Secretaria de Defesa Contra as Artes das Trevas'}
			data={props.data}
			handleClick={props.handleClick}
		 	state={props.expandedState}
		 	clickAction={props.handleExpandClick}/>
		<Category
			id={4}
			title={'Secretaria de Herbologia'}
			data={props.data}
			handleClick={props.handleClick}
		 	state={props.expandedState}
		 	clickAction={props.handleExpandClick}/>
		<Category
			id={5}
			title={'Secretaria das Runas Antigas'}
			data={props.data}
			handleClick={props.handleClick}
		 	state={props.expandedState}
		 	clickAction={props.handleExpandClick}/>
		<Category
			id={6}
			title={'Secretaria dos Feitiços'}
			data={props.data}
			handleClick={props.handleClick}
		 	state={props.expandedState}
		 	clickAction={props.handleExpandClick}/>
		</div>
	);
};

export { Table };
