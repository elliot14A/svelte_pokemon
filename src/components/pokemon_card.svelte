<script lang="ts">
import type { Pokemon } from "../models/pokemon_model";
    export let pokeman: Pokemon
</script>
<a class="p-8 bg-gray-100 
text-gray-900 text-center 
rounded-md shadow-sm 
hover:shadow-md flex flex-col items-center" href={`/pokemon/${pokeman.id}`}>
    <img class="h-40 w-40" src={pokeman.url} alt={pokeman.name} />
    <h3 class="text-lg text-center uppercase">{pokeman.id}. {pokeman.name}</h3>
</a>