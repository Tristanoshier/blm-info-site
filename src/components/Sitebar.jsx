import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import Home from './Home';
import Donate from './Donate/Donate';
import Petitions from './Petitions/Petitions';
import Text from './Text/Text';

const Sitebar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <Link to="/">Home</Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link to="/donate">Donate</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/petitions">Petitions</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/text">Text</Link>
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