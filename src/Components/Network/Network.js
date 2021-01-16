import React from 'react';

export default class Network extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.props.onClick(this.props.defaultValue);
    }

    render() {
        return(
            <div>
                <button onClick={this.handleClick}>{this.props.defaultValue.name}</button>
            </div>
        );
    }
}