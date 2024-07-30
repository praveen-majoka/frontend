import React, { createContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';



const context = createContext();

const MainContext = (props) => {
    const openToast = (msg, flag) => {
        toast(msg, { type: flag })
    }

    const fetchUser =()=>{
        axios.get("http://localhost:5000/user")

    }





    return (

        <context.Provider value={openToast}>
            <ToastContainer/>
            {props.children}

        </context.Provider>

    );
}

export default MainContext;
export { context };
