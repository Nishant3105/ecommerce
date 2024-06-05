import React, { useState } from "react";

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (tokenVal) => { },
    logout: () => { }
})


export const AuthContextProvider = (props) => {
    const initialValue = localStorage.getItem('token')
    const [token, setToken] = useState(initialValue)

    const isLoggedIn = !!token

    // let timer
    const loginHandler = (tokenVal,tokenExpiryTime,email) => {
        localStorage.setItem('token', tokenVal)
        localStorage.setItem('email', email)
        setToken(tokenVal)
        // timer=setTimeout(()=>{
        //     loginHandler()
        // },5*60*1000)
    }
    const logoutHandler = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('email')
        setToken(null)
        // clearTimeout(timer)
    }
    const contextValue = {
        token: token,
        isLoggedIn: isLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }


    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext