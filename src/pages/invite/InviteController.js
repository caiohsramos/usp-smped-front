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

    removeAcento(text) {
        text = text.replace(new RegExp('[ÁÀÂÃÄ]', 'g'), 'A');
        text = text.replace(new RegExp('[ÉÈÊË]', 'g'), 'E');
        text = text.replace(new RegExp('[ÍÌÎÏ]', 'g'), 'I');
        text = text.replace(new RegExp('[ÓÒÔÕÖ]', 'g'), 'O');
        text = text.replace(new RegExp('[ÚÙÛÜ]', 'g'), 'U');
        text = text.replace(new RegExp('[Ç]', 'g'), 'C');
        text = text.replace(new RegExp('[áàâãä]', 'g'), 'a');
        text = text.replace(new RegExp('[éèêë]', 'g'), 'e');
        text = text.replace(new RegExp('[íìîï]', 'g'), 'i');
        text = text.replace(new RegExp('[óòôõö]', 'g'), 'o');
        text = text.replace(new RegExp('[úùûü]', 'g'), 'u');
        text = text.replace(new RegExp('[ç]', 'g'), 'c');
        text = text.replace(new RegExp('[`~^´]', 'g'), '');
        return text;
    }

    handleChange(event) {
        if (event.target.id === 'EMAIL') {
            this.callback({ EMAIL: event.target.value });
        }
        else if (event.target.id === 'NAME') {
            this.callback({ NAME: event.target.value });
        }
        else if (event.target.id === 'MENSAGEM') {
            this.callback({ MENSAGEM: this.removeAcento(event.target.value) });
        }
        else {
            this.callback({ USERTYPE: event.target.value });
        }

    };

    handleSubmit(event) {
        const state = this.getState();

        let payload = {};
        payload.email = state.EMAIL;
        payload.username = state.NAME;
        payload.roles = ['user'];
        let token = this.getProps().token;
        console.log(token);
        this.smpedapi.post_with_token('accounts', payload, token)
            .then((resp) => {
                let payloadEmail = {};
                console.log("entrou no then")
                payloadEmail.emails = [state.EMAIL];
                payloadEmail.subject = "Oi," + state.NAME + " foi convidado(a) para o sistema SMPED";
                payloadEmail.message = state.MENSAGEM +
                    "\nO seu Id e " + resp.data._id +
                    ", para acessar o sistema SMPED clique no link abaixo para cadastrar a sua senha" +
                    "\nhttp://labxp2018-smped-front.35.238.186.104.nip.io/newuser/" + resp.data._id +
                    "\nO seu usuario: " + state.NAME;

                //Não colocar acento, pois ocorre erro. Temos que tratar depois no Back.
                this.smpedapi.post_with_token('email', payloadEmail, token)
                    .then((resp2) => {
                        alert('Usuario criado com sucesso')
                    })
                    .catch(e => {
                        console.log(e);
                        alert('Não foi possivel enviar email ao usuário.')
                    });
            })
            .catch(e => {
                console.log("entrou no catch")
                console.log(e);
                alert('Não foi possivel criar o usuário.')
            })
    };

}
