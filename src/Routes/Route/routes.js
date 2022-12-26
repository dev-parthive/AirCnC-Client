import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import Signup from '../../Pages/SignUp/Signup';
import CommingSoon from '../../Shared/CommingSoon';
import ErroPage from '../../Shared/ErroPage';

const routes = createBrowserRouter( [
    {
        path:'/', 
        element: <Main></Main>,
        errorElement: <ErroPage></ErroPage>, 
        children: [
            {
                path: '/', 
                element: <Home></Home>
            }, 
            {
                path: '/login',
                element: <Login></Login>
            }, 
            {
                path: '/signup', 
                element: <Signup></Signup>
            }, 
           
        ]
    }
] )
export default routes;