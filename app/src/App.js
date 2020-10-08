import React, { useEffect, useState } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './App.css';
import SearchForm from './components/SearchForm';
import { fetchPokemon } from './actions';
import { connect } from 'react-redux';

function App(props) {
  const { fetchPokemon } = props;
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
  useEffect(() => {
    props.fetchPokemon(url);
  }, [fetchPokemon, url]);

  return (
    <div className="App">
      <h1>Pokemon</h1>
      <SearchForm setUrl={setUrl} />
      {props.pokemon.map((item) => (
        <h1 key={item.id}>{item.name}</h1>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemon,
  };
};

export default connect(mapStateToProps, { fetchPokemon })(App);
