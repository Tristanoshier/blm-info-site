import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

import Home from './Home';
import Donate from './Donate/Donate';
import Petitions from './Petitions/Petitions';
import Text from './Text/Text';

const Sitebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className="sitebar" color="black" light expand="md">
                <Link className="site-link" to="/">#BLM</Link>
                <NavbarToggler className="desktop-nav" onClick={toggle} />
                <span onClick={toggle} class="navbar-toggler-icon mobile-nav">
                    <FontAwesomeIcon className="site-hamburger" icon={faBars} size="lg"></FontAwesomeIcon>
                </span>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link onClick={toggle} className="pr-3 site-link" to="/donate">DONATE</Link>
                        </NavItem>
                        <NavItem>
                            <Link onClick={toggle} className="pr-3 site-link" to="/petitions">PETITIONS</Link>
                        </NavItem>
                        <NavItem>
                            <Link onClick={toggle} className="pr-3 site-link" to="/text">TEXT</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>


            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/donate"><Donate /></Route>
                <Route exact path="/petitions"><Petitions /></Route>
                <Route exact path="/text"><Text /></Route>
            </Switch>
        </div>
    );
}

export default Sitebar;