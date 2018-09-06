import * as React from 'react';
import { observer } from 'mobx-react';

import { store } from '../../stores/Store';

@observer export class Dashboard extends React.Component{

    

    render(){
        return <div>
            <h1>Hola {store.user.name}!</h1>
            <button onClick={() => store.setUser(store.user.name + 1, '')}>cambiar</button>
        </div>
    }
}