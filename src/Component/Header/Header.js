import React from 'react';
import Button from '../Button/Buttton';
import './Header.css';

const Header = () => (
       <div className='principale' id='acceuil'>
            <div className='logo' >
                <a href="#">logo<span>Y</span></a>     
            </div>
            <ul>
                  <li className="active">
                       <a href="#acceuil">Acceuil</a>
                  </li>
                  <li>
                        <a href="#">Service</a>
                  </li>
              </ul>
            <Button />
        </div>
         

    
);

export default Header;