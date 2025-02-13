import React,{createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const url=process.env.REACT_APP_BACKEND_URL;

    useEffect(()=>{
        const fetchUserData = async () =>{
            try{
                const { data } = await axios.get(`${url}/api/auth/authCheck`,{ withCredentials: true});
                // console.log("auth check data in the context",data);
                setUser(data);
            }catch(error){
                // console.log('Error fetching user data:',error);
                setUser(null);
            }finally{
                setLoading(false);
            }
        };

        fetchUserData();
    },[])

    return(
        <UserContext.Provider value={{user, setUser, loading}}>
            {children}
        </UserContext.Provider>
    )
}
