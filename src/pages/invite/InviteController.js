import { Navigator } from '../../helper';
import store from '../../routes';
import { SMPEDRepository } from '../../repositories';

export class InviteController {

	constructor({callback, getState, getProps}) {
		this.callback = callback;
		this.getState = getState;
		this.getProps = getProps;
		this.handleClose = this.handleClose.bind(this);
		this.handleOpen = this.handleOpen.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);


	}
	handleClose () {
		this.callback({ open: false });
	  };
	
	handleOpen () {
		this.callback({open: true});

	};

	handleChange (event) {
		if (event.target.id == 'EMAIL'){
			this.callback({ EMAIL: event.target.value });
		}
		else if (event.target.id == 'NAME') {
			this.callback({ NAME: event.target.value });
		}
		else {
			this.callback({ USERTYPE: event.target.value });
		} 

	}; 

	handleSubmit(event){
		const state= this.getState();
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		var error = ''
      if (state.NAME==''){
		  error= 'Nome não pode ser vazio'
	  } 
	  else if (state.EMAIL==''){
		error= 'Email não pode ser vazio'
	  }
	 else if (!re.test(state.EMAIL)) {
		error='Email não é valido'
	  }
	  else if (state.USERTYPE==0)
	  {
		error='Selecione um tipo de usuário'
	  }
	  if (error==''){
	     alert('Usuário convidado!')
	  }else{
	    alert(error)
     }

	};
	
}
