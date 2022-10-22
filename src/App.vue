<template>
  <div>
    <Header />
    <SearchBar @search_pokeName="getPokemons" />
    <PokeList :pokemons="pokemons" :text="text" v-show="!loading" />
    <FooterHbler />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Header from "./components/Header.vue";
import PokeList from "./components/PokeList.vue";
import SearchBar from "./components/SearchBar.vue";
import FooterHbler from "./components/Footer.vue";

import { IEvolutionChain, IPokemon } from "./utils/interfaces";

export default defineComponent({
  name: "App",
  methods: {
    async getPokemons(name: string): Promise<string | void> {
      if (name === "") return;

      this.loading = true;
      this.pokemons = [];

      const species_url = `https://pokeapi.co/api/v2/pokemon-species/${name.toLocaleLowerCase()}/`;

      const pokemon: IPokemon | number = await this.searchDatabase(species_url);

      if (typeof pokemon === "number") {
        this.loading = false;
        return;
      }

      const evolution_url = pokemon.evolution_chain.url;

      const evolutionReq = await fetch(evolution_url);

      const evolutionData = await evolutionReq.json();

      await this.recursiveRequests([evolutionData.chain]);

      await this.getStats();

      this.loading = false;
    },
    async searchDatabase(url: string): Promise<IPokemon | number> {
      const res = await fetch(url);

      if (res.status === 404) {
        this.text = "Pokémon não encontrado. Faça uma nova busca!";
        return res.status;
      }

      const data = await res.json();

      return data;
    },
    async recursiveRequests(arr: IEvolutionChain[]) {
      if (arr.length === 0) return;

      for (let i = 0; i < arr.length; i++) {
        const obj = arr[i];

        if (!obj) continue;

        const evolvesTo = obj.evolves_to;

        const url = obj.species.url;

        const pokemon = await this.searchDatabase(url);

        if (typeof pokemon === "number") return;

        this.pokemons.push(pokemon);

        if (evolvesTo.length === 0) continue;
        this.recursiveRequests(evolvesTo);
      }
    },
    async getStats(): Promise<void> {
      const url = "https://pokeapi.co/api/v2/pokemon/";

      for (let poke of this.pokemons) {
        const res = await fetch(url + poke.name);

        const data = await res.json();

        poke.stats = data.stats;
        poke.sprites = data.sprites;
        poke.types = data.types;
        poke.height = data.height;
        poke.weight = data.weight;
      }

      console.log(this.pokemons);
    },
  },
  components: {
    Header,
    SearchBar,
    PokeList,
    FooterHbler,
  },
  data() {
    return {
      pokemons: [] as IPokemon[],
      loading: false,
      text: "Faça uma busca!",
    };
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;

  * {
    transition: 0.3s;
  }
}
</style>
