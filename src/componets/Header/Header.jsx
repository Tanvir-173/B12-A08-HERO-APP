import React from 'react';
import { NavLink } from 'react-router';
import { Navigate } from 'react-router';
import { useNavigate } from 'react-router';
import './heder.css'

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="header flex justify-around items-center">

            <div className="logo flex items-center gap-[10px]" onClick={() => navigate('/')}>
                <img src="/src/assets/logo.png" alt="Logo" className="w-[70px] h-[70px]" />
                <h3 className="text-[25px] font-bold">HERO.IO</h3>
            </div>

            <nav className="nav-bar flex flex-col md:flex-row items-center">
                <NavLink
                    to="/"
                    className="mr-[10px]"
                >
                    Home
                </NavLink>
                <NavLink
                    to="/apps"
                    className="mr-[10px]"
                >
                    Apps
                </NavLink>
                <NavLink
                    to="/installation"
                    className="mr-[10px]"
                >
                    Installation
                </NavLink>
            </nav>
            <div className="contribution">
                <a
                    href="https://github.com/Tanvir-173"
                    className="btn"
                >
                    Contribution
                </a>
            </div>
        </div>
    );
};

export default Header;