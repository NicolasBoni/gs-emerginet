import React from 'react';
import './Footer.scss'; // Importando o arquivo CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} EMERGINET. All Rights Reserved.</p>
        <p>Siga-nos nas redes sociais</p>
  
      </div>
    </footer>
  );
};

export default Footer;
