import React, { useState } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

const SearchForm = (props) => {
  const [searchPokemon, setSearchPokemon] = useState('pikachu');

  const changeHandler = (e) => {
    setSearchPokemon(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.setUrl(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}`);
  };

  const renderLoader = () => {
    return (
      <>
        <Loader
          type="Puff"
          color="#00BFFF"
          height={15}
          width={115}
          timeout={30000} //3 secs
        />
      </>
    );
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" onChange={changeHandler} value={searchPokemon}></input>
      <button>{props.isLoading ? renderLoader() : 'Search'}</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps, {})(SearchForm);
