import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import NetList from '../NetList/NetList';
import Genres from '../Genres/Genres';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { services: [], genres: [] };
    this.addService = this.addService.bind(this);
    this.addGenre = this.addGenre.bind(this);
  }

  addService(service) {
    // console.log(service);
    let serv = this.state.services;
    const idx = serv.findIndex(inServices => inServices.id === service.id);
    if (idx > -1) serv.splice(idx, 1);
    else serv.push(service);
    this.setState({ services: serv });
  }

  addGenre(genre) {
    let genres = this.state.genres;
    const idx = genres.findIndex(inGenres => inGenres.id === genre.id);
    if (idx > -1) genres.splice(idx, 1);
    else genres.push(genre);
    this.setState({ genres: genres });
  }

  render() {
    return (
      <div>
        <NetList onClick={this.addService} />
        <Genres onClick={this.addGenre} />
      </div>
    );
  }
}

export default App;
