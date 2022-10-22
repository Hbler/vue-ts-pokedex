<template>
  <section>
    <PokeCard
      :pokemon="pokemon"
      v-show="pokemons.length > 0"
      :key="pokemon.id"
      v-for="pokemon in pokemons"
    />

    <div v-show="pokemons.length === 0">
      <h2>{{ text }}</h2>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PokeCard from "./PokeCard.vue";

export default defineComponent({
  name: "PokeList",
  props: ["pokemons", "text"],
  components: { PokeCard },
});
</script>

<style scoped lang="scss">
section {
  width: 100%;
  height: 50vh;

  padding: 3rem 0;

  gap: 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  overflow: scroll;

  background-color: #5552;
}
</style>
