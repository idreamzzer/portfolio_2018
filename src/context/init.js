import React from 'react';

import theme from './theme';

const store = {
    theme
};

export const Context = React.createContext();

export class Provider extends React.Component {
    render() {
        return (
            <Context.Provider value={store}>
                {this.props.children}
            </Context.Provider>

        );
    }
}

export const Consumer = Context.Consumer;
