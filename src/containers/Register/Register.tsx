import * as React from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';
import { store } from '../../stores/Store';

export const Register = observer(withRouter((props) => {
    return <div>
        <h1>Register</h1>

        <form onSubmit={(evento) => {
            evento.preventDefault();
            let form: any = evento.target;
            console.log(form.user.value, form.pass.value)
            store.setUser(form.user.value, form.pass.value);
            // ir al login
            props.history.push('/login');
        }}>
            <input type="email" name="user"/>
            <input type="password" name="pass"/>
            <button type="submit">Sing in</button>
            <h2>{store.user && store.user.name}</h2>
        </form>
    </div>
}));