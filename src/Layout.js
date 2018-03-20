import React, { Component } from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Particles from './components/Particles';
import Routes from './Routes';

// Temp
const sidebarWidth = 60;

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <StyledSidebar />

                <Particles />

                <Content>
                    <Routes />
                </Content>
            </React.Fragment>
        );
    }
}

export default Layout;

const StyledSidebar = styled(Sidebar)`
    width: ${sidebarWidth};
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
`; 
const Content = styled.main`
    margin-left: ${sidebarWidth};
    min-height: 100vh;
    position: relative;
`;