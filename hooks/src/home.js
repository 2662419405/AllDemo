import React, { Component,useContext } from 'react'
import { Link } from 'react-router-dom'
import Header from './components/context/Header'
import Footer from './components/context/Footer'
import './app.css'

const AppContext = React.createContext({})

export default class home extends Component {
    render() {
        return (
            <div className="content">
                <div>
                    我是导航组件
                    <br />
                    <Link to='/yuan'>正常组件</Link>
                    <br />
                    <Link to='/next'>useState组件</Link>
                </div>
                <AppContext.Provider value={{
                    username: 'sun'
                }}>
                    useContext练习
                    <Header />
                    <Footer />
                </AppContext.Provider>
            </div>
        )
    }
}
