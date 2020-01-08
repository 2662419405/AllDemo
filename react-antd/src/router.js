import React, { Component } from 'react'
import { BrowserRouter,Route} from 'react-router-dom';
import App from './App'
import Demo from './component'

export default class router extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={App} />
                    <Route path="/demo" exact component={Demo} />
                </div>
            </BrowserRouter>
        )
    }
}
