import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import GetPokemons from "./GetPokemons";
import Sugestions from "./Sugestions";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState({});
  const [search, setSearch] = useState("");
  const username = useSelector((state) => state.username);
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");

  //============= Get all pokemons =============
  useEffect(() => {
    getAllPokemons();
  }, []);

  const getAllPokemons = () => {
    let url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279";
    if (filter) {
      url += `&abilities=${filter}`;
    }
    axios
      .get(url)
      .then((res) => setPokemons(res.data))
      .catch((error) => {
        console.error("Error fetching pokemons:", error);
      });
  };

  //============= Get suggestions =============
  useEffect(() => {
    getAllPokemons();
    let test;
    if (search != "") {
      test = pokemons.results?.filter((pokemon) =>
        pokemon.name.startsWith(search)
      );
      setSuggestions(test?.map((poke) => poke.name));
    }
  }, [search]);

  //============ initialValues=================
  const initialValues = () => {
    setSuggestions([]);
    setSearch("");
  };

  return (
    <div className="pokedex">
      <div className="welcome">
        <p>
          Hola <span>{username}</span>, aca podes encontrar tus Pokemones
          favoritos!
        </p>
        <div className="search__container">
          <input
            placeholder="Buscar pokemon por nombre"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
          <button onClick={() => navigate(`/pokedex/${search}`)}>
            <i className="bx bx-search bx-sm"></i>
          </button>
          {search != "" && (
            <Sugestions suggestions={suggestions} setSearch={setSearch} />
          )}
        </div>
      </div>
      <GetPokemons
        pokemons={pokemons}
        setPokemons={setPokemons}
        initialValues={initialValues}
      />
    </div>
  );
};

export default Pokedex;
