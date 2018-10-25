import React from 'react';
import { Container } from '../Container';

export default class Form extends Container {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        return (
            <h1>Form</h1>
        )
    }
}