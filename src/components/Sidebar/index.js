import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Consumer } from '../../context';
import styled from 'styled-components';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCode, faImages, faEnvelope } from '@fortawesome/fontawesome-free-solid';

class Sidebar extends Component {
    render() {
        return (
            <Consumer>
                {({theme}) => (
                    <SidebarStyled
                        background={theme.sidebarBackgroundColor}
                        fontColor={theme.sidebarFontColor}
                    >
                        <section>
                            <div>Logo</div>
                        </section>
                        <section>
                            <div>Language</div>
                        </section>
                        <section>
                            <NavigationStyled>
                                <NavLink exact to="/" activeClassName="selected"><FontAwesomeIcon icon={faHome} /></NavLink>    
                                <NavLink to="/about" activeClassName="selected"><FontAwesomeIcon icon={faUser} /></NavLink>    
                                <NavLink to="/skills" activeClassName="selected"><FontAwesomeIcon icon={faCode} /></NavLink>    
                                <NavLink to="/portfolio" activeClassName="selected"><FontAwesomeIcon icon={faImages} /></NavLink>    
                                <NavLink to="/contact" activeClassName="selected"><FontAwesomeIcon icon={faEnvelope} /></NavLink>    
                            </NavigationStyled>
                        </section>
                        <section>
                            <div>Contacts</div>
                        </section>
                    </SidebarStyled>
                )}
            </Consumer>
        );
    }
}

export default Sidebar;

const SidebarStyled = styled.aside`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${props => props.background ? props.background : '#666666'};
    color: ${props => props.fontColor ? props.fontColor : '#aaaaaa'};
`;

const NavigationStyled = styled.nav`
    display: flex;
    flex-direction: column;
`;