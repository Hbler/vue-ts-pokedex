<template>
  <footer>
    <p>
      Desenvolvido por: <a href="https://portfolio.hbler.com">Hugo Bler</a> |
      2022
    </p>
    <p>Powerd by: <a href="https://pokeapi.co/">PokeApi</a></p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterHbler",
});
</script>

<style scoped lang="scss">
footer {
  padding: 0.7rem;

  color: black;

  gap: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #ef5350;

  a {
    color: #feca1b;
    font-weight: 500;
    text-decoration: none;
  }
}
</style>
