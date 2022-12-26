import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../../Components/Spinner/Spinner';
import { AuthContext } from '../../Contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user, loading} = useContext(AuthContext)
    if (loading){
        return <Spinner></Spinner>
    }
    if(user && user.uid){
        return children
    }
    return <Navigate to="/login" state={{from: location}} replace /> 
};

export default PrivateRoute;