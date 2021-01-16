import React from 'react';
import Network from '../Network/Network';

export default class NetList extends React.Component {
    render() {
        return (
            <div>
                <Network defaultValue={{ name: 'Netflix', id: 1 }} onClick={this.props.onClick}></Network>
                <Network defaultValue={{ name: 'Hulu', id: 2 }} onClick={this.props.onClick}></Network>
                <Network defaultValue={{ name: 'Prime Video', id: 3 }} onClick={this.props.onClick}></Network>
                <Network defaultValue={{ name: 'Disney+', id: 4 }} onClick={this.props.onClick}></Network>
                <Network defaultValue={{ name: 'HBO Max', id: 5 }} onClick={this.props.onClick}></Network>
                <Network defaultValue={{ name: 'AppleTV', id: 6 }} onClick={this.props.onClick}></Network>
                <Network defaultValue={{ name: 'Peacock', id: 7 }} onClick={this.props.onClick}></Network>
            </div>
        );
    }
}