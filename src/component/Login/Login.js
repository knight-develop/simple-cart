import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { ProductContext } from '../Context';
import LoginForm from './index'
function Login() {
    const [accounts, setAccounts] = useState({ username: '', password: '', role: null });
    const [categories, setCateID, products, search, setSearch, onHandleSearch, cateID, setProducts, clicked, setClicked, auth, setAuth] = useContext(ProductContext);
    const history = useHistory();
    useEffect(() => {
        const url = 'https://603c5222f4333a0017b67665.mockapi.io/User';
        axios.get(url)
            .then((response) => {
                const { data } = response;
                setAccounts(data);
            })
    }, [])
    const onHandleSubmit = (formData) => {
        for (const acc of accounts) {
            if (acc.username === formData.username && acc.password === formData.password) {
                console.log("a");
                if (acc.role === true) {
                    setAuth(true)
                    history.replace("/");
                }
                else {
                    setAuth(false)
                    history.replace("/")
                }
            }
        }


    }
    return (
        <LoginForm onSubmit={onHandleSubmit} />
    )
}
export default Login;
