import React from 'react';
import ParticlesJS from 'react-particles-js';
import config from './config.json';
import { Consumer } from '../../context';

const Particles = () => (
    <Consumer>
        {({theme}) => {
            config.particles.line_linked.color = theme.particlesColor;
            
            return (
                <ParticlesJS params={config} style={{ backgroundColor: theme.particlesBackgroundColor }} />
            )}
        }
    </Consumer>
)
export default Particles;