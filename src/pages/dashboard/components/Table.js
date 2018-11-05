import React from 'react';
import { Category } from './Category';



const Table = props => {

    const filterBySecretary = (formList, sec) => {
        return formList.filter(form => form.office == sec)
    }

    const filterByAxis = (formList, axis) => {
        return formList.filter(form => form.axis == axis)
    }

    let categories;
    if (props.filterType) {
        categories = props.axisList.map ((axis, idx) => (
            <Category
                id={idx}
                key={idx}
                title={axis}
                data={filterByAxis(props.data, axis)}
                clickAction={props.handleExpandClick}/>
            ))
    }
    else {
        categories = 
            <div>
                <Category
                    id={1}
                    title={'Secretaria Municipal de Direitos Humanos'}
                    data={filterBySecretary (props.data, 'smdhc')}/>
                <Category
                    id={2}
                    title={'Secretaria Municipal da Pessoa com Deficiência'}
                    data={filterBySecretary (props.data, 'smped')}/>
            </div>
    }

    return (
        <div className='table' role="list">
            {categories}
        </div>
    );
};

export { Table };