import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const styles = {
  navcustom: {
    padding: '0 30px'
  }
}

const HeaderNAV = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="dark" dark expand="md" style={styles.navcustom}>
          <NavbarBrand href="/">Widgets</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="#">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#weather">Weather</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#nasa">Nasa Image</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#events">Events</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/jimmyh1150/teamGit">TeamGit</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      
    );
  }
  
  export default HeaderNAV;