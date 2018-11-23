import React from 'react';
import { Category } from './Category';



const Table = props => {

    const filterBySecretary = (formList, sec) => {
        return formList.filter(form => form.office == sec)
    }

    const filterByAxis = (formList, axis) => {
        return formList.filter(form => form.activity == axis)
    }

    let categories;
    if (props.filterType) {
        categories = props.axisList.map ((axis, idx) => (
            <Category
                key={idx}
                title={axis}
                data={filterByAxis(props.data, axis)} 
                handleFormView={props.handleFormView}/>
            ))
    }
    else {
        categories = 
            <div>
                <Category
                    id={1}
                    title={'Secretaria Municipal de Direitos Humanos'}
                    data={filterBySecretary (props.data, 'smdhc')}
                    handleFormView={props.handleFormView}/>
                <Category
                    id={2}
                    title={'Secretaria Municipal da Pessoa com Deficiência'}
                    data={filterBySecretary (props.data, 'smped')}
                    handleFormView={props.handleFormView}/>
            </div>
    }

    return (
        <div className='table' role="list">
            {categories}
        </div>
    );
};

export { Table };
