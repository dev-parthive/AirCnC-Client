import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const Navbar = () => {
    const {user}  = useContext(AuthContext)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    return (
       <header className='text-gray-900 body-font shadow-sm'>
        <div>
            <Link to="/" className=''>
            </Link>
        </div>
       </header>
    );
};

export default Navbar;