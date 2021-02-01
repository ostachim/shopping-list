import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return(
        <nav>
            <ul>
                <li><Link to="/nowalista">Nowa lista</Link></li>
                <li><Link to="/aktywnelisty">Aktyne listy</Link></li>
                <li><Link to="/historia">Historia zakupów</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;