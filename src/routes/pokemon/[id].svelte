<script context="module">
    export async function load({page}) {
        const id = page.params.id;
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const data = await fetch(url);
        const pokemon = await data.json()
        return {props: {pokemon}}
    }
</script>

<script>
    export let pokemon;
    console.log(pokemon)
</script>
<div class="flex flex-col items-center">
    <h1 class="text-4xl text-center my-6 uppercase">{pokemon.name}</h1>
    <div class="flex">
        <img class="card-image" src={pokemon.sprites.back_default} alt={pokemon.name}/>
            
        <img class="card-image" src={pokemon.sprites.front_default} alt={pokemon.name}/>
    </div>
    <p>type: {pokemon.types[0].type.name} | weight: {pokemon.weight}</p>
</div>
