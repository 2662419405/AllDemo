import React, { useContext } from 'react'

const AppContext = React.createContext({})

export default function Header(){
    const { username } = useContext(AppContext)
    return (
        <div>
            我是Header组件
            message for useContext {username}
        </div>
    )
}
