import { useContext, createContext, useEffect } from "react";
import axios from 'axios';
import { server } from "../main";
import toast, { Toaster } from 'react-hot-toast';
import { useState } from "react";

const UserContext = createContext();


export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState([])
    const [isAuth, setIsAuth] = useState(false)
    const [btnloading, setBtnLoading] = useState(false);
    const [loading, setLoading] = useState(true);

    // login
    async function loginUser(email, password, navigate, fetchMyCourse) {
        setBtnLoading(true)
        try {
            const { data } = await axios.post(`${server}/api/user/login`, { email, password })

            toast.success(data.message);
            localStorage.setItem("token", data.token);
            setUser(data.user)
            setIsAuth(true)
            setBtnLoading(false)
            navigate("/")
            fetchMyCourse();
        } catch (error) {
            setBtnLoading(false);
            setIsAuth(false);
            toast.error(error.response.data.message);
        }
    }
    // register
    async function registerUser(name, email, password, navigate) {
        setBtnLoading(true)
        try {
            const { data } = await axios.post(`${server}/api/user/register`, {
                name,
                email,
                password,
            })

            toast.success(data.message);
            localStorage.setItem("activationToken", data.activationToken);
            setBtnLoading(false)
            navigate("/verify")
        } catch (error) {
            setBtnLoading(false);
            toast.error(error.response.data.message);
        }
    }
    // otp verify
    async function verifyOtp(otp, navigate) {
        setBtnLoading(true)
        const activationToken = localStorage.getItem("activationToken");
        try {
            const { data } = await axios.post(`${server}/api/user/verify`, {
                otp,
                activationToken,
            });

            toast.success(data.message);
            navigate('/login')
            localStorage.clear();
            setBtnLoading(false);
        }
        catch (error) {
            toast.error(error.response.data.message);
            setBtnLoading(false);
        }
    }

    // myprofile
    async function fetchUser() {
        try {
            const { data } = await axios.get(`${server}/api/user/me`, {
                headers: {
                    token: localStorage.getItem("token"),
                }
            });

            setIsAuth(true);
            setUser(data.user);
            setLoading(false);
        }
        catch (error) {
            // console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUser();
    })
    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                setIsAuth,
                isAuth,
                loginUser,
                btnloading,
                loading,
                registerUser,
                verifyOtp,
                fetchUser,
            }}>
            {children}
            <Toaster />
        </UserContext.Provider>
    );
};
export const UserData = () => useContext(UserContext);  
