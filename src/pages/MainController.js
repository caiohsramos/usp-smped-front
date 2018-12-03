import { Navigator } from "../helper";
import { SMPEDRepository } from '../repositories';

export class MainController {

    constructor({ callback, getState, getProps, setAuth, router }) {
        this.callback = callback;
        this.getState = getState;
        this.getProps = getProps;

        this.navigator = new Navigator(router);
        this.smpedapi = new SMPEDRepository();

        this.logout = this.logout.bind(this);
        this.redirectTo = this.redirectTo.bind(this);
        this.handleRefresh = this.handleRefresh.bind(this);
        this.handleMenuAction = this.handleMenuAction.bind(this);
        this.handleDrawerAction = this.handleDrawerAction.bind(this);

    }

    logout() {
        this.getProps().clearToken();
        window.localStorage.setItem('session_token', '');
        window.localStorage.setItem('refresh_token', '');
        this.navigator.navigateTo('/');
    }
    redirectTo(id) {
        ;
        switch (id) {
            case 'addbox':
                this.navigator.navigateTo(`/newform`);
                break;
            case 'exit':
                this.logout();
                break;
            case 'dashboard':
                this.navigator.navigateTo(`/dashboard`);
                break;
            case 'personadd':
                this.navigator.navigateTo(`/invite`);
                break;
            default:
                this.navigator.navigateTo(`/dashboard`);
                break;
        }
    }
    handleMenuAction(e, closed) {
        console.log("DSADAS");
        const button = e.target.id;
        if (closed)
            this.callback({ headerMenu: null });
        else
            this.callback({ headerMenu: e.currentTarget });
    }
    handleRefresh() {
        const refresh = {
            refresh_token: localStorage.getItem('refresh_token')
        };
        this.smpedapi.post('auth/refresh', refresh).
            then((resp) => {
                const token = {
                    access: resp.data.access_token,
                    refresh: localStorage.getItem('refresh_token')
                };
                this.getProps().setToken(token);
            }).catch((e) => {
                this.navigator.navigateTo('/');
            });
    }
    handleDrawerAction() {
        const currentDrawerState = this.getState().headerDrawer;
        this.callback({ headerDrawer: !currentDrawerState });
    }
}
