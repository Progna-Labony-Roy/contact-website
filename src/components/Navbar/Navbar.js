import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='flex justify-between p-3 lg:p-4 bg-black'>
              <section>
            <Link to="/" className='font-bold text-white'>MARKAL</Link>
            </section>
            <section className='buttons'>
                <Link to="/services" className='text-sm mx-4 text-white'>Services</Link>
                <Link to="/pricing" className='text-sm mx-4 text-white'>Pricing</Link>
                <Link to="/aboutus" className='text-sm mx-4 text-white'>About Us</Link>
            </section>
            <section>
                <button className='nav-button bg-green-400 rounded-md px-0 lg:px-5 py-2'>Get Started</button>
            </section>
        </div>
    );
};

export default Navbar;