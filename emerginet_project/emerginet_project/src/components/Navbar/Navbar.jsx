import React, { useState } from 'react';
import './Navbar.scss';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Logo2 from '../../img/medical.png';

const NavBar = () => {
  const navigate = useNavigate();
  const { signout, user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controle do menu hambúrguer
 

  return (
    <nav className="nav">
      <div className="logo">
        <img src={Logo2} alt="Logo" />
      </div>
      <li className="menu-item" onClick={() => setIsMenuOpen(false)}>Home</li>
      <div className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`menu ${isMenuOpen ? 'active' : ''}`}>
        {user && (
          <div className='users'>
            <span>Olá, {user.nome} | {user.email}</span>
            <li className="menu-item" onClick={() => { signout(); navigate("/"); setIsMenuOpen(false); }}>Sair</li>
          </div>
        )}
        {!user && (
          <li className="menu-item" onClick={() => { navigate("/login"); setIsMenuOpen(false); }}>Login</li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
