import React from 'react';
import Network from '../Network/Network';

export default class Genres extends React.Component {
    render() {
        return (
            <div>
                <Network defaultValue={{ name: 'action', id: 1 }} onClick={this.props.onClick}></Network>
                <Network defaultValue={{ name: 'animation', id: 2 }} onClick={this.props.onClick}></Network>
                <Network defaultValue={{ name: 'comedy', id: 3 }} onClick={this.props.onClick}></Network>
                <Network defaultValue={{ name: 'crime', id: 4 }} onClick={this.props.onClick}></Network>
                <Network defaultValue={{ name: 'drama', id: 5 }} onClick={this.props.onClick}></Network>
                <Network defaultValue={{ name: 'fantasy', id: 6 }} onClick={this.props.onClick}></Network>
                <Network defaultValue={{ name: 'horror', id: 7 }} onClick={this.props.onClick}></Network>
                <Network defaultValue={{ name: 'mystery', id: 8 }} onClick={this.props.onClick}></Network>
                <Network defaultValue={{ name: 'romance', id: 9 }} onClick={this.props.onClick}></Network>
                <Network defaultValue={{ name: 'sci-fi', id: 10 }} onClick={this.props.onClick}></Network>
                <Network defaultValue={{ name: 'superhero', id: 11 }} onClick={this.props.onClick}></Network>
                <Network defaultValue={{ name: 'thriller', id: 12 }} onClick={this.props.onClick}></Network>
            </div>
        );
    }
}