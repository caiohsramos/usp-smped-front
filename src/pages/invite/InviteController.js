import { SMPEDRepository } from '../../repositories';

export class InviteController {

    constructor({ callback, getState, getProps }) {
        this.callback = callback;
        this.getState = getState;
        this.getProps = getProps;
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.smpedapi = new SMPEDRepository();


    }
    handleClose() {
        this.callback({ open: false });
    };

    handleOpen() {
        this.callback({ open: true });

    };

    handleChange(event) {
        if (event.target.id == 'EMAIL') {
            this.callback({ EMAIL: event.target.value });
        }
        else if (event.target.id == 'NAME') {
            this.callback({ NAME: event.target.value });
        }
        else {
            this.callback({ USERTYPE: event.target.value });
        }

    };

    async handleSubmit(event) {
        const state = this.getState();
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var error = ''
        if (state.NAME == '') {
            error = 'Nome não pode ser vazio'
        }
        else if (state.EMAIL == '') {
            error = 'Email não pode ser vazio'
        }
        else if (!re.test(state.EMAIL)) {
            error = 'Email não é valido'
        }
        else if (state.USERTYPE == 0) {
            error = 'Selecione um tipo de usuário'
        }
        if (error == '') {
            alert('Usuário convidado!')
        } else {
            alert(error)
        }
        let payload = {};
        payload.email = state.EMAIL;
        payload.username = state.NAME;
        payload.roles = ['user'];
        let token = this.getProps().token;
        console.log(token);
        await this.smpedapi.post_with_token('accounts', payload, token)
            .then((resp) => { })
            .catch(e => { console.log(e); })
        let payloadEmail = {};
        payloadEmail.emails = [state.EMAIL];
        payloadEmail.subject = "Voce foi convidado(a) para SMPED";
        payloadEmail.message = "Voce foi convidado(a) para SMPED";
        //Não colocar acento, pois ocorre erro. Temos que tratar depois no Back.

        await this.smpedapi.post_with_token('email', payloadEmail, token)
            .then((resp2) => { console.log("resp2, ", resp2); })
            .catch(e => { console.log("-->", e); });



    };

}
