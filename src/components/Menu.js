import React from 'react';

function Menu({logo}){
    return(
        <nav>
            <div className="nav-wrapper">
                <a href="https://www.pokemon.com/us/" rel="noopener" className="brand-logo center">
                    <img src={logo} alt="logo-pokemon"/>
                </a>
            </div>
        </nav>
    );
}

export default Menu;