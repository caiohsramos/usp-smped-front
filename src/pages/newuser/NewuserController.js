import { SMPEDRepository } from '../../repositories';

export class NewuserController {

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



    ValidarPassword(text, msg) {
        var n = text.length;
        if (n < 6) {
            msg = "A senha tem " + n + " caracter(es) e deve ter 6";
        }
        return msg;
    }


    handleChange(event) {
        if (event.target.id == 'IDUSER') {
            this.callback({ IDUSER: event.target.value });
        }
        else if (event.target.id == 'PASSWORD1') {
            this.callback({ PASSWORD1: event.target.value });
        }
        else if (event.target.id == 'PASSWORD2') {
            this.callback({ PASSWORD2: event.target.value });
        }
        else {
            this.callback({ USERTYPE: event.target.value });
        }

    };

    handleSubmit(event) {
        const state = this.getState();
        var error = ''

        if (state.PASSWORD1 != state.PASSWORD2) {
            error = 'As senhas cadastradas são divergentes'
        }
        else if (state.PASSWORD1 == '' || state.PASSWORD2 == '') {
            error = 'Senhas não podem ser vazias'
        }
        error = this.ValidarPassword(state.PASSWORD1, error)

        if (error != '') {
            alert(error)
        }
        else {
            let payload = {};
            payload.password = state.PASSWORD1;

            this.smpedapi.patch('accounts', state.IDUSER, payload)
                .then((resp) => { console.log(resp); })
                .catch((error) => { console.log(error); });
        }

    };

}
