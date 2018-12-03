import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Edit from '@material-ui/icons/Edit';
import FormatAlignJustify from '@material-ui/icons/FormatAlignJustify';
import InsertLink from '@material-ui/icons/InsertLink';
import Visibility from '@material-ui/icons/Visibility';
import Delete from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const Row = props => {
    const { form, handleFormView, handleFormDelete } = props;
    return (
        <Card className='row flex -sb'>
            <CardContent className='content'>
                <Typography gutterBottom variant="headline" component="h2">
                    {form.name}
                </Typography>
            </CardContent>
            <CardActions className='actions'>
                <IconButton aria-label="Editar Criação do Formulário">
                    <Edit />
                </IconButton>
                <IconButton aria-label="Visualizar Respostas do Formulário">
                    <FormatAlignJustify />
                </IconButton>
                <IconButton aria-label="Compartilhar Formulário">
                    <InsertLink />
                </IconButton>
                <IconButton
                    aria-label="Visualizar Criação do Formulário"
                    onClick={() => handleFormView(form._id)}>
                    <Visibility />
                </IconButton>
                <IconButton
                    aria-label="Excluir Formulário"
                    onClick={() => handleFormDelete(form._id)}>
                    <Delete />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export { Row };
