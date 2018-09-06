import * as React from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';
import { store } from '../../stores/Store';

export const Login = observer(withRouter((props) => {
    return <div>
        <h1>Login</h1>

        <form onSubmit={(evento) => {
            evento.preventDefault();
            let form: any = evento.target;
            console.log(form.user.value, form.pass.value)
            store.checkUser(form.user.value, form.pass.value);
            // ir al dashboard
            props.history.push('/dashboard');
        }}>
            <input type="email" name="user"/>
            <input type="password" name="pass"/>
            <button type="submit">login</button>

            <h2>{store.user && store.user.name}</h2>

        </form>
    </div>
}));