<svelte:head>
    <title>Pokedex</title>
</svelte:head>
<script lang="ts">
    import type { Pokemon } from "../models/pokemon_model";
    import PokemonCard from "../components/pokemon_card.svelte";
    import { pokemonStore } from "../store/pokemon_store";

    let searchTerm = ""
    let filteredPokemon: Pokemon[] = []
    $: {
        if(searchTerm) {
            filteredPokemon = $pokemonStore.filter(
                (pokeman) => pokeman.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        } else {
            filteredPokemon = $pokemonStore
        }
    }
</script>

<h1 class="text-4xl text-center my-2 uppercase">Pokedex</h1>

<input 
class=" h-10 w-full rounded-md text-lg p-4 border-2 border-gray-200" 
type="text" 
bind:value={searchTerm}
placeholder="Search Pokemom"/>

<div class="py-4 grid gap-4 md: grid-cols-2" >
    {#each filteredPokemon as pokeman}
        <PokemonCard pokeman={pokeman} />
    {/each}
</div>