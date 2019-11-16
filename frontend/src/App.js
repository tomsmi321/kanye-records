import React, { Fragment, Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/layouts/NavBar';
import Search from './components/search/Search';
import Artists from './components/artists/Artists';
import Artist from './components/artists/Artist';
import NotFound from './components/pages/NotFound';
import About from './components/pages/About';
import axios from 'axios';

class App extends Component {

  state = {
    artists: [],
    loading: false,
    artist: {},
    loadingArtist: true
  }

  searchArtists = async (text) => {
    this.setState({ loading: true });
    
    const res = await axios.post('http://localhost:5000', { searchTerm: text });
        
    this.setState({ artists: res.data, loading: false });
  }

  getArtist = async(id) => {
    this.setState({ loading: true });

    const res = await axios.get(`http://localhost:5000/${id}`);

    this.setState({ artist: res.data, loadingArtist: false, loading: false });
  }

  // Clear artists from the state
  clearArtists = () => {
    this.setState({ artists: [], loading: false });
  }

  render() {
    const { artists, loading, loadingArtist, artist } = this.state;
    return (
      <Fragment>
          <NavBar />
          <Switch>
            <Route exact path="/" render={props => (
              <Fragment>
                <Search searchArtists={this.searchArtists} clearArtists={this.clearArtists} showClear={artists.length > 0 ? true : false}/>
                <Artists loading={loading} artists={artists}/>
              </Fragment>
            )}/>
            <Route exact path="/artist/:id" render={props => (
              <Artist { ...props } getArtist={this.getArtist} artist={artist} loadingArtist={loadingArtist}/>  
            )}/>
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
      </Fragment>
    );
  }
}

export default App;
