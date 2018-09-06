import * as React from 'react';
import { observer } from 'mobx-react';
import { 
    BrowserRouter as Router,
    Link, Route
} from 'react-router-dom';

import './Root.scss';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { Header } from '../../components/Header/Header';
import { Dashboard } from '../Dashboard/Dashboard';
import { store } from '../../stores/Store';

interface IRootProps{}

@observer export class Root extends React.Component<IRootProps> {
    render(){
        return <Router>
        <div>  
        <Route path="/" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/dashboard" exact component={Dashboard} />
        <h2>{store.user && store.user.name}</h2>
        </div>
        </Router>
    }
}
