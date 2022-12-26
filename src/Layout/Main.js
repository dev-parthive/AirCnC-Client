import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='h-screen'>
            <h2>This is the main Layout</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;