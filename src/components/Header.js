import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return(    
      <header className="centro">
        <div className="itens-header">
            <img className="logo" src={logo} alt="Facebook"/>
            <span className="menuUser">Meu perfil <i class="fa fa-user-circle" aria-hidden="true"></i></span>
        </div>
      </header>
  );
}

export default Header;