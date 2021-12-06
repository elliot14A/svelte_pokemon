import { Pokemon } from "../models/pokemon_model";
import { writable } from "svelte/store";

export const pokemonStore = writable<Pokemon[]>([])

const fetchPokemon = async (): Promise<void> => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=150"
    const data = await fetch(url)
    const pokemons = await data.json()
    const loadedPokemon: Pokemon[] = pokemons.results.map((data: unknown, index: number) => {
        data["id"] = index + 1
        return new Pokemon().fromJson(data)
    });
    pokemonStore.set(loadedPokemon);
}

fetchPokemon()
